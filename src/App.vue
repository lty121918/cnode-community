<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <back-Top></back-Top>
        <afooter></afooter>
    </div>
</template>
<script>
import navbar from "./components/Common/navbar/index.vue";
import amain from "./pages/index/index.vue";
import afooter from "./components/Common/footer/index.vue";
import backTop from "./components/Common/backTop/index.vue";
export default {
    components: {
        navbar,
        amain,
        backTop,
        afooter,
    },
};
</script>


<style lang="less">
 body{
    background-color: #e1e1e1;
    
  }

</style>
