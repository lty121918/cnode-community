<template>
  <div class="detail">
    <!-- 左边内容 start -->
    <div class="content" v-if="message && message.author &&  message.author.loginname" >
      <aheader :msg="message" :create_at="create_at"></aheader>
      <div v-html="content" class="markdown"></div>
          <!-- 帖子回复 start-->
      <div class="replies">
        <div class="replies_header">{{reply.length}}&nbsp;回复</div>
        <ul class="replies_content">
          <li class="replies_items" v-for="(item,index) in reply">
          <router-link :to="`/user/${item.author.loginname}`">
            <img :src='item.author.avatar_url' alt="">
            <div class="replies_author">{{item.author.loginname}}</div>
            </router-link>
            <div class="replies_time">{{index+1}}楼&nbsp;<div class="circle"></div>&nbsp;{{item.create_at}}</div>
            <div class="replies_markdown" v-html=item.content></div>
          </li>
        </ul>
      </div>
      <!-- 帖子回复 end-->
    </div>
    <!-- 左边内容 end -->

    <!-- 侧边栏 start -->
    <div class="sidebar"  v-if="loginname">
      <!-- 作者信息 其实这里可以不封装成组件-->
      <author :author="author"></author>
      <!-- 作者的其他话题 -->
      <div class="recent_topics">
        <div class="recent_topics_header"><span>作者的其他话题</span></div>
        <div class="recent_topics_inner">
          <ul >
            <li v-for="(item,i) in author.recent_topics"><router-link :to="`/topic/${item.id}`">{{item.title}}</router-link></li>
          </ul>
        </div>
      </div>
      <!-- 无人回复的话题 -->
      <noReply></noReply>
    </div>
    <!-- 侧边栏 end -->
  </div>
</template>

<script>
import {getDateDiff,renderTime} from "../../utils/utils"
import aheader from"./header/index.vue"
import {request} from '../../network/request/request'
import author from "../../components/Common/author/index.vue"
import noReply from "@/components/Common/noreply/index.vue"
export default {
  data(){
    return{
      content:'',
      message:{}, //传给子组件header的信息
      create_at:'',
      reply:{},
      loginname:"",
      author:[]

    }
  },
    methods:{
     
    },
    components:{
      aheader,
      author,
      noReply
    },
    props:['id'],
mounted(){
    request({
         url:`topic/${this.id}`,
        }).then(res=>{
          // 接收一个id，根据这个id获取文章的详情
          this.content=res.data.data.content;//文章包含的内容
          this.message=res.data.data;//传给头的信息
          this.create_at=getDateDiff(renderTime(res.data.data.create_at));//创建时间也传给头
          //下面回复的信息
          this.reply = res.data.data.replies.map(v => Object.assign(v, {create_at: getDateDiff(renderTime(v.create_at))}));

          this.loginname=res.data.data.author.loginname;
              request({
                  url:`user/${this.loginname}`,
                  }).then(res=>{
                      // console.log(res.data.data);
                      this.author=res.data.data;
                      this.author.recent_topics=this.author.recent_topics.slice(0,5);
                      // console.log(this.author);
                             
                  }).catch(err=>{
                    console.log(err); 
                  }); 
          }).catch(err=>{
            console.log(err); 
          });
            
      }
}
  

</script>

<style lang="less">
  @import "./content.less";
</style>
<style lang="less" scoped>
  @import "./index.less";
</style>