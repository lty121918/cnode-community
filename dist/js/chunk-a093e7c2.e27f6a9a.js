(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a093e7c2"],{5184:function(t,a,e){},"552a":function(t,a,e){"use strict";e("893b")},"5d03":function(t,a,e){"use strict";e("7653")},"739b":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"author"},[t._m(0),e("div",{staticClass:"inner"},[e("router-link",{attrs:{to:"/user/"+t.author.loginname}},[e("img",{attrs:{src:t.author.avatar_url,alt:""}}),e("p",{staticClass:"author_loginname"},[t._v(t._s(this.author.loginname))])]),e("p",{staticClass:"author_score"},[t._v("积分:"+t._s(t.author.score))]),e("p",{staticClass:"floor"},[t._v("“这个人很懒，什么都没有留下”")])],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("span",[t._v("作者")])])}],i={props:["author"]},o=i,n=(e("5d03"),e("2877")),c=Object(n["a"])(o,s,r,!1,null,"3d3aa84e",null);a["a"]=c.exports},7460:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail"},[t.message&&t.message.author&&t.message.author.loginname?e("div",{staticClass:"content"},[e("aheader",{attrs:{msg:t.message,create_at:t.create_at}}),e("div",{staticClass:"markdown",domProps:{innerHTML:t._s(t.content)}}),e("div",{staticClass:"replies"},[e("div",{staticClass:"replies_header"},[t._v(t._s(t.reply.length)+" 回复")]),e("ul",{staticClass:"replies_content"},t._l(t.reply,(function(a,s){return e("li",{staticClass:"replies_items"},[e("router-link",{attrs:{to:"/user/"+a.author.loginname}},[e("img",{attrs:{src:a.author.avatar_url,alt:""}}),e("div",{staticClass:"replies_author"},[t._v(t._s(a.author.loginname))])]),e("div",{staticClass:"replies_time"},[t._v(t._s(s+1)+"楼 "),e("div",{staticClass:"circle"}),t._v(" "+t._s(a.create_at))]),e("div",{staticClass:"replies_markdown",domProps:{innerHTML:t._s(a.content)}})],1)})),0)])],1):t._e(),t.loginname?e("div",{staticClass:"sidebar"},[e("author",{attrs:{author:t.author}}),e("div",{staticClass:"recent_topics"},[t._m(0),e("div",{staticClass:"recent_topics_inner"},[e("ul",t._l(t.author.recent_topics,(function(a,s){return e("li",[e("router-link",{attrs:{to:"/topic/"+a.id}},[t._v(t._s(a.title))])],1)})),0)])]),e("noReply")],1):t._e()])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"recent_topics_header"},[e("span",[t._v("作者的其他话题")])])}],i=(e("d81d"),e("fb6a"),e("fa7d")),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.msg.top,expression:"msg.top==true"}],staticClass:"putTop"},[t._v("置顶")]),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.msg.good&&0==t.msg.top,expression:"msg.good==true&&msg.top==false"}],staticClass:"putTop"},[t._v("精华")]),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.msg.good&&0==t.msg.top&&"share"==t.msg.tab,expression:"msg.good==false&&msg.top==false&&msg.tab=='share'"}],staticClass:"putTab"},[t._v("分享")]),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.msg.good&&0==t.msg.top&&"ask"==t.msg.tab,expression:"msg.good==false&&msg.top==false&&msg.tab=='ask'"}],staticClass:"putTab"},[t._v("问答")]),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.msg.good&&0==t.msg.top&&"job"==t.msg.tab,expression:"msg.good==false&&msg.top==false&&msg.tab=='job'"}],staticClass:"putTab"},[t._v("招聘")]),e("div",{staticClass:"title"},[t._v(t._s(t.msg.title))]),e("ul",[e("li",[t._v("发布于 "+t._s(t.create_at))]),e("li",[t._v("作者"+t._s(t.msg.author.loginname))]),e("li",[t._v(t._s(t.msg.visit_count)+"次浏览")]),e("li",[t._v("最后一次编辑是12天前")]),e("li",[t._v("来自 "+t._s(t.tab))])])])},n=[],c={data:function(){return{tab:[]}},created:function(){switch(this.msg.tab){case"top":this.tab="置顶";break;case"good":this.tab="精华";break;case"share":this.tab="分享";break;case"ask":this.tab="问答";break;case"job":this.tab="招聘";break;default:break}},props:{msg:{default:""},create_at:{default:"",type:String,required:!0}}},l=c,u=(e("9f5b"),e("2877")),d=Object(u["a"])(l,o,n,!1,null,"6e961a50",null),_=d.exports,v=e("0b22"),m=e("739b"),p=e("162b"),h={data:function(){return{content:"",message:{},create_at:"",reply:{},loginname:"",author:[]}},methods:{},components:{aheader:_,author:m["a"],noReply:p["a"]},props:["id"],mounted:function(){var t=this;Object(v["a"])({url:"topic/".concat(this.id)}).then((function(a){t.content=a.data.data.content,t.message=a.data.data,t.create_at=Object(i["a"])(Object(i["b"])(a.data.data.create_at)),t.reply=a.data.data.replies.map((function(t){return Object.assign(t,{create_at:Object(i["a"])(Object(i["b"])(t.create_at))})})),t.loginname=a.data.data.author.loginname,Object(v["a"])({url:"user/".concat(t.loginname)}).then((function(a){t.author=a.data.data,t.author.recent_topics=t.author.recent_topics.slice(0,5)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}},g=h,f=(e("552a"),e("7e0f"),Object(u["a"])(g,s,r,!1,null,"19846c61",null));a["default"]=f.exports},7653:function(t,a,e){},"7e0f":function(t,a,e){"use strict";e("5184")},8418:function(t,a,e){"use strict";var s=e("a04b"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var o=s(a);o in t?r.f(t,o,i(0,e)):t[o]=e}},"893b":function(t,a,e){},"9f5b":function(t,a,e){"use strict";e("e274")},e274:function(t,a,e){},fb6a:function(t,a,e){"use strict";var s=e("23e7"),r=e("861d"),i=e("e8b5"),o=e("23cb"),n=e("50c4"),c=e("fc6a"),l=e("8418"),u=e("b622"),d=e("1dde"),_=d("slice"),v=u("species"),m=[].slice,p=Math.max;s({target:"Array",proto:!0,forced:!_},{slice:function(t,a){var e,s,u,d=c(this),_=n(d.length),h=o(t,_),g=o(void 0===a?_:a,_);if(i(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?r(e)&&(e=e[v],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return m.call(d,h,g);for(s=new(void 0===e?Array:e)(p(g-h,0)),u=0;h<g;h++,u++)h in d&&l(s,u,d[h]);return s.length=u,s}})}}]);
//# sourceMappingURL=chunk-a093e7c2.e27f6a9a.js.map