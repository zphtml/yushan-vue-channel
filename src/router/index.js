import Vue from 'vue';
import Router from 'vue-router';


/* login*/
import Login from '../views/login/';


Vue.use(Router);

/**
 * icon :the icon show in the sidebar
 * hidden: if hiddenLtrue will not show in the sidebar
 * redirect :if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu
 * meta: { role: ['admin'] }  will control the page role
 */
export default new Router({
        // mode: 'history', //后端支持可开
        scrollBehavior: () => ({ y: 0 }),
    routes: [
    {
        path: '/',
        component: Login,
        hidden: true,
        name: 'index',
        meta: {title: '首页'},
    },
    { path: '*', redirect: '/404', hidden: true }
]
});
