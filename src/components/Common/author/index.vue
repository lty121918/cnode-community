<template>
  <div class="author">
    <div class="header">
      <span>作者</span>
    </div>
    <div class="inner">
        <img src="" alt="">
        <p>{{this.author}}</p>
        <p>积分:</p>
        <p></p>
    </div>
  </div>
</template>

<script>
import { request } from '../../../network/request/request';
export default {
    props:{
        author:{
            default:"czy88840616"
        }
    },
    data(){
        return{
            loginnname:this.author,
        }
    },
    mounted(){
        request({
         url:`user/${this.loginname}`,
        }).then(res=>{
            console.log(res);        
        }).catch(err=>{
          console.log(err); 
        });
    }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>