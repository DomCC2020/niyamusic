import axios from 'axios'
import { BASE_URL } from './config'

const instance = axios.create({
  baseURL: BASE_URL
})

instance.interceptors.response.use(
  res=>{
    // console.log(res)
    return res.data
  },
  error => {
    console.log(error, '网络错误')
    return error
  }
)

function toParamsString (params = {}) {
  const paramsStr = Object.entries(params).reduce((arr, [k, v]) => {
    return arr.concat(encodeURIComponent(k) + '=' + encodeURIComponent(v))
  }, []).join('&')
  return `?${paramsStr}`
}

const get = (url, params) => instance.get(`${url}${toParamsString(params)}`)
const post = (url, params) => instances.post(url, params)

const instances = {
  request: instance,
  get,
  post
}

export default instances
