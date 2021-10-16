<template>
  <div class="sidebar">
      <div class="panel-login">
          <p>CNode：Node.js专业中文社区</p>
          <div>
            <span>您可以 <i>登录</i> 或 <i>注册</i> , 也可以</span>
              <button>通&nbsp;过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登&nbsp;录</button>    
          </div>
      </div>
      <!-- 无人回复的话题 -->
      <no-Reply></no-Reply>
      <div class="panel-four">
        <div class="header">
          <span>友情社区</span>
        </div>
        <div class="inner two">
          <a href="https://ruby-china.org/" target="_blank"><img src="@/assets/images/ruby-china-20150529.png" alt="" class="ruby"></a>
          <a href="https://golangtc.com/" target="_blank"><img src="@/assets/images/golangtc-logo.png" alt="" class="golang"></a>
          <a href="http://phphub.org/" target="_blank"><img src="@/assets/images/phphub-logo.png" alt="" class="php"></a>
        </div>
      </div>
      <div class="panel-five">
        <div class="header">
          <span>客户端二维码</span>
        </div>
        <div class="inner">
         <img src="@/assets/images/twoMa.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noReply from '@/components/Common/noreply/index.vue'
export default {
  data(){
    return{
      noReply:[]         
    }
  },
  mounted(){

  },
  components:{
      noReply
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>