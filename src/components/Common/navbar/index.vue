<template>
  <div class="navbar">
    <!-- 内容 --start-->
    <div class="container">
      <!-- 图标 -->
      <a class="brand" href="#">     
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
      </a>
      <!-- 图标 -->
      <!-- 搜索框 -->
      <form id="search_form" class="navbar-search" action="/search">
        <img src="../../../assets/images/search.png" alt="">
        <input type="text"  class="search-query span3" value="">
      </form>
      <!-- 搜索框 -->
      <!-- 右侧导航栏 -->
      <ul class="nav pull-right">
        <li><a href="/">首页</a></li>
        <li><a href="/getstart">新手入门</a></li>
        <li><a href="/api">API</a></li>
        <li><a href="/about">关于</a></li>
        <li><a href="/signup">注册</a></li>
        <li><a href="/signin">登录</a></li>  
      </ul>
      <!-- 右侧导航栏 -->

    </div>
<!-- 内容 --end-->
  </div>
</template>

<script>
// import "../../../assets/css/base.css";
export default {

}
</script>
<style lang="less" scoped>
	@import "./index02.less";
</style>
