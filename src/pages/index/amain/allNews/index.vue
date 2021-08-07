<template>
  <div class="allNews">
    <div class="nav-list" v-for="(item,index) in listData" >
      <!-- v-show="item.good==true" -->
      <img :src=item.author.avatar_url alt="">
      <div class="count">
          <span class="one">{{item.reply_count}}</span>
          <span class="three">/</span>
          <span class="two">{{item.visit_count}}</span>
      </div>
      <div class='putTop' v-show="item.top==true">置顶</div> 
      <div class='putTop' v-show="item.good==true">精华</div>
      <div class="putTab" v-show="item.good==false&&item.top==false&&item.tab=='share'">分享</div>
      <div class="putTab" v-show="item.good==false&&item.top==false&&item.tab=='ask'">问答</div>
      <router-link :to="`/topic/${item.id}`" class="title"> {{item.title}}</router-link> 
      <div class="create_at">{{item.create_at}}</div>
    </div>
  </div>
</template>

<script>
import {selfScrollTo,renderTime,getDateDiff} from '../../../../utils/utils'
import {request} from '../../../../network/request/request'
export default {
name: 'AllNews',
data(){
    return{
      news:[],
      domIndex:1
    }
},
props:["listData"],
mounted(){
}
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>