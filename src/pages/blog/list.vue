<template>
  <div class="layout-middle page-blog-list">
    <ul v-if="dataList !== null && dataList.length">
      <li v-for="item in dataList">
        <router-link :to="'/bdetail?id='+item.id">{{item.title}}</router-link>
        <span>{{item.create_at | dateFilter('yyyy-MM-dd')}}</span>
      </li>
    </ul>
    <p v-if="dataList !== null && !dataList.length">没有数据</p>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: mapState({
      'dataList': state => state.blog.list
    }),
    methods: {
      ...mapActions([
        'fetchBlogList'
      ])
    },
    created(){
      this.$utils.setTitle('我的博客');
      this.fetchBlogList();
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../../components/commons/styles/index";

  .page-blog-list {
    li {
      height: 30px;
      line-height: 30px;
      border-bottom: 1px dashed #fff;

      a {
        color: #fff;
        text-decoration: none;
      }
      span {
        float: right;
      }
    }
  }
</style>
