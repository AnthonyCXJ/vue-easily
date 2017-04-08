<template>
  <footer id="c-app-footer">
    版权所有 侵权必究



  </footer>
</template>
<script>
  export default {}
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../variable";

  #c-app-footer {
    @include layout-main;
    margin-top: 10px;
    text-align: center;
    color: #fff;
    height: 100px;
    line-height: 100px;
    font-size: $size-font-big;
    background: $color-primary;
  }
</style>
