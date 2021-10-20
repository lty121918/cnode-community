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
            <!-- 分页 start-->
            <div class="pageBar">
                <ul>
                    <li @click="upPages()">«</li>
                    <li v-if="page>1">...</li>
                    <li v-for="index in allpages" :class="{active:index===page}" @click="clickPages(index)" v-if="((index<=page+2)&&(index>=page-2))||(page<3&&index<6)">{{index}}</li>
                    <li v-if="page<9">...</li>
                    <li @click="downPages()">»</li>
                </ul>
            </div>
            <!-- 分页 start-->
        </div>
        <!-- 侧边内容 -->
        <div class="content_sidebar">
            <unlogin></unlogin>
            <noreply></noreply>
            <about-link></about-link>
        </div>
    </div>
</template>

<script>
import noreply from "../../components/Common/noreply/index.vue";
import unlogin from "@/components/Common/unlogin/index.vue";
import aboutLink from "@/components/Common/aboutLink/index.vue";
import allNews from "./allNews/index.vue";
import { request } from "@/network/request/request";
import { selfScrollTo, renderTime, getDateDiff } from "@/utils/utils";

export default {
    data() {
        return {
            Index: 1,
            currentTab: "all",
            listData: [],
            noReData: [],
            page: 1,
            allpages: 14,
        };
    },
    created() {
        this.fetchListData({ limit: 45, tab: this.currentTab, page: 1 });
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
            this.fetchListData({
                limit: 45,
                tab: this.currentTab,
                page: this.page,
            });
        },

        // 分页切换
        clickPages(index) {
            this.page = index;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.fetchListData({
                limit: 45,
                tab: this.currentTab,
                page: this.page,
            });
        },
        //上一页
        upPages() {
            this.page = 1;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.fetchListData({
                limit: 45,
                tab: this.currentTab,
                page: this.page,
            });
        },
        //下一页
        downPages() {
            this.page = 14;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.fetchListData({
                limit: 45,
                tab: this.currentTab,
                page: this.page,
            });
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
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },

    components: {
        allNews,
        noreply,
        unlogin,
        aboutLink
    },
};
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>