import {  getInfo } from '@/api/login';
import permission from '@/store/permission';
import router from '../../router';
import Cookies from 'js-cookie';

const user = {
    state: {
        user: JSON.parse(localStorage.getItem('CRM-User') || '{}'),
        token: Cookies.get('CRM-Token'),
        roles:JSON.parse(localStorage.getItem('SET_ROLES') || '{}'),
    },

    mutations: {
        SET_TOKEN: (state, roles) => {
        Cookies.set('CRM-Token', roles);
state.token = roles;
},
SET_USER: (state, user) => {
    localStorage.setItem('CRM-User', JSON.stringify(user));
    state.user = user;
},
SET_ROLES: (state, roles) => {
    localStorage.setItem('SET_ROLES', JSON.stringify(roles));
    state.roles = roles;
},
},

actions: {
    // 邮箱登录
    getLogin({ commit, state }, userInfo) {
        return new Promise((resolve, reject) => {
            getInfo(userInfo).then(response => {
                if(response.code == 200){
            let userInfoData = response.data;
            commit('SET_USER', userInfoData);
            commit('SET_TOKEN', userInfoData.auth_key);
            const roles = response.auth;
            commit('SET_ROLES',roles);
            permission.init({ // 初始化权限
                roles: roles,
                router: router.options.routes
            });
            resolve('true');
            if(userInfo.checked == true){
                localStorage.setItem('accountNumber', JSON.stringify(userInfo));
            }else{
                localStorage.removeItem('accountNumber');
            }

        }else{
            resolve('false');
        }

    }).catch(error => {
            reject(error);
    });
    });
    },
    // 登出
    LogOut({ commit, state }) {
        commit('SET_TOKEN', '');
        Cookies.remove('CRM-Token');
        // Cookies.remove('SET_ROLES');
        localStorage.removeItem('SET_ROLES');
        return new Promise((resolve, reject) => {
                resolve()
            });
        // return new Promise((resolve, reject) => {
        //   logout(state.token).then(() => {
        //     commit('SET_TOKEN', '');
        //     commit('SET_ROLES', []);
        //     Cookies.remove('X-Ivanka-Token');
        //     resolve();
        //   }).catch(error => {
        //     reject(error);
        //   });
        // });
    },
}
};

export default user;
