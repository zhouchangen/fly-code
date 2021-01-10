import { _get, _post, _form } from './http.js'

let baseUrl = '';
// 生产环境 -打包
baseUrl = '/proxyApi'; // uat本地走代理请求uat
// 支付环境 uat
// 支付环境 生产

if(process.env.NODE_ENV === "production"){
     if(process.env.VUE_APP_URLAPI == 'fpx-uat'){ // uat
          baseUrl = 'http://www.ssccs-uat.net/f'
     }
     if(process.env.VUE_APP_URLAPI == 'fpx-pr'){ // 生产
          baseUrl = 'http://www.ssccs.net/f'
     }
}

let apiUrl = baseUrl + '/fly'
// 收发件人查询
const queryAddress = apiUrl + '/address/queryAddress'
export {
    queryAddress,
  _get,
  _post,
  _form,
}