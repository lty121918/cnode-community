<template>
    <div class="unlogin">
        <p>CNode：Node.js专业中文社区</p>
        <div>
            <span>您可以 <i>登录</i> 或 <i>注册</i> , 也可以</span>
            <button>通&nbsp;过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登&nbsp;录</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
    .header{
        padding: 0.1rem;
        width: 270px;
        height: 20px;
        text-align: left;
        background-color: #f6f6f6;
        span{
            font-size: 13px;
            color: #444444;
        }
    }
.unlogin {
    width: 270px;
    padding: 0.1rem;
    text-align: left;
    background-color: #fff;
    margin-bottom: 0.15rem;

    p {
        font-size: 0.14rem;
        color: #333333;
        margin-bottom: 0.15rem;
    }
    div {
        span {
            display: block;
            font-size: 0.13rem;
            margin-bottom: 0.07rem;
            i {
                margin-bottom: 0.1rem;
                color: #778087;
                font-style: normal;
                cursor: pointer;
            }
        }
        button {
            width: 1.5rem;
            height: 0.34rem;
            padding: 0 0.1rem;
            background-color: #5bc0de;
            border: none;
            font-size: 0.14rem;
            color: #fff;
            border-radius: 0.05rem;
            cursor: pointer;
            &:hover {
                background-color: #08c;
                transition: all 0.3s;
            }
        }
    }
}
</style>