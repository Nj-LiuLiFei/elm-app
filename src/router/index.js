import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Discover from '@/components/Discover'
import Order from '@/components/Order'
import Profile from '@/components/Profile'
import Search from '@/components/Search'
import AboutUs from '@/components/AboutUs'
import PrivacyPolicy from '@/components/PrivacyPolicy'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
/*
routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
  */
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index.html',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'discover',
          name: 'discover',
          component: Discover
        },
        {
          path: 'order',
          name: 'order',
          component: Order
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/privacypolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    }
  ]
})
