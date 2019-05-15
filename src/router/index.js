import Vue from 'vue'
import Router from 'vue-router'
import Unbegin from '@/pages/unbegin'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'unbegin',
      component: Unbegin,
      meta: {
        title: '活动开始'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '活动详情'
      }
    }
  ]
})
