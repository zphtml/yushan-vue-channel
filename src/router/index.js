import Vue from 'vue';
import store from '../store';
import Router from 'vue-router';
import {roleType} from '@/utils/constant'; //权限部分

/* login*/
import Login from '../views/login/';
import Layout from '../views/layout/Sidebar';
import demo from '../views/demo/demo';
import demo1 from '../views/demo/demo1';
import demo2 from '../views/demo/demo2';
import demo3 from '../views/demo/demo3';

Vue.use(Router);

/**
 * icon :the icon show in the sidebar
 * hidden: if hiddenLtrue will not show in the sidebar
 * redirect :if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu
 * meta: { role: ['admin'] }  will control the page role
 */
export const constantRouterMap = [
    {path: '/Login',component: Login,hidden: true,name: 'Login'},
    {path: '/',component: Login,hidden: true,name: 'Login'},
    { path: '*', redirect: '/404', hidden: true },
    {
        path: '/demo',
        component: Layout,
        redirect: '/demo/index',
        name: '提交需求1',
        noDropdown: true,
        children: [
            {path: 'index', component: demo,    name: 'demo1'},
        ]
    },
    {
        path: '/demo1',
        component: Layout,
        redirect: '/demo1/index',
        name: '提交需求2',
        noDropdown: true,
        children: [
            {path: 'index', component: demo1, name: 'demo2'},
        ]
    },
    {
        path: '/demo2',
        component: Layout,
        redirect: '/demo2/index',
        name: '提交需求3',
        noDropdown: true,
        children: [
            {path: 'index', component: demo2, meta: {role:[roleType.customer_list]},name: 'demo3'},
        ]
    },
    {
        path: '/demo3',
        component: Layout,
        redirect: '/demo3/index',
        name: '提交需求4',
        noDropdown: true,
        children: [
            {path: 'index', component: demo3, name: 'demo4'},
        ]
    },
]
store.state.permission.routers = constantRouterMap;
export default new Router({
        // mode: 'history', //后端支持可开
        scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
