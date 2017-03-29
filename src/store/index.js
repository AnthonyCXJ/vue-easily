import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'
import blog from './modules/blog'

Vue.use(Vuex);

const state = {};
const mutations = {};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    blog
  },
  strict: config.env === 'development',
})
