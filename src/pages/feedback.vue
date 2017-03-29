<template>
  <div class="layout-middle page-feedback">
    <form method="post" v-on:submit.stop.prevent="submitEvent" action="">
      <div>
        <label for="Jp-feedback-contact">联系方式</label>
        <input v-model="contact" placeholder="请输入联系电话或邮箱" name="contact" id="Jp-feedback-contact" type="text">
      </div>
      <div>
        <label for="Jp-feedback-content">反馈内容</label>
        <textarea v-model="content" placeholder="请输入内容" name="content" id="Jp-feedback-content" cols="30"
                  rows="10"></textarea>
      </div>
      <div>
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        contact: '这是默认联系方式',
        content: '这是默认内容'
      }
    },
    methods: {
      submitEvent: function (event) {
        let formData = JSON.stringify({
          contact: this.contact,
          content: this.content
        });
        alert('提交的内容为：' + formData);
      }
    },
    created(){
      this.$utils.setTitle('意见反馈');
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" type="text/scss">
  @import "../components/commons/styles/index";

  .page-feedback {
    form {
      padding: 20px;
      > div {
        line-height: 25px;
        padding: 5px 0;
        label {
          display: inline-block;
          width: 100px;
        }
        input, textarea, button {
          border: 0;
          margin: 0;
          background: #fff;
          width: 300px;
          height: 20px;
          padding: 5px;
        }
        textarea {
          height: 100px;
          resize: none;
        }
        button {
          margin-top: 30px;
          margin-left: 108px;
          width: 80px;
          height: 25px;
          cursor: pointer;
        }
      }

    }
  }
</style>
