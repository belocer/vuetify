import Vue from 'vue'
import Router from 'vue-router'

import StatCard from './../components/StatCard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'stat',
      component: StatCard
    }
  ]
})
