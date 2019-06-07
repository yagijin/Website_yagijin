import Vue from 'vue'
import Router from 'vue-router'
import Research from '@/components/Research'
import Products from '@/components/Products'
import Hobby from '@/components/Hobby'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  /* mode: 'history', */
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Research',
      name: 'Research',
      component: Research
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Hobby',
      name: 'Hobby',
      component: Hobby
    }
  ]
})
