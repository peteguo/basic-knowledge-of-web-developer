require('./assets/css/reset.css');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
// 引用路由插件
import VueRouter from 'vue-router'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
// 试用路由插件
Vue.use(VueRouter)
Vue.use(VueLazyload,{
  preLoad: 3.5,
  error: "http://cn.vuejs.org/images/logo.png",
  loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
import store from './vuex/store'
//import ElementUI from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
//引入路由配置文件
import routes from './config/routes'
// 使用配置文件规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes })
/* eslint-disable no-new */
console.log(router.app);
const app = new Vue({
      router: router,
      store:store,
      linkActiveClass: 'active',
      render: h => h(App)
}).$mount('#app')
