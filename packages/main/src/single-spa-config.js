import * as singleSpa from 'single-spa'
import axios from 'axios'

/*
* runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
* */
const runScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

/*
* getManifest：远程加载manifest.json 文件，解析需要加载的js
* */
const getManifest = async (url, bundle) => {
  const { data } = await axios.get(url)
  const { entrypoints, publicPath } = data
  const assets = entrypoints[bundle].assets
  for (const asset of assets) {
    await runScript(publicPath + asset).then(() => {
      if (asset === assets[assets.length - 1]) {
        return Promise.resolve()
      }
    })
  }
}

singleSpa.registerApplication( // 注册微前端服务
  'vueMember',
  async () => {
    console.log(1)
    // 注册用函数，
    // return 一个singleSpa 模块对象，模块对象来自于要加载的js导出
    // 如果这个函数不需要在线引入，只需要本地引入一块加载：
    // () => import('xxx/main.js')
    let singleVue = null
    await getManifest('http://127.0.0.1:7002/manifest.json', 'app')
    singleVue = window.singleVue
    return singleVue
  },
  location => location.pathname.startsWith('/member') // 配置微前端模块前缀
)

singleSpa.start()
