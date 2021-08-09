<template>
  <div class="header">
      <div class='putTop' v-show="msg.top==true">置顶</div> 
      <div class='putTop' v-show="msg.good==true&&msg.top==false">精华</div>
      <div class="putTab" v-show="msg.good==false&&msg.top==false&&msg.tab=='share'">分享</div>
      <div class="putTab" v-show="msg.good==false&&msg.top==false&&msg.tab=='ask'">问答</div>
      <div class="putTab" v-show="msg.good==false&&msg.top==false&&msg.tab=='job'">招聘</div>
       <div class="title">{{msg.title}}</div> 
       <ul>
            <li>发布于{{create_at}}</li>
            <!-- <li>作者{{msgdetail.author.loginname}}</li> -->
            <li></li>
            <li></li>
            <li>来自&nbsp; {{hd}}</li>
       </ul>
       <span></span>
  
  </div>
</template>

<script>
import {getDateDiff} from "../../../utils/utils"
export default {
    data(){
        return{
            hd:this.msg,
            create_at:''
        }
    },
    props:['msg'],
watch:{
    msg(){
        this.msg=this.hd;
    }
}        
 
}

</script>

<style lang="less" scoped>
@import "./index.less";
</style>