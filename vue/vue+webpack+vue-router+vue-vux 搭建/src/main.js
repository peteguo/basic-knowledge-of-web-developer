// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
// 引用路由插件
import VueRouter from 'vue-router'
// 试用路由插件
Vue.use(VueRouter)
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
const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')
