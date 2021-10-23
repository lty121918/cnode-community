<template>
    <transition name='fade'>
        <div class='uco-toast' v-if='isShow'>
            <span>{{msg}}</span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            type: "success",
            msg: "成功",
            duration: 1,
        };
    },
    mounted() {
        this.isShow = true;
        setTimeout(() => {
            this.isShow = false;
        }, this.duration * 1000);
    },
};
</script>

<style lang='less' scoped>
.uco-toast{
    width: 50px;
    height: 20px;
    background-color:transparent;
    position: fixed;
    z-index: 100;
    top: 10px;
    left: 50%;
    font-size: 14px;
}
</style>
