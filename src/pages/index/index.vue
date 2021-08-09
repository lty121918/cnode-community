<template>
  <div id="app">  
    <navbar></navbar>
    <router-view></router-view>
    <back-Top></back-Top>
    <footer></footer>
    <!-- 定义页面中显示部分 -->
  </div>
</template>
<script>
import navbar from '../../components/Common/navbar/index.vue'
import amain from './amain/index.vue'
// import backTop from '@assets/components/Common/backTop/index.vue'
import backTop from '../../components/Common/backTop/index.vue'
export default{
  components:{
      navbar,
      amain,
      backTop
  }

}
</script>

<style lang="less" scoped>
  body{
    background-color: #e1e1e1;
  }
</style>
