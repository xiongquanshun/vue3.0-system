(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a05d9fc8","chunk-6e152509","chunk-86d43b9a","chunk-6a786f5a"],{3275:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)}),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},i=[],a=(s("7364"),s("7ed4")),l={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){var e=this.tagsList.some(function(e){return e.path===t.fullPath});e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),a["a"].$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),a["a"].$on("close_current_tags",function(){for(var e=0,s=t.tagsList.length;e<s;e++){var n=t.tagsList[e];if(n.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}})}},r=l,o=(s("c5f3"),s("17cc")),c=Object(o["a"])(r,n,i,!1,null,null,null);e["default"]=c.exports},"5bd0":function(t,e,s){},7159:function(t,e,s){t.exports=s.p+"assets/img/img.jpg"},"7ed4":function(t,e,s){"use strict";var n=s("6e6d"),i=new n["default"];e["a"]=i},8685:function(t,e,s){},a315:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#62687F","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.routerList,function(e){return[e.subs&&e.subs.length>0?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("img",{staticStyle:{"margin-right":"6px"},attrs:{src:e.icon}}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})],2):s("el-menu-item",{key:e.index,staticStyle:{"padding-left":"58px"},attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]})],2)]:e.subs?t._e():[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("img",{staticStyle:{"margin-right":"6px"},attrs:{src:e.icon}}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},i=[],a=(s("34a3"),s("7ed4")),l={data:function(){return{collapse:!1,routerList:[{icon:s("c351"),index:"index",title:"我的首页"},{icon:s("3b30"),index:"terminal",title:"终端管理",subs:[{index:"terminalMonitor",title:"终端监控"},{index:"terminalMsg",title:"终端信息"},{index:"terminalSetting",title:"终端设置"},{index:"terminalTarget",title:"耗材补充"}]},{icon:s("0da6"),index:"printPay",title:"支付管理",subs:[{index:"printList",title:"打印报表"},{index:"printRecord",title:"打印记录"},{index:"printReturn",title:"退款列表"},{index:"printPrice",title:"价格模板"},{index:"printLadder",title:"价格阶梯"},{index:"printPromotion",title:"促销设置"}]},{icon:s("d1bf"),index:"target",title:"耗材管理",subs:[{index:"targetWarn",title:"耗材预警"},{index:"targetPrintSetting",title:"打印机配置"},{index:"targetTemplate",title:"耗材模板"},{index:"targetSetting",title:"预警设置"},{index:"targetReceiver",title:"接警人员"}]},{icon:s("a8f4"),index:"vipManage",title:"会员管理",subs:[{index:"vipMsg",title:"会员信息"}]},{icon:s("8933"),index:"system",title:"系统管理",subs:[{index:"systemUser",title:"管理成员"},{index:"systemOrgan",title:"机构管理"},{index:"systemRoot",title:"权限设置"},{index:"systemSetting",title:"系统设置"},{index:"systemJournal",title:"系统日志"}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;a["a"].$on("collapse",function(e){t.collapse=e}),console.log(this.routerList),this.routerList="admin"==localStorage.getItem("ms_username")?this.routerList:this.$store.state.user.rootList}},r=l,o=(s("be3e"),s("d460"),s("17cc")),c=Object(o["a"])(r,n,i,!1,null,"3cc60b76",null);e["default"]=c.exports},a9cc:function(t,e,s){},bcb0:function(t,e,s){"use strict";var n=s("bd4e"),i=s.n(n);i.a},bd4e:function(t,e,s){},be3e:function(t,e,s){"use strict";var n=s("a9cc"),i=s.n(n);i.a},bfe9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view")],1)],1)],1)],1)],1)},i=[],a=(s("7364"),s("cff1")),l=s("a315"),r=s("3275"),o=s("7ed4"),c={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:a["default"],vSidebar:l["default"],vTags:r["default"]},created:function(){var t=this;o["a"].$on("collapse",function(e){t.collapse=e}),o["a"].$on("tags",function(e){for(var s=[],n=0,i=e.length;n<i;n++)e[n].name&&s.push(e[n].name);t.tagsList=s})}},u=c,d=s("17cc"),m=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=m.exports},c5f3:function(t,e,s){"use strict";var n=s("5bd0"),i=s.n(n);i.a},cff1:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),s("div",{staticClass:"logo"},[t._v("后台管理系统")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:s("7159")}})])}],a=(s("7364"),s("f3e4")),l=s("7ed4"),r={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),Object(a["a"])("base-key"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,l["a"].$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;console.log(this.fullscreen?"退出全屏":"打开全屏"),this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()},created:function(){}},o=r,c=(s("bcb0"),s("17cc")),u=Object(c["a"])(o,n,i,!1,null,"53eb4d58",null);e["default"]=u.exports},d460:function(t,e,s){"use strict";var n=s("8685"),i=s.n(n);i.a}}]);