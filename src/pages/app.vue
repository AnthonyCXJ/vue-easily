<template>
  <div>
    <app-header></app-header>
    <transition transition="expand" name="router-animation">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from '../components/commons/header.vue'
  import appFooter from '../components/commons/footer.vue'

  export default {
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../components/commons/styles/index";

  /*这儿可以设置路由切换动画*/
</style>
