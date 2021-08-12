<template>
  <div class="userDetial">
      <!-- 左边主体 -->
    <div class="user_innner">
        <!-- 第一个盒子 放作者信息 -->
      <div class="user_main">
          <!-- 页头 -->
        <div class="user_header"><router-link :to="`/topic`">主页 /</router-link></div>

        <div class="user_main_inner">
          <img :src="author.avatar_url" alt="" />
          <p class="author_loginname">{{ this.author.loginname }}</p>
        <ul>
          <li class="author_score">积分:{{ author.score }}</li>
          <li>话题收藏</li>
          <li>个人网址</li>
          <li>地点</li>
          <li>{{author.githubUsername}}</li>
          <li>推特</li>
          <li>注册时间</li>
        </ul>
        </div>
      </div>
      <!-- 第二个盒子 放创建的话题 -->
      <div class="user_create topics">
          <header class="user_header">最近创建的话题</header>
          <ul>
              <li v-for="(item,index) in author.recent_topics">
                  <img :src="author.avatar_url" alt="">
                  <div class="count">
                    <span class="one">1111</span>
                    <span class="three">/</span>
                    <span class="two">111111</span>
                 </div>
                 <!-- 是否显示置顶还没写 -->
                  <p><router-link :to="`/topic/${item.id}`">{{item.title}}</router-link></p>
                  <!-- 创建时间 -->
                  <div class="create_at">一年前</div>
                  </li>
              <li><span class="dark">查看更多>></span></li>
          </ul>
      </div>
      <!-- 第三个盒子 放参与的话题 -->
      <div class="user_create replies">
           <header class="user_header">最近参与的话题</header>
           <ul>
              <li v-for="(item,index) in author.recent_replies">
                  <img :src="author.avatar_url" alt="">
                  <div class="count">
                    <span class="one">1111</span>
                    <span class="three">/</span>
                    <span class="two">111111</span>
                 </div>
                 <!-- 是否显示置顶还没写 -->
                  <p><router-link :to="`/topic/${item.id}`">{{item.title}}</router-link></p>
                  <!-- 创建时间 -->
                  <div class="create_at">一年前</div>
                  </li>
              <li><span class="dark">查看更多>></span></li>
           </ul>
      </div>
    </div>
    <!-- 侧边盒子 start-->
    <div class="user_sidebar">
      <!-- <div class="user_header"><span>客户端二维码</span></div> -->
    </div>
    <!-- 侧边盒子 end-->
  </div>
</template>

<script>
import { request } from "../../network/request/request";
export default {
  props: {
    loginname: {},
  },
  components: {},
  data() {
    return {
      author: {},
    };
  },
  mounted() {
    console.log(this.loginname);
    request({
      url: `user/${this.loginname}`,
    })
      .then((res) => {
        this.author = res.data.data;
        this.author.recent_topics = this.author.recent_topics.slice(0, 5);
        console.log(this.author);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>