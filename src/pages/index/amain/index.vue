<template>
  <div id="main">
    <!-- 左边内容 -->
    <div class="content">
      <aheader></aheader>
      <!-- <router-view></router-view>  -->
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
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
import ashare from "./share/index.vue"
export default {
  data(){
    return{
      domIndex:1,
      currentTab: ['allNews','ashare','ask']
    }
  },
  computed:{
    currentView(){
        return this.currentTab[this.domIndex];
    }
  },
components:{
  aheader,
  asidebar,
  allNews,
  ashare
}
}
</script>

<style lang="less" scoped src="./index.less"></style>