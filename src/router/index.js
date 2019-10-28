import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registro from '@/components/register'
import timeline from '@/components/timeline'
import newEvent from '@/components/newEvent'
import singleEvent from '@/components/singleEvent'
import firebase from 'firebase';

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registro',
      name: 'registro',
      component: registro
    },

    {
      path: '/timeline',
      name: 'timeline',
      component: timeline,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new',
      name: 'new event',
      component: newEvent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/event/:id',
      name: 'single event',
      component: singleEvent,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('timeline');
  else next();
});


export default router;
