import axios from '@/utils/axios.conf'
// 用户菜单
export const fetchNavMenu = (params) => axios.get('/sys/menu/nav', { params })
