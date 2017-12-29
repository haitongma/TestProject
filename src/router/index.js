import Vue from 'vue'
import Router from 'vue-router'
import MyShare from '../components/MyShare.vue'
import LifeCycle from '../components/LifeCycle'
import Transition1 from '../components/VueTransition/Transition1'
import Transition2 from '../components/VueTransition/Transition2'
import Transition3 from '../components/VueTransition/Transition3'
import Transition4 from '../components/VueTransition/Transition4'
import Transition5 from '../components/VueTransition/Transition5'
import Transition6 from '../components/VueTransition/Transition6'
import Transition7 from '../components/VueTransition/Transition7'
import Transition8 from '../components/VueTransition/Transition8'
import Transition9 from '../components/VueTransition/Transition9'
import Transition10 from '../components/VueTransition/Transition10'
import Marquee from '../components/Marquee'
import Hash from '../components/Hash'
import ZhaoyuOrder from '../components/ZhaoyuOrder.vue'


const routes=[
  { path: '/', name: 'MyShare', component: MyShare},
  { path: '/lifeCycle', name: 'LifeCycle', component: LifeCycle},
  { path: '/transition1', name: 'Transition1', component: Transition1},
  { path: '/transition2', name: 'Transition2', component: Transition2},
  { path: '/transition3', name: 'Transition3', component: Transition3},
  { path: '/transition4', name: 'Transition4', component: Transition4},
  { path: '/transition5', name: 'Transition5', component: Transition5},
  { path: '/transition6', name: 'Transition6', component: Transition6},
  { path: '/transition7', name: 'Transition7', component: Transition7},
  { path: '/transition8', name: 'Transition8', component: Transition8},
  { path: '/transition9', name: 'Transition9', component: Transition9},
  { path: '/transition10', name: 'Transition10', component: Transition10},
  { path: '/marquee', name: 'Marquee', component: Marquee},
  { path: '/hash', name: 'Hash', component: Hash},
  { path: '/zhaoyu', name: 'ZhaoyuOrder', component: ZhaoyuOrder}

]
Vue.use(Router)
let router = new Router({
  mode:'history',//不加这句在路由上会自动添加上#/
  routes //等于routes:routes
})

export default router
