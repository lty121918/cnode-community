<template>
  <div class="author">
    <div class="header">
      <span>作者</span>
    </div>
    <div class="inner">
      <router-link :to="`/user/${author.loginname}`">
        <img :src='author.avatar_url' alt="">
        <p class="author_loginname">{{this.author.loginname}}</p>
      </router-link>
        <p class="author_score">积分:{{author.score}}</p>
        <p class="floor">“这个人很懒，什么都没有留下”</p>
    </div>
  </div>
</template>

<script>
export default {
    props:["author"]
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>