<template>
  <header id="c-app-header">
    <img src="../../assets/images/header-top.png" alt="">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/album">我的照片</router-link>
      <router-link to="/blist">我的博客</router-link>
      <router-link to="/feedback">意见反馈</router-link>
    </nav>
  </header>
</template>
<script>

  export default {
    data: function () {
      return {}
    },
    mounted: function () {
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../variable";

  #c-app-header {
    @include layout-main;
    padding-top: 10px;
    padding-bottom: 10px;

    img {
      width: 100%;
      height: 120px;
    }
    nav {
      height: 40px;
      margin-top: 10px;
      background: $color-primary;

      a {
        display: inline-block;
        height: 100%;
        line-height: 40px;
        width: 24.4%;
        border-right: 1px solid #ffffff;
        text-align: center;
        font-size: $size-font-big;
        color: #ffffff;
        text-decoration: none;

        &:last-child {
          border-right: 0;
        }
      }
    }
  }
</style>
