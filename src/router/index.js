import Vue from 'vue';
import store from '../store';
import Router from 'vue-router';
import {roleType} from '@/utils/constant'; //权限部分

import Layout from '../views/layout/Sidebar';

/* login*/
import Login from '../views/login/';
import acount from '../views/acount/acount';
import requestApply from '../views/requestApply/requestApply';


import demo1_1 from '../views/demo/demo1_1';
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
        path: '/acount',
        component: Layout,
        redirect: '/acount/list',
        name: 'acount',
        meta: {title: '账户管理'},
        noDropdown: true,
        children: [
            {
                path: 'list',
                meta: {title: '首页'},
                component: acount,
                name: '/acount',
            },
            {
                path: 'demo01',
                component: demo1_1,
                name: 'demo01',
            },
        ]
    },
    {
        path: '/demo1',
        component: Layout,
        redirect: '/demo1/index',
        meta: {title: '提交需求2',role:[roleType.customer_list]},
        name: '提交需求2',
        noDropdown: true,
        children: [
            {path: 'index', component: demo1, name: 'demo2'},
        ]
    },
    {
        path: '/demo2',
        component: Layout,
        redirect: '/demo2/requestApply',
        meta: {title: '需求申请'},
        name: 'requestApply',
        noDropdown: true,
        children: [
            {path: 'requestApply', component: requestApply, name: 'requestApply'},
        ]
    },
    {
        path: '/demo3',
        component: Layout,
        redirect: '/demo3/index',
        name: '提交需求4',
        meta: {title: '提交需求4'},
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
