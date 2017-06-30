import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/containers/main/main.vue'
import Error404 from '@/containers/error/404.vue'
// import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Error404',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/*',
      name: 'Error404',
      component: Error404
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next)
//   console.log(this.$route)
// })

export default router
