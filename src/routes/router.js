import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from './../views/getTasks'
import Name from './../views/enterName'

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Your name',
    components: { default: Name }
  },
  {
    path: '/todo-list',
    name: 'Your tasks',
    components: { default: Tasks }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
