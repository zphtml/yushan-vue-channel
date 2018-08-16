import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import NProgress from 'nprogress';

export function fetch(options) {
  return new Promise((resolve, reject) => {
    NProgress.start(); // 开启Progress
    const instance = axios.create({
      baseURL: process.env.BASE_API,
      // timeout: 2000,
      headers: { 'token': store.getters.token }
    });
    instance(options)
            .then(response => {
              const res = response.data;
              resolve(res);
              NProgress.done();
            })
            .catch(error => {
              Message({
                message: '发生异常错误,请刷新页面重试,或联系程序员',
                type: 'error',
                duration: 5 * 1000
              });
              console.log(error); // for debug
              reject(error);
              NProgress.done();
            });
  });
}

export default function _fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // timeout: 2000 // 超时
    });
    instance(options)
            .then(response => {
              const res = response.data;
              resolve(res);
            })
            .catch(error => {
              Message({
                message: error,
                type: 'error',
                duration: 5 * 1000
              });
              console.log(error); // for debug
              reject(error);
            });
  });
}
