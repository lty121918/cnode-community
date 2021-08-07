<template>
  <div class="header">
      <a href="javascript:;" class="topic-tab"
         v-for="(item,index) in headerNews"
         @click="checked(item.tab)"
        :class="{on:index===domIndex}">{{item.text}}</a>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      // ask share job good
      headerNews:[
        {text:"全部", tab:""},
        {text: "精华", tab: "good"},
        {text: "分享", tab: "good"},
        {text: "问答", tab: "ask"},
        {text: "招聘", tab: "job"},
        {text: "客户端测试", tab: "good"}
        // "全部","精华","分享","问答","招聘","客户端测试"
        ],
      domIndex:0
    }
  },
  methods:{
     checked(index){
            this.domIndex = index;
            console.log(`${this.domIndex}`);
            console.log(this.domIndex==index);
            this.$emit('changeTab',index);
        }
  }
}
</script>

<style lang="less" scoped >
@import "./index.less";
</style>



