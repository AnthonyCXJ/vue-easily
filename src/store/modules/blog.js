import Vue from "vue";

const state = {
  list: null
};
const mutations = {
  setBlogList (state, data) {
    state.list = data;
  }
};
const actions = {
  fetchBlogList({commit, state}){
    Vue.http.get('/apis/blog-list').then(res => {
      let data = res.data.data;

      commit('setBlogList', data);
    }, res => {
    });
  }
};

export default {
  state,
  mutations,
  actions
}
