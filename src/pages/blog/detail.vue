<template>
  <div class="layout-middle page-blog-detail">
    <h1>标题{{paramId}}</h1>
    <div>内容{{paramId}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        paramId: 0
      }
    },
    created(){
      this.paramId = this.$route.query['id'];

      if (this.paramId) {
        this.$utils.setTitle('博客' + this.paramId);
      }
      else {
        alert('文章参数错误');
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../../components/commons/styles/index";

  .page-blog-detail {
    > h1 {
      height: 35px;
      line-height: 35px;
      text-align: center;
      border-bottom: 1px dashed #fff;
    }
    > div {
      padding: 10px 0;
    }
  }
</style>
