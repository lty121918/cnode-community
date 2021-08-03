<template>
  <div class="header">
      <a href="#" class="topic-tab" 
      v-for="(item,index) in headerNews"
      @click="checked(index)"
      :class='{on:index === domIndex}'>{{item}}</a>
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
            let allDoms=document.querySelectorAll('.topic-tab');
            selfScrollTo(allDoms[index].offsetTop);
        }
  }
}
</script>

<style lang="less" scoped >
@import "./index.less";
</style>



