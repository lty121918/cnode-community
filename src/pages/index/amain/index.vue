<template>
  <div id="main">
    <!-- 左边内容 -->
    <div class="content">
      <aheader></aheader>
      <!-- <router-view></router-view>  -->
      <all-news></all-news>
    </div>
    <!-- 侧边内容 -->
    <div class="content-sidebar">
    <asidebar></asidebar>   
    </div>
  </div>
</template>

<script>
import aheader from "./header/index.vue"
import asidebar from "../sidebar/index.vue"
import allNews from "./allNews/index.vue"
export default {
components:{
  aheader,
  asidebar,
  allNews
}
}
</script>

<style lang="less" scoped src="./index.less"></style>