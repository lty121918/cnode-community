<template>
  <div>
    <div class="content">
      <div v-html="content"></div>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

<script>
import {request} from '../../network/request/request'
export default {
  data(){
    return{
      content:'',
    }
  },
    methods:{
     
    },
    props:['id'],
mounted(){

  console.log(this.id);

    request({
         url:`topic/${this.id}`,
        }).then(res=>{
          this.content=res.data.data.content;
          console.log(res.data.data.content); 
        }).catch(err=>{
          console.log(err); 
        });

      

      
    }
}
  

</script>

<style>
  @import "./content.less";
</style>
<style lang="less" scoped>
  @import "./index.less";
</style>