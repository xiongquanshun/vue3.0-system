import { deleteToken } from '@/utils/cookie'
const user = {
  // 状态
  state: {
    userId: '',
    userToken: '',
    userName: '',
    loginStatus: false,
    rootList: [
      {
        icon: require('@/assets/img/sidebar-01.png'),
        index: 'index',
        title: '我的首页'
      },
      {
        index: 'terminal',
        title: '终端管理',
        icon: require('@/assets/img/sidebar-02.png'),
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
        index: 'printPay',
        title: '支付管理',
        icon: require('@/assets/img/sidebar-03.png'),
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
        index: 'target',
        title: '耗材管理',
        icon: require('@/assets/img/sidebar-04.png'),
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
        index: 'vipManage',
        title: '会员管理',
        icon: require('@/assets/img/sidebar-05.png'),
        subs: [
            {
                index: 'vipMsg',
                title: '会员信息'
            },
          
        ]
      },
      {
        index: 'system',
        title: '系统管理',
        icon: require('@/assets/img/sidebar-06.png'),
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
    ],
  },
  // 修改方法
  mutations: {
    Set_userId: (state, userId) => {
      state.userId = userId
    },
    Set_userToken: (state, userToken) => {
      state.userToken = userToken
    },
    Set_userName: (state, userName) => {
      state.userName = userName
    },
    Set_loginStatus: (state, loginStatus) => {
      state.loginStatus = loginStatus
    },
    Set_rootList: (state, rootList) => {
      state.rootList = rootList
    }
  },
  // 异步修改方式
  actions: {
    // // 通过vuex登陆
    // loginByStore({ commit }, loginPara) {
    //   return new Promise((resolve, reject) => {
    //     commit('Login')
    //     // 执行完异步的ajax之后resovle(data)
    //     try {
    //       resolve()
    //     } catch (error) {
    //       reject(error)
    //     }
    //   })
    // },
    // // 退出登录
    // logout() {
    //   return new Promise((resolve, reject) => {
    //     try {
    //       deleteToken()
    //       resolve()
    //     } catch (error) {
    //       reject(error)
    //     }
    //   })
    // },
    rootFun({commit},data){
      commit('Set_rootList',data)
    }
  }
}

export default user
