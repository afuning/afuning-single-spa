import Vue from 'vue'
import Axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
// import { clearLoginInfo } from '@/utils'

const axios = Axios.create({
  timeout: 10000,
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

const notice = message => {
  Message({
    message,
    duration: 2000,
    showClose: false,
    type: 'error'
  })
}

const handleServerError = (response, message = '未知错误') => {
  const { status } = response
  const statusMap = {
    400: () => notice('错误请求'),
    403: () => notice('拒绝访问'),
    404: () => notice('请求资源未找到'),
    504: () => notice('服务器异常, 请稍后再试'),
    500: () => notice('服务器异常')
  }

  if (status) {
    statusMap[status] ? statusMap[status]() : notice(message)
  } else {
    return Promise.reject(new Error(message))
  }
}

const handleLogicError = response => {
  const { msg } = response

  return Promise.reject(new Error(msg.replace('<br>', '')))
}

axios.interceptors.request.use(
  config => {
    const data = { t: Date.now() }
    config.headers.token = Vue.cookie.get('token')

    if (config.method === 'get') {
      config.params = { ...config.params, ...data }
    }

    return config
  },
  error => Promise.error(error)
)

axios.interceptors.response.use(
  res => {
    const { data, status } = res
    const { code } = data

    if (status !== 200) {
      return handleServerError(res)
    } else {
      if (code === 0) {
        return Promise.resolve(data.data)
      } else if (data.data) {
        return Promise.reject(data)
      } else {
        return handleLogicError(data)
      }
    }
  },
  error => {
    return handleServerError({}, error.message)
  }
)

export default axios
