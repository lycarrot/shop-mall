import axios,{AxiosRequestConfig} from 'axios';
import config from './config'
const baseUrl:string = process.env.NODE_ENV === 'development' ? config.dev.baseUrl : config.pro.baseUrl


class HttpRequest {
  baseUrl:string
  constructor (baseUrl:string) {
    this.baseUrl = baseUrl
  }
  request(options:AxiosRequestConfig){
    const instance = axios.create()
    if (options.headers) {
      options.headers = Object.assign({},{
        baseURL:this.baseUrl,
      } ,options.headers)
    }
    return new Promise((resolve, reject) => {
      instance(options).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default   new HttpRequest(baseUrl)