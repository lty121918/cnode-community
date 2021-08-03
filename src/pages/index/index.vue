<template>
  <div id="app">  
      <navbar></navbar>
      <amain>
        
      </amain>
    <!-- router-link定义页面中点击触发部分 -->
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>  -->
    <!-- router-view定义页面中显示部分 -->
  </div>
</template>
<script>
import navbar from '../../components/Common/navbar/index.vue'
import amain from './amain/index.vue'
import "../../assets/css/base.css"
export default{
  components:{
      navbar,
      amain
  }

}
</script>

<style lang="less" scoped>

</style>
