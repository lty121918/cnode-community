<template>
  <div class="header">
      <a href="javascript:;" class="topic-tab"
         v-for="(item,index) in headerNews"
         @click="checked(item.tab,index)"
        :class="{on:index===domIndex}">{{item.text}}</a>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      headerNews:[
        {text:"全部", tab:""},
        {text: "精华", tab: "good"},
        {text: "分享", tab: "share"},
        {text: "问答", tab: "ask"},
        {text: "招聘", tab: "job"},
        {text: "客户端测试", tab: "good"}
        ],
      domIndex:0
    }
  },
  methods:{
     checked(tab,index){
            this.domIndex=index;
            this.$emit('changeTab',tab);
        }
  }
}
</script>

<style lang="less" scoped >
@import "./index.less";
</style>



