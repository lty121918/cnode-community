<template>
    <div class="header">
        <div class='putTop' v-show="msg.top==true">置顶</div>
        <div class='putTop' v-show="msg.good==true&&msg.top==false">精华</div>
        <div class="putTab" v-show="msg.good==false&&msg.top==false&&msg.tab=='share'">分享</div>
        <div class="putTab" v-show="msg.good==false&&msg.top==false&&msg.tab=='ask'">问答</div>
        <div class="putTab" v-show="msg.good==false&&msg.top==false&&msg.tab=='job'">招聘</div>
        <div class="title">{{msg.title}}</div>
        <ul>
            <li>发布于&nbsp;{{create_at}}</li>
            <li>作者{{msg.author.loginname}}</li>
            <li>{{msg.visit_count}}次浏览</li>
            <li>最后一次编辑是12天前</li>
            <li>来自&nbsp;{{tab}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: [],
        };
    },

    created() {
        switch (this.msg.tab) {
            case "top":
                this.tab = "置顶";
                break;
            case "good":
                this.tab = "精华";
                break;
            case "share":
                this.tab = "分享";
                break;
            case "ask":
                this.tab = "问答";
                break;
            case "job":
                this.tab = "招聘";
                break;
            default:
                break;
        }
    },
    props: {
        msg: {
            default: "",
        },
        create_at: {
            default: "",
            type: String,
            required: true, //必须往里传值
        },
    },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>