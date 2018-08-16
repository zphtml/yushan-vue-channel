/**
 * Created by jy on 2017/1/17.
 */
/*eslint-disable */
import { getTypen } from 'api/account';
import store from '../store';

export const roleType = {
  'sem':100001,
  'customer':100002,
  'tech':100003,
  'channel':100004
};

export function gettype(groupType) {

  return new Promise((resolve, reject) => {
    let typeList;
    if(!JSON.parse(localStorage.getItem("type"+groupType))){


      getTypen({type: groupType,}).then(response => {
        let data=response.data;
        let ind=[];
        for(let i=0;i<data.length;i++){
          ind.push(data[i])
        }
        localStorage.setItem("type"+groupType, JSON.stringify(ind));
        typeList = JSON.parse(localStorage.getItem("type"+groupType));

        resolve(typeList);
      }).catch(err => {
        reject(err);
      });
      /*$.ajax({
       url: '/api/sem/gettype',
       type: 'get',
       async: false,
       dataType: 'json',
       data: {type: groupType},
       headers:{'token':store.getters.token},
       success: function(data){
       /!* console.log(response)
       let data=response.data;*!/
       let ind=[];
       for(let i=0;i<data.length;i++){
       ind.push(data[i])
       }
       localStorage.setItem("type"+groupType, JSON.stringify(ind));
       typeList = JSON.parse(localStorage.getItem("type"+groupType));
       }
       })*/

    };
    if(JSON.parse(localStorage.getItem("type"+groupType))){
      typeList = JSON.parse(localStorage.getItem("type"+groupType));
      resolve(typeList);
    }
  });
}

export function getTypeName(mock,iden){
  return new Promise((resolve, reject) => {
    let name1 = '';
    let a = gettype(mock);
    try {
      for (let i = 0; i < a.length; i++) {
        if (a[i].id == iden) {
          name1 = a[i].name;
        }
      }
    } catch (e) {
    }
    if (name1 == '') {
      /*$.ajax({
       url: '/api/sem/gettype',
       type: 'get',
       async: false,
       dataType: 'json',
       data: {type: mock},
       headers:{'token':store.getters.token},
       success: function(data){
       let ind=[];
       for(let i=0;i<data.length;i++){
       ind.push(data[i])
       }
       localStorage.setItem("type"+mock, JSON.stringify(ind));
       let a1 = JSON.parse(localStorage.getItem("type"+mock));
       for(let i=0;i<a1.length;i++){
       if(a1[i].id==iden){
       name1=a1[i].name;
       }
       }
       }
       })*/

      getTypen({type: mock,}).then(response => {
        let data = response.data;
        let ind = [];
        for (let i = 0; i < data.length; i++) {
          ind.push(data[i])
        }
        localStorage.setItem("type" + mock, JSON.stringify(ind));
        let a1 = JSON.parse(localStorage.getItem("type" + mock));
        for (let i = 0; i < a1.length; i++) {
          if (a1[i].id == iden) {
            name1 = a1[i].name;
          }
        }


      }).catch(err => {
        reject(err);
      });

    }
    resolve(name1);
  })
}

