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
      <div class="panel-three">
        <div class="header">
          <span>积分榜</span>
        </div>
        <div class="inner">
          <ul class="unstyled">
            <li></li>
          </ul>
        </div>
      </div>
      <div class="panel-four">
        <div class="header">
          <span>友情社区</span>
        </div>
        <div class="inner">
          <a href=""><img src="../../../../assets/images/qiniu.png" alt=""></a>
          <a href=""><img src="../../../../assets/images/phphub-logo.png" alt=""></a>
          <a href=""><img src="../../../../assets/images/digitalocean.png" alt=""></a>
        </div>
      </div>
      <div class="panel-five">
        <div class="header">
          <span>客户端二维码</span>
        </div>
        <div class="inner">
         <img src="../../../../assets/images/twoMa.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noReply from '../../../../components/Common/noreply/index.vue'
import {request} from '../../../../network/request/request'
export default {
  data(){
    return{
      noReply:[]         
    }
  },
  mounted(){
        //用户积分榜
//  request({
//          url:'user/alsotang',
//         }).then(res=>{
//             console.log(res.data.data.score);   
//         }).catch(err=>{
//           console.log(err); 
//         });


  },
  components:{
      noReply
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>