import axios from 'axios';

export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: process.env.BASE_API,
      // timeout: 2000,
      headers: { 'token':''  }
    });
    instance(options)
            .then(response => {
              const res = response.data;
              resolve(res);
            })
            .catch(error => {

              reject(error);
            });
  });
}
