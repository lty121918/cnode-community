<template>
  <div class="allNews">
    <div class="nav-list" v-for="(item,index) in news">
      <img :src=item.author.avatar_url alt="">
      <div class="count">
          <span class="one">{{item.reply_count}}</span>
          <span>/</span>
          <span class="two">{{item.visit_count}}</span>
      </div>
      <div class='putTop' v-show="item.top==true">置顶</div> 
      <div class='putTop' v-show="item.good==true">精华</div>
      <div class="putTab" v-show="item.good==false&&item.top==false&&item.tab=='share'">分享</div>
      <div class="putTab" v-show="item.good==false&&item.top==false&&item.tab=='ask'">问答</div>
      <!-- <div class="put-ask">问答</div>
      <div class="put-share">分享</div>
      <div class="put-good" :class{put-good:isgood}>精华</div> -->
      <div class="title"> {{item.title}}</div> 
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
      news:[]
        // {title:null,author:{loginname:"null",avatar_url:"null"},reply_count:null,visit_count:null,top:null,good:null,create_at:null},
    }
},
mounted(){

  
  request({
         url:'topics',
        }).then(res=>{
          
          for(let index=0;index<res.data.data.length;index++){
            this.news.push({title:null,author:{loginname:"null",avatar_url:"null"},reply_count:null,visit_count:null,top:null,good:null,create_at:null});
          this.news[index].title=res.data.data[index].title;
          this.news[index].author=res.data.data[index].author;
          this.news[index].reply_count=res.data.data[index].reply_count;
          this.news[index].visit_count=res.data.data[index].visit_count;
          this.news[index].reply_count=res.data.data[index].reply_count;
          this.news[index].top=res.data.data[index].top; 
          this.news[index].good=res.data.data[index].good;
          this.news[index].tab=res.data.data[index].tab;          
          //把接口的日期进行计算，先转化为YY-MM-DD-HH-SS，再计算与现在相比过去了多长时间，两个方法详见utils里的2和3
          this.news[index].create_at=getDateDiff(renderTime(res.data.data[index].create_at));   
          }
          console.table(this.news);
          

        }).catch(err=>{
          console.log(err); 
        });


}
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>