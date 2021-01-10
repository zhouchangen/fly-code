import axios from 'axios'
import Vue from 'vue';
// import Cookie from "js-cookie";
import { Toast } from 'vant';
import { _isLogin } from '@/utils/index';
import qs from "qs";

Vue.use(Toast);

axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {

  if(process.env.NODE_ENV === 'production'){
    if(location.pathname !== '/recommendRegister') { 
      _isLogin()
    }
   }
  // config.headers['token'] = token;
  return config;
},(error) => {
  if(error) {
    return Toast('请求头设置错误')
  }
  return Promise.reject('error')
})
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const _post = (url, param, callBack, errfun) => {
    return axios({
        method: "POST",
        url,
        headers: {
            'content-type': 'application/json', // 默认值
        },
        data: param
    }).then((res)=>{
      return callBack(res.data)
    }, (error) => {
      if(errfun) errfun(error);
      return false 
    }).catch((error) => {
      console.log(error)
      return false
    })
}

const _get = (url, data, callBack, errfun) => {
    return axios.get(
       url,{
        params: data,
        header: {
        'content-type': 'application/json', // 默认值
      }
    })
    .then((res)=>{
      return callBack(res.data)
    }, (error) => {
      if(errfun) errfun(error)
      return false 
    }).catch((error) => {
        console.log('http报错',error)
        return false
    })
}

const _form = (url, param, callBack, errfun) => {
  return axios({
      method: "POST",
      url,
      headers: {
          'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      data: qs.stringify(param)
  }).then((res)=>{
    return callBack(res.data)
  }, (error) => {
    if(errfun) errfun(error);
    return false 
  }).catch((error) => {
    console.log(error)
    return false
  })
}

export { _get, _post, _form}