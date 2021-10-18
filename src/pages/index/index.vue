<template>
    <div id="main">
        <!-- 左边内容 -->
        <div class="content">
            <!-- <aheader :currentTab="currentTab" @changeTab="changeTab"></aheader> -->
            <ul class="content_nav">
                <li :class="{active : Index == 1}" @click="changeNav(1)">全部</li>
                <li :class="{active : Index == 2}" @click="changeNav(2)">精华</li>
                <li :class="{active : Index == 3}" @click="changeNav(3)">分享</li>
                <li :class="{active : Index == 4}" @click="changeNav(4)">问答</li>
                <li :class="{active : Index == 5}" @click="changeNav(5)">招聘</li>
                <li :class="{active : Index == 6}" @click="changeNav(6)">客户端测试</li>
            </ul>
            <keep-alive>
                <allNews :listData="listData"></allNews>
            </keep-alive>
        </div>
        <!-- 侧边内容 -->
        <div class="content_sidebar">
            <asidebar></asidebar>
        </div>
    </div>
</template>

<script>
// import aheader from "./header/index.vue"
import asidebar from "./sidebar/index.vue";
import allNews from "./allNews/index.vue";
import { request } from "@/network/request/request";
import { selfScrollTo, renderTime, getDateDiff } from "@/utils/utils";

export default {
    components: {
        allNews,
    },
    data() {
        return {
            Index: 1,
            currentTab: "all",
            listData: [],
            noReData: [],
        };
    },
    created() {
        this.fetchListData({ limit: 45, tab: this.currentTab });
    },

    methods: {
        //nav栏切换
        changeNav(index) {
            this.Index = index;
            switch (index) {
                case 1:
                    this.currentTab = "all";
                    break;
                case 2:
                    this.currentTab = "good";
                    break;
                case 3:
                    this.currentTab = "share";
                    break;
                case 4:
                    this.currentTab = "ask";
                    break;
                case 5:
                    this.currentTab = "job";
                    break;
                case 6:
                    this.currentTab = "all";
                    break;

                default:
                    break;
            }
            this.fetchListData({ limit: 45, tab: this.currentTab });
        },

        fetchListData(params) {
            request({
                url: "topics",
                params: params,
            })
                .then((res) => {
                    this.listData = res.data.data.map((v) =>
                        Object.assign(v, {
                            create_at: getDateDiff(renderTime(v.create_at)),
                        })
                    );
                    this.noReData = this.listData.filter(
                        (v) => v.reply_count === 0
                    );
                    // console.log(this.listData);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },

    components: {
        asidebar,
        allNews,
    },
};
</script>

<style lang="less" scoped src="./index.less"></style>