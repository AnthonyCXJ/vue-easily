<template>
  <div class="layout-middle">
    <p class="page-home">这是我的个人主页</p>
  </div>
</template>

<script>
  export default {
    created(){
      this.$utils.setTitle('首页');
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../components/commons/styles/index";
</style>
