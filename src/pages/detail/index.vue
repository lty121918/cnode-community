<template>
  <div class="detail">
    <div class="content">
      <aheader :msg="message"></aheader>
      <div v-html="content"></div>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

<script>
import aheader from"./header/index.vue"
import {request} from '../../network/request/request'
export default {
  data(){
    return{
      content:'',
      message:{}
    }
  },
    methods:{
     
    },
    components:{
      aheader
    },
    props:['id'],
mounted(){

  // console.log(this.id);

    request({
         url:`topic/${this.id}`,
        }).then(res=>{
          this.content=res.data.data.content;
          console.log(res.data.data); 
          this.message=res.data.data;
          
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