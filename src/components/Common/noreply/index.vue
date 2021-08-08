<template>
  <div class="no-reply">
    <div class="header">
      <span>无人回复的话题</span>
    </div>
    <div class="inner">
      <ul class="unstyled" v-for="(item, index) in noReply">
        <li>{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>
    <script>
import {request} from '../../../network/request/request'
export default {
data(){
    return{
    noReply:[]
    }
},
mounted(){
 request({
         url:'topics',
        }).then(res=>{
            for(let index=0;index<res.data.data.length;index++){
                  let reply=res.data.data[index].reply_count;
                  if(reply==0&&this.noReply.length<5){
                    this.noReply.push(res.data.data[index]);
                  }
            }
            // console.log(this.noReply);   
        }).catch(err=>{
          console.log(err); 
        });
}

};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>