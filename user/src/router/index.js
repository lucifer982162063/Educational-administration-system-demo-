import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Main from '@/components/Main'
import MyLesson from '@/components/MyLesson'
import Bukaobaoming from '@/components/Bukaobaoming'
import Jidianjisuan from '@/components/Jidianjisuan'
import Xuejixinxi from '@/components/Xuejixinxi'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'user',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'user',
      components: {
        header: Header,
        main: Main
      }
    },
    {
      path: '/mylesson',
      name: 'myLesson',
      components: {
        header: Header,
        main: MyLesson
      }
    },
    {
      path: '/bukaobaoming',
      name: 'bukaobaoming',
      components: {
        header: Header,
        main: Bukaobaoming
      }
    },
    {
      path: '/jidianjisuan',
      name: 'jidianjisuan',
      components: {
        header: Header,
        main: Jidianjisuan
      }
    },
    {
      path: '/xuejixinxi',
      name: 'xuejixinxi',
      components: {
        header: Header,
        main: Xuejixinxi
      }
    },
  ]
})
