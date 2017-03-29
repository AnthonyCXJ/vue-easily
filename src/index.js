import Vue from "vue";
import VueResource from "vue-resource";

import router from "./routers";
import config from "./config";
import store from "./store";
import utils from "./components/commons/utils";
import filter from "./components/commons/filter";

Vue.prototype.$config = config;
Vue.prototype.$utils = utils;
/* vue resource */
Vue.use(VueResource);
Vue.http.interceptors.push(function (request, next) {
  let requestUrl = request.url,
    isApi = request.url.indexOf('/apis') > -1;

  request.url = isApi ? request.url.replace('/apis/', 'http://localhost:3000/') : request.url;
  // headers
  /*request.headers.set('appkey', 'vue');*/
  // continue to next interceptor
  next(function (response) {
    let data = response.data;

    if (isApi) {
      if (parseInt(data.status) > 0) {
        alert('请求' + requestUrl + '失败：' + data.msg);

        response.status = 400;
        response.statusText = data.msg;

        return data;
      }
    }
  });
});
//filter
Vue.filter('dateFilter', filter.dateFormat);
/* start */
new Vue({
  router,
  store
}).$mount('#app');
