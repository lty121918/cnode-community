<template>
  <div id="main">
    <!-- 左边内容 -->
    <div class="content">
      <aheader :currentTab="currentTab" @changeTab="changeTab"></aheader>
      <keep-alive>
        <allNews :listData="listData"></allNews> 
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
import asidebar from "./sidebar/index.vue"
import allNews from "./allNews/index.vue"
import {request} from "../../../network/request/request"
import {selfScrollTo,renderTime,getDateDiff} from '../../../utils/utils'

export default {
  components: {
    allNews
  },
  data(){
    return{
      domIndex:1,
      currentTab: 'all',
      listData: [],
      noReData: []
    }
  },
  created() {
    // 已经有 this 了,有this 就可以操作data
    // 1. 做初始数据请求
    // 2. 对不同组件需要的数据做处理
    this.fetchListData({limit: 50, tab: this.currentTab})
  },
  computed:{
    currentView(){
        return this.currentTab[this.domIndex];
    }
  },
  methods:{
    changeTab(val){
      this.domIndex=val;
      this.fetchListData({
        limit: 45,
        tab: val
      })      
    },

    fetchListData(params) {
      request({
         url:'topics',
         params: params
        }).then(res=>{
          this.listData = res.data.data.map(v => Object.assign(v, {create_at: getDateDiff(renderTime(v.create_at))}))
          this.noReData = this.listData.filter(v => v.reply_count == 0)
        }).catch(err=>{
          console.log(err); 
        });
    }
  },

components:{
  aheader,
  asidebar,
  allNews,
}
}
</script>

<style lang="less" scoped src="./index.less"></style>