import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
Vue.use(Router)
Vue.use(Resource)
import home from './containers/zyp'

// application routes
const routes = [
  { path: '/', component: home }
]
// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
