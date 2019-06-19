// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router);

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: '/dashboard'
//         },
//         {
//             path: '/',
//             component: resolve => require(['../components/common/Home.vue'], resolve),
//             meta: { title: '自述文件' },
//             children:[
//                 {
//                     path: '/dashboard',
//                     component: resolve => require(['../components/page/Dashboard.vue'], resolve),
//                     meta: { title: '系统首页' }
//                 },
//                 {
//                     path: '/icon',
//                     component: resolve => require(['../components/page/Icon.vue'], resolve),
//                     meta: { title: '自定义图标' }
//                 },
//                 {
//                     path: '/table',
//                     component: resolve => require(['../components/page/BaseTable.vue'], resolve),
//                     meta: { title: '基础表格' }
//                 },
//                 {
//                     path: '/tabs',
//                     component: resolve => require(['../components/page/Tabs.vue'], resolve),
//                     meta: { title: 'tab选项卡' }
//                 },
//                 {
//                     path: '/form',
//                     component: resolve => require(['../components/page/BaseForm.vue'], resolve),
//                     meta: { title: '基本表单' }
//                 },
//                 {
//                     // 富文本编辑器组件
//                     path: '/editor',
//                     component: resolve => require(['../components/page/VueEditor.vue'], resolve),
//                     meta: { title: '富文本编辑器' }
//                 },
//                 {
//                     // markdown组件
//                     path: '/markdown',
//                     component: resolve => require(['../components/page/Markdown.vue'], resolve),
//                     meta: { title: 'markdown编辑器' }    
//                 },
//                 {
//                     // 图片上传组件
//                     path: '/upload',
//                     component: resolve => require(['../components/page/Upload.vue'], resolve),
//                     meta: { title: '文件上传' }   
//                 },
//                 {
//                     // vue-schart组件
//                     path: '/charts',
//                     component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
//                     meta: { title: 'schart图表' }
//                 },
//                 {
//                     // 拖拽列表组件
//                     path: '/drag',
//                     component: resolve => require(['../components/page/DragList.vue'], resolve),
//                     meta: { title: '拖拽列表' }
//                 },
//                 {
//                     // 拖拽Dialog组件
//                     path: '/dialog',
//                     component: resolve => require(['../components/page/DragDialog.vue'], resolve),
//                     meta: { title: '拖拽弹框' }
//                 },
//                 {
//                     // 国际化组件
//                     path: '/i18n',
//                     component: resolve => require(['../components/page/I18n.vue'], resolve),
//                     meta: { title: '国际化' }
//                 },
//                 {
//                     // 权限页面
//                     path: '/permission',
//                     component: resolve => require(['../components/page/Permission.vue'], resolve),
//                     meta: { title: '权限测试', permission: true }
//                 },
//                 {
//                     path: '/404',
//                     component: resolve => require(['../components/page/404.vue'], resolve),
//                     meta: { title: '404' }
//                 },
//                 {
//                     path: '/403',
//                     component: resolve => require(['../components/page/403.vue'], resolve),
//                     meta: { title: '403' }
//                 }
//             ]
//         },
//         {
//             path: '/login',
//             component: resolve => require(['../components/page/Login.vue'], resolve)
//         },
//         {
//             path: '*',
//             redirect: '/404'
//         }
//     ]
// })

import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_production.js')
Vue.use(Router)

// 懒加载
const vueRouter = new Router({
    mode:'history',
  routes: [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/',
        component: _import('common/Home'),
        meta: { title: '自述文件' },   
        children: [
            {
                path: '/index',
                name: 'index',
                component: _import('view/index'),
                meta: { title: '我的首页' }
            },
            {
                path: '/terminalMonitor',
                component: _import('view/terminalMonitor'),
                meta: { title: '终端监控', permission: true }
            },
            {
                path: '/terminalMsg',
                component: _import('view/terminalMsg'),
                meta: { title: '终端信息', permission: true }
            },
            {
                path: '/terminalSetting',
                component: _import('view/terminalSetting'),
                meta: { title: '终端设置', permission: true }
            },
            {
                path: '/terminalTarget',
                component: _import('view/terminalTarget'),
                meta: { title: '终端设置', permission: true }
            },
            {
                path: '/printList',
                component: _import('view/printList'),
                meta: { title: '打印报表', permission: true }
            },
            {
                path: '/printRecord',
                component: _import('view/printRecord'),
                meta: { title: '打印记录', permission: true }
            },
            {
                path: '/printReturn',
                component: _import('view/printReturn'),
                meta: { title: '退款列表', permission: true }
            },
            {
                path: '/printPrice',
                component: _import('view/printPrice'),
                meta: { title: '价格模板', permission: true }
            },
            {
                path: '/printLadder',
                component: _import('view/printLadder'),
                meta: { title: '价格阶梯', permission: true }
            },
            {
                path: '/printPromotion',
                component: _import('view/printPromotion'),
                meta: { title: '促销设置', permission: true }
            },
            {
                path: '/targetWarn',
                component: _import('view/targetWarn'),
                meta: { title: '耗材预警', permission: true }
            },
            {
                path: '/targetTemplate',
                component: _import('view/targetTemplate'),
                meta: { title: '耗材模板', permission: true }
            },
            {
                path: '/targetSetting',
                component: _import('view/targetSetting'),
                meta: { title: '预警设置', permission: true }
            },
            {
                path: '/targetPrintSetting',
                component: _import('view/targetPrintSetting'),
                meta: { title: '打印机配置', permission: true }
            },
            {
                path: '/targetReceiver',
                component: _import('view/targetReceiver'),
                meta: { title: '接警人员', permission: true }
            },
            {
                path: '/vipMsg',
                component: _import('view/vipMsg'),
                meta: { title: '会员信息', permission: true }
            },
            {
                path: '/systemUser',
                component: _import('view/systemUser'),
                meta: { title: '管理成员', permission: true }
            },
            {
                path: '/systemOrgan',
                component: _import('view/systemOrgan'),
                meta: { title: '机构管理', permission: true }
            },
            {
                path: '/systemRoot',
                component: _import('view/systemRoot'),
                meta: { title: '权限设置', permission: true }
            },
            {
                path: '/systemSetting',
                component: _import('view/systemSetting'),
                meta: { title: '系统设置', permission: true }
            },
            {
                path: '/systemJournal',
                component: _import('view/systemJournal'),
                meta: { title: '系统日志', permission: true }
            },
            /* ========= 分割线 ========== */
            // {
            //     path: '/dashboard',
            //     component: _import('page/Dashboard'),
            //     meta: { title: '系统首页' }
            // },
            // {
            //     path: '/icon',
            //     component: _import('page/Icon'),
            //     meta: { title: '自定义图标' }
            // },
            // {
            //     path: '/table',
            //     component: _import('page/BaseTable'),
            //     meta: { title: '入住登记' }
            // },
            {
                path: '/tabs',
                component: _import('page/Tabs'),
                meta: { title: '消息中心' }
            },
            // {
            //     path: '/form',
            //     component: _import('page/BaseForm'),
            //     meta: { title: '基本表单' }
            // },
            // {
            //     // 富文本编辑器组件
            //     path: '/editor',
            //     component: _import('page/VueEditor'),
            //     meta: { title: '富文本编辑器' }
            // },
            // {
            //     // markdown组件
            //     path: '/markdown',
            //     component: _import('page/Markdown'),
            //     meta: { title: 'markdown编辑器' }    
            // },
            // {
            //     // 图片上传组件
            //     path: '/upload',
            //     component: _import('page/Upload'),
            //     meta: { title: '文件上传' }   
            // },
            // {
            //     // vue-schart组件
            //     path: '/charts',
            //     component: _import('page/BaseCharts'),
            //     meta: { title: 'schart图表' }
            // },
            // {
            //     // 拖拽列表组件
            //     path: '/drag',
            //     component: _import('page/DragList'),
            //     meta: { title: '拖拽列表' }
            // },
            // {
            //     // 国际化组件
            //     path: '/i18n',
            //     component:  _import('page/I18n'),
            //     // resolve => require(['../components/page/I18n.vue'], resolve),
            //     meta: { title: '国际化' }
            // },
            {
                // 权限页面
                path: '/permission',
                component: _import('page/Permission'),
                meta: { title: '权限测试', permission: true }
            },
            {
                path: '/404',
                component: _import('page/404'),
                meta: { title: '404' }
            },
            {
                path: '/403',
                component: _import('page/403'),
                meta: { title: '403' }
            }
        ]
    }, 
    {
        path: '/login',
        component: _import('page/Login'),
    },
    {
        path: '*',
        redirect: '/404'
    }
  ]
})
// const router = new Router({
//   mode:'history',
//   scrollBehavior:()=>({y:0}),
//   routes
// })
export default vueRouter


