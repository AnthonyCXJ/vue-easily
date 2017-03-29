<template>
  <div class="layout-middle page-album">
    <p>这是我的相册</p>
    <img src="../assets/images/page-album.jpg" alt="">
  </div>
</template>

<script>
  export default {
    created(){
      this.$utils.setTitle('我的相册');
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../components/commons/styles/index";

  .page-album {
    p {
      display: inline-block;
    }
    img {
      width: 100px;
    }
  }
</style>
