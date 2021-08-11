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
          <router-link :to="`/userdetail/${item.author.loginname}`">
            <img :src=item.author.avatar_url alt="">
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
      <author :author="loginname"></author>
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
import noReply from "../../components/Common/noreply/index.vue"
export default {
  data(){
    return{
      content:'',
      message:{}, //传给子组件header的信息
      create_at:'',
      reply:{},
      loginname:''

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
          this.content=res.data.data.content;
          console.log(res.data.data); 
          this.message=res.data.data;
          this.create_at=getDateDiff(renderTime(res.data.data.create_at));
          this.reply = res.data.data.replies.map(v => Object.assign(v, {create_at: getDateDiff(renderTime(v.create_at))}));
          console.log(this.reply);
          this.loginname=res.data.data.author.loginname;
          // console.log(this.loginname);
          
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