
// //使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         } else {
//             next();
//         }
//     }
// })

import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
// import VueI18n from 'vue-i18n'; //国际化
import { messages } from './components/common/i18n';
import util from './assets/js/util'//vue 自定义方法封装
import 'vue-orgchart/dist/style.min.css' //树状图
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import store from './store/index';



import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
 // import '../static/css/theme-green/index.css';       // 浅绿色主题
import './assets/css/icon.css';
import "babel-polyfill";

import { readToken,deleteCookie } from './utils/cookie'
const whiteList = ['/login'] // noredirect list

// Vue.use(VueI18n);
Vue.use(VCharts)
Vue.use(util);



Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

// const i18n = new VueI18n({
//     locale: 'zh',
//     messages
// })


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    // console.log(window.name)
    // if(!window.name) { //第一次打开
    //     console.log("第一次打开");
    //     window.name = "myname" //第一次打开时设置name
    //     // localStorage.clear(); //清全部缓存
    //     deleteCookie()
    //     next();
    // }else{
    //     next();
    // }
    if (readToken()) {  // 是否登录
        const str=window.sessionStorage.getItem('rootList')
        if(!window.name) { //第一次打开
            console.log("第一次打开");
            window.name = "myname" //第一次打开时设置name
            // localStorage.clear(); //清全部缓存
            deleteCookie()
            next({ path: '/login' })
        }
        // 页面刷新时，重新赋值权限列表
        if (JSON.parse(str)) {
            store.dispatch('rootFun',JSON.parse(str))
        }
        if (to.path === '/login') {   
            deleteCookie()
            next();
        //   next({ path: '/' })
        }else if(to.meta.permission){  //  是否有权限
            const role = localStorage.getItem('ms_username');
                const rootSet=["终端监控", "终端信息", "终端设置", "耗材补充", "打印报表", "打印记录", "退款列表", "价格模板", "价格阶梯", "促销设置", "耗材预警", "打印机配置", "耗材模板", "预警设置", "接警人员", "会员信息", "管理成员", "机构管理", "权限设置", "系统设置", "系统日志"];
                const rootSet2=["终端监控", "终端信息", "终端设置", "耗材补充", "打印报表", "打印记录", "退款列表"]
                const _root=role === 'admin' ?rootSet:rootSet2;
                // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
                _root.indexOf(to.meta.title) > -1?next() : next('/403');
        }else{
                // // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
                // if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
                //     Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                //         confirmButtonText: '确定'
                //     });
                // }else{
                //     next();
                // }
                next();
            }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
        }
    }
})
// Vue.config.keyCodes.F11 = 122;
new Vue({
    router,
    store,
    // i18n,
    render: h => h(App)
}).$mount('#app');