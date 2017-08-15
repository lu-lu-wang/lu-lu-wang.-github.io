import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/view/index'
Vue.use(Router)
const routes = [{
  path: '/',
  name: 'index',
  // component: index
  component: resolve => require(['@/view/index'], resolve)
}, {
  path: '/list',
  name: 'list',
  component: resolve => require(['@/view/list'], resolve)
}, {
  path: '/topic/:id',
  name: 'topic',
  component: resolve => require(['@/view/topic'], resolve)
}]

let router = new Router({
  base: '/',
  routes,
  linkActiveClass: 'weui-bar__item_on',
  mode: 'history'
})

export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     }
//   ]
// })

