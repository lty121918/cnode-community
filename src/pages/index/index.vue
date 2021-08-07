<template>
  <div id="app">  
    <navbar></navbar>
    <router-view></router-view>
    <footer></footer>
    <!-- 定义页面中显示部分 -->
  </div>
</template>
<script>
import navbar from '../../components/Common/navbar/index.vue'
import amain from './amain/index.vue'
export default{
  components:{
      navbar,
      amain
  }

}
</script>

<style lang="less" scoped>
  body{
    background-color: #e1e1e1;
  }
</style>
