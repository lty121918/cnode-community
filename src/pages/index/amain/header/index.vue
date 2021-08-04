<template>
  <div class="header">
      <!-- <a href="javascript:;" class="topic-tab on" @click="checked(0)" :class='{on:0 == domIndex}'>全部</a>
      <a href="javascript:;" class="topic-tab" @click="checked(1)" :class='{on:1 === domIndex}'>精华</a>
      <a href="javascript:;" class="topic-tab" @click="checked(2)" :class='{on:2 === domIndex}'>分享</a>
      <a href="javascript:;" class="topic-tab" @click="checked(3)" :class='{on:3 == domIndex}'>问答</a>
      <a href="javascript:;" class="topic-tab" @click="checked(4)" :class='{on:4 == domIndex}'>招聘</a>
      <a href="javascript:;" class="topic-tab" @click="checked(5)" :class='{on:domIndex==5}'>客户端测试</a> -->
      <a href="javascript:;" class="topic-tab"
         v-for="(item,index) in headerNews"
         @click="checked(index)"
        :class="{on:index===domIndex}">{{item}}</a>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      headerNews:["全部","精华","分享","问答","招聘","客户端测试"],
      domIndex:null
    }
  },
  methods:{
     checked(index){
            this.domIndex = index;
            console.log(`${this.domIndex}`);
            console.log(this.domIndex==3);
            
        }
  }
}
</script>

<style lang="less" scoped >
@import "./index.less";
</style>



