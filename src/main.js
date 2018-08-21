import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress';
import ElementUI from 'element-ui';
import moment from 'moment';
import 'element-ui/lib/theme-chalk/index.css';
import permission from './store/permission';

import store from './store';
Vue.use(ElementUI);
Vue.config.productionTip = false;
// register global progress.
const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
        next({ path: '/' });
        NProgress.done();
    } else {
        permission.init({ // 初始化权限
            roles: store.getters.roles,
            router: router.options.routes
        });
        if (to.meta && to.meta.role) { // 判断即将进入的页面是否需要权限

            if (permission.hasPermission(store.getters.roles, to)) { // 判断权限
                next(); // 有权限
            } else {
                NProgress.done();
            }
        } else { // 页面不需要权限 直接进入
            next();
        }
    }
} else {

    if (whiteList.indexOf(to.path) !== -1) { // 在免登入白名单，直接进入
        next()
    } else {
        next('/login'); // 否则全部重定向到登录页
        NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
}
});

new Vue({
  router,
  store,
    moment,
  render: h => h(App)
}).$mount('#app')
