(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e823656"],{7159:function(e,t,s){e.exports=s.p+"assets/img/img.jpg"},"7ed4":function(e,t,s){"use strict";var l=s("6e6d"),n=new l["default"];t["a"]=n},bcb0:function(e,t,s){"use strict";var l=s("bd4e"),n=s.n(l);n.a},bd4e:function(e,t,s){},cff1:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),s("div",{staticClass:"logo"},[e._v("后台管理系统")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:e.message?"有"+e.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),e.message?s("span",{staticClass:"btn-bell-badge"}):e._e()],1),e._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[e._v("\n                    "+e._s(e.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"loginout"}},[e._v("退出登录")])],1)],1)],1)])])},n=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"user-avator"},[l("img",{attrs:{src:s("7159")}})])}],c=(s("7364"),s("f3e4")),a=s("7ed4"),o={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var e=localStorage.getItem("ms_username");return e||this.name}},methods:{handleCommand:function(e){"loginout"==e&&(localStorage.removeItem("ms_username"),Object(c["a"])("base-key"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,a["a"].$emit("collapse",this.collapse)},handleFullScreen:function(){var e=document.documentElement;console.log(this.fullscreen?"退出全屏":"打开全屏"),this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()},created:function(){}},i=o,r=(s("bcb0"),s("17cc")),u=Object(r["a"])(i,l,n,!1,null,"53eb4d58",null);t["default"]=u.exports}}]);