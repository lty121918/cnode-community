<template>
    <div>
        <div class="aboutLink">
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
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
    padding: 0.1rem;
    width: 270px;
    height: 20px;
    text-align: left;
    background-color: #f6f6f6;
    span {
        font-size: 13px;
        color: #444444;
    }
}
.aboutLink {
    background-color: #fff;
    margin-bottom: 0.15rem;
    text-align: left;
    a {
        margin-left: 0.1rem;
    }
    .two {
        padding: 5px 20px;
        padding-bottom: 10px;
        text-align: left;
        img {
            width: 150px;
            margin: 3px 0;
        }
    }  
}
.panel-five {
        background-color: #fff;
        width: 100%;
        text-align: center;
        img {
            margin: 0.1rem 0;
            width: 200px;
            height: 200px;
           
        }
    }
</style>