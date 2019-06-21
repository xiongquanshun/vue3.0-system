<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#62687F"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in routerList">
                <template v-if="item.subs&&item.subs.length>0">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <!-- <i :class="item.icon"></i> -->
                            <img :src="item.icon" style='margin-right:6px;'/>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index" style="padding-left:58px">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>

                <template v-else-if="!item.subs">
                    <el-menu-item :index="item.index" :key="item.index">
                        <!-- <i :class="item.icon"></i> -->
                         <img :src="item.icon" style='margin-right:6px'/>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                routerList: [
                    {
                        icon: require('../../assets/img/sidebar-01.png'),
                        index: 'index',
                        title: '我的首页'
                    },
                    {
                        icon:  require('../../assets/img/sidebar-02.png'),
                        index: 'terminal',
                        title: '终端管理',
                        subs: [
                            {
                                index: 'terminalMonitor',
                                title: '终端监控'
                            },
                            {
                                index: 'terminalMsg',
                                title: '终端信息'
                            },
                            {
                                index: 'terminalSetting',
                                title: '终端设置'
                            },
                             {
                                index: 'terminalTarget',
                                title: '耗材补充'
                            },
                        ]
                    },
                      {
                        icon:  require('../../assets/img/sidebar-03.png'),
                        index: 'printPay',
                        title: '支付管理',
                        subs: [
                            {
                                index: 'printList',
                                title: '打印报表'
                            },
                            {
                                index: 'printRecord',
                                title: '打印记录'
                            },
                            {
                                index: 'printReturn',
                                title: '退款列表'
                            },
                             {
                                index: 'printPrice',
                                title: '价格模板'
                            },
                            {
                                index: 'printLadder',
                                title: '价格阶梯'
                            },
                            {
                                index: 'printPromotion',
                                title: '促销设置'
                            },
                        ]
                    },
                      {
                        icon:  require('../../assets/img/sidebar-04.png'),
                        index: 'target',
                        title: '耗材管理',
                        subs: [
                            {
                                index: 'targetWarn',
                                title: '耗材预警'
                            },
                            {
                                index: 'targetPrintSetting',
                                title: '打印机配置'
                            },
                            {
                                index: 'targetTemplate',
                                title: '耗材模板'
                            },
                            {
                                index: 'targetSetting',
                                title: '预警设置'
                            },
                            {
                                index: 'targetReceiver',
                                title: '接警人员'
                            },
                        ]
                    },
                    {
                        icon:  require('../../assets/img/sidebar-05.png'),
                        index: 'vipManage',
                        title: '会员管理',
                        subs: [
                            {
                                index: 'vipMsg',
                                title: '会员信息'
                            },
                         
                        ]
                    },
                      {
                        icon:  require('../../assets/img/sidebar-06.png'),
                        index: 'system',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'systemUser',
                                title: '管理成员'
                            },
                            {
                                index: 'systemOrgan',
                                title: '机构管理'
                            },
                            {
                                index: 'systemRoot',
                                title: '权限设置'
                            },
                            {
                                index: 'systemSetting',
                                title: '系统设置'
                            },
                            {
                                index: 'systemJournal',
                                title: '系统日志'
                            },

                        ]
                    },
                    /*  */
                    // {
                    //     icon: 'el-icon-lx-home',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                    // {
                    //     icon: 'el-icon-lx-cascades',
                    //     index: 'table',
                    //     title: '基础表格'
                    // },
                    // {
                    //     icon: 'el-icon-lx-copy',
                    //     index: 'tabs',
                    //     title: 'tab选项卡'
                    // },
                    // {
                    //     icon: 'el-icon-lx-calendar',
                    //     index: '3',
                    //     title: '表单相关',
                    //     subs: [
                    //         {
                    //             index: 'form',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: '3-2',
                    //             title: '三级菜单',
                    //             subs: [
                    //                 {
                    //                     index: 'editor',
                    //                     title: '富文本编辑器'
                    //                 },
                    //                 {
                    //                     index: 'markdown',
                    //                     title: 'markdown编辑器'
                    //                 },
                    //             ]
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-lx-emoji',
                    //     index: 'icon',
                    //     title: '自定义图标'
                    // },
                    // {
                    //     icon: 'el-icon-pie-chart',
                    //     index: 'charts',
                    //     title: 'schart图表'
                    // },
                    // {
                    //     icon: 'el-icon-rank',
                    //     index: '6',
                    //     title: '拖拽组件',
                    //     subs: [
                    //         {
                    //             index: 'drag',
                    //             title: '拖拽列表',
                    //         },
                    //         {
                    //             index: 'dialog',
                    //             title: '拖拽弹框',
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-lx-global',
                    //     index: 'i18n',
                    //     title: '国际化功能'
                    // },
                    // {
                    //     icon: 'el-icon-lx-warn',
                    //     index: '7',
                    //     title: '错误处理',
                    //     subs: [
                    //         {
                    //             index: 'permission',
                    //             title: '权限测试'
                    //         },
                    //         {
                    //             index: '404',
                    //             title: '404页面'
                    //         }
                    //     ]
                    // }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            console.log(this.routerList)
            this.routerList=localStorage.getItem('ms_username')=='admin'?this.routerList:this.$store.state.user.rootList
        }
    }
</script>

<style>
    .sidebar .el-submenu__icon-arrow{margin-top:-9px}
    .sidebar .el-icon-arrow-down:before{font-size:18px;color:#fff;}
</style>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 180px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
