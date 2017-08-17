// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import 'weui'
import FastClick from 'fastclick'
import mint from './mint'
import store from './store'
import 'mint-ui/lib/style.css'
import './assets/style/icon.less'
import './assets/style/flex-app.less'
import './assets/style/page.less'
import './assets/style/github-markdown.css'
import './assets/style/topic.scss'
import * as filters from './filters'
Vue.use(VueScroller)
Vue.config.productionTip = false
// 解决300ms延迟问题
FastClick.attach(document.body)
// 引入mint-ui组件
mint.forEach((v) => {
  Vue.component(v.name, v)
})
// 实例化vue的filters
Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
