import Vue from "vue";
import VueRouter from "vue-router";

import pageApp from "../pages/app.vue";
import pageHome from "../pages/home.vue";
const pageAlbum = r => require.ensure([], () => r(require('../pages/album.vue')), 'page-album');
const pageFeedback = r => require.ensure([], () => r(require('../pages/feedback.vue')), 'page-feedback');
const pageBlogList = r => require.ensure([], () => r(require('../pages/blog/list.vue')), 'page-blog-list');
const pageBlogDetail = r => require.ensure([], () => r(require('../pages/blog/detail.vue')), 'page-blog-detail');

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [{
    path: '/',
    component: pageApp,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: pageHome
      },
      {
        path: '/album',
        component: pageAlbum
      },
      {
        path: '/feedback',

        component: pageFeedback,
      }, {
        path: '/blist',
        component: pageBlogList,
      }, {
        path: '/bdetail',
        component: pageBlogDetail,
      }
      /*{
       path: '*',
       component: page404
       }*/]
  }]
});
module.exports = router;
