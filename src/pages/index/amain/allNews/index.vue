<template>
  <div class="allNews">
      <ul>
          <li></li>
      </ul>
  </div>
</template>

<script>
import {request} from '../../../network/request/request'
export default {
name: 'AllNews',
data(){
    return{

    }
},
mounted(){

  request({
         url:'topics',
        }).then(res=>{
          console.log(res.data.data[0].title);  
        }).catch(err=>{
          console.log(err); 
        });
}
}
</script>

<style>

</style>