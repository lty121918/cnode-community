<template>
  <div class="allNews">
      <ul>
          <li>{{titles}}</li>
          <li>111111</li>
      </ul>
      <div>这是全部信息</div>
  </div>
</template>

<script>
import {request} from '../../../../network/request/request'
export default {
name: 'AllNews',
data(){
    return{
      titles:null
    }
},
mounted(){

  request({
         url:'topics',
        }).then(res=>{
          console.log(res.data.data[0].title); 
          this.titles=res.data.data[0].title
        }).catch(err=>{
          console.log(err); 
        });
}
}
</script>

<style>

</style>