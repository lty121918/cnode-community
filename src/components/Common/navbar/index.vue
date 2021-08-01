<template>
  <div class="navbar">
  <div class="navbar-inner">
    <div class="container">
      <a class="brand" href="/">     
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
      </a>

      <form id="search_form" class="navbar-search" action="/search">
        <input type="text"  class="search-query span3" value="">
      </form>
      <ul class="nav pull-right">
        <li><a href="/">首页</a></li>
        <li><a href="/getstart">新手入门</a></li>
        <li><a href="/api">API</a></li>
        <li><a href="/about" target="">关于</a></li>
        <li><a href="/signup">注册</a></li>
        <li><a href="/signin">登录</a></li>  
      </ul>
      <a class="btn btn-navbar" id="responsive-sidebar-trigger">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
    </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped src="./index.less">


</style>