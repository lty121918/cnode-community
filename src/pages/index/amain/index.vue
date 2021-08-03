<template>
  <div id="main">
    <!-- 左边内容 -->
    <div class="content">
      <!-- <aheader></aheader> -->
      <router-view></router-view> 
    </div>
    <!-- 侧边内容 -->
    <!-- <asidebar></asidebar>    -->
  </div>
</template>

<script>
import aheader from "./header/index.vue"
import asidebar from "../sidebar/index.vue"
export default {
components:{
  aheader,
  asidebar
}
}
</script>

<style lang="less" scoped src="./index.less"></style>