<template>
  <div class="backtop" @click="backtop()" :class="{noShow:noShow}">
      回到顶部
  </div>
</template>

<script>
import {selfScrollTo} from "../../../utils/utils"
export default {
  data(){
    return{
      noShow:true
    }
  },
methods:{
  backtop(){
    selfScrollTo(-8);
  }

},
mounted(){
  window.addEventListener('scroll',()=>{
    let scrollTop=document.documentElement.scrollTop;
    if(scrollTop>100){
      this.noShow=false;//滚动条大于100，返回顶部出现
    }else{
      this.noShow=true;
    }
    
  })
 
}
}
</script>
<style lang="less" scoped>
@import "./index.less";
</style>