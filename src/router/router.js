import Vue from 'vue'
import Vuerouter from 'vue-router'
import Home from '@/components/Home'
import Users from '@/components/Users'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'

Vue.use(Vuerouter)

export default new Vuerouter({
  routes: [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/hello', component: HelloWorld },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' }
  ],
  mode: 'history'
})
