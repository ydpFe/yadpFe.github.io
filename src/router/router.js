"use strict";
import Vue      from 'vue';
import Router   from 'vue-router';
//异步组件
const form = r => require.ensure([], () => r(require('../page/form/form.vue')), 'form');
const tableShow = r => require.ensure([], () => r(require('../page/tableShow/tableShow.vue')), 'tableShow');
const others = r => require.ensure([], () => r(require('../page/others/others.vue')), 'others');
const tab = r => require.ensure([], () => r(require('../page/tab/tab.vue')), 'tab');
const customerFileManage = r => require.ensure([], () => r(require('../page/customerFileManage/customerFileManage.vue')), 'customerFileManage');
const dataManage = r => require.ensure([], () => r(require('../page/customerFileManage/dataManage.vue')), 'dataManage');
const login = r => require.ensure([], () => r(require('../page/login/login.vue')), 'login');
const index = r => require.ensure([], () => r(require('../page/index/index.vue')), 'index');
//个人中心-站内提醒
const stationReminder = r => require.ensure([], () => r(require('../page/personalCenter/stationReminder.vue')), 'stationReminder');
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    { path: "/", redirect: '/login'},
    { path: "/login", component: login, name:'login' , meta: {title: "登录"}},
    { path: "/index", component: index, name:'index' , meta: {title: "首页"}},
    { path: "/stationReminder", component: stationReminder, name:'stationReminder' , meta: {title: "站内提醒"}},
    { path: "/others", component: others, name:'others' , meta: {title: "其他组件"}},
    { path: "/form", component: form, name:'form' , meta: {title: "form"}},
	  { path: "/table", component: tableShow, name:'table' , meta: {title: "表格"}},
    { path: "/tab", component: tab, name:'tab' , meta: {title: "tab"}},
    { path: "/customerFileManage", component: customerFileManage, name:'customerFileManage' , meta: {title: "单位客户档案管理"}},
    { path: "/dataManage", component: dataManage, name:'dataManage' , meta: {title: "基础数据管理"}},
  ]
})