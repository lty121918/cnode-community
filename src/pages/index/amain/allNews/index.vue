<template>
  <div class="allNews">
    <div class="nav-list">
      <img src='https://avatars.githubusercontent.com/u/2081487?v=4&s=120' alt="">
      <div class="count">
        <span>9</span>
        <span>/</span>
        <span>300</span>
      </div>
      <div class="put-top">置顶</div> 
      <div class="title"></div> 
      <div class="create_at"></div>
    </div>
  </div>
</template>

<script>
import {request} from '../../../../network/request/request'
export default {
name: 'AllNews',
data(){
    return{
      news:[
        {}
      ]
    }
},
mounted(){

  request({
         url:'topics',
        }).then(res=>{

          console.log(res.data.data[0]); 
          this.news=res.data.data[0];
          console.log(this.news.title);

        }).catch(err=>{
          console.log(err); 
        });
}
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>