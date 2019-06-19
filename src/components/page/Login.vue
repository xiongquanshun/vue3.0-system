<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                            <i slot="prefix" class="el-icon-lx-people" style="font-size:20px;line-height:45px"></i>
                        <!-- <el-button slot="prepend" icon="el-icon-lx-people"></el-button> -->
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" >
                         <i slot="prefix" class="el-icon-lx-lock" style="font-size:20px;line-height:45px"></i>
                        <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
                    </el-input>
                </el-form-item>
                <el-form-item >
                  <div class="drag" ref="dragDiv">
                    <div class="drag_bg"></div>
                    <div class="drag_text">{{confirmWords}}</div>
                    <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>
                </div>
                </el-form-item>
              
                 <el-form-item  label="记住密码" class='isChecked'>
                    <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox> -->
                    <el-switch 
                            v-model="checked" 
                            active-text="ON"
                            inactive-text="OFF"
                            :width='60' 
                            class="switch-text"
                        >
                        </el-switch>
                </el-form-item>
              
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')" :disabled="!confirmSuccess||ruleForm.password==''||ruleForm.username==''"  :loading="loading" round>登录</el-button>
                </div>
                <p class="login-tips">© 2014 - {{year}} 深圳市益网互联 版权所有</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { loginByUserName } from '@/api/login'
    import { writeToken } from '@/utils/cookie'
    export default {
        data: function(){
            return {
                loading:false,
                ruleForm: {
                    username:JSON.parse(localStorage.getItem("longinMsg"))?JSON.parse(localStorage.getItem("longinMsg")).username:"",
                    password: JSON.parse(localStorage.getItem("longinMsg"))?JSON.parse(localStorage.getItem("longinMsg")).password:""
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                checked:JSON.parse(localStorage.getItem("longinMsg"))?true:false,
                year: new Date().getFullYear(),
                beginClientX:0,           /*距离屏幕左端距离*/
                mouseMoveStata:false,     /*触发拖动状态  判断*/
                maxwidth:'',               /*拖动最大宽度，依据滑块宽度算出来的*/
                confirmWords:'拖动滑块验证',   /*滑块文字*/
                confirmSuccess:false,           /*验证成功判断*/
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
                            // {
                            //     index: 'terminalMonitor',
                            //     title: '终端监控'
                            // },
                            // {
                            //     index: 'terminalMsg',
                            //     title: '终端信息'
                            // },
                            // {
                            //     index: 'terminalSetting',
                            //     title: '终端设置'
                            // },
                            // {
                            //     index: 'terminalTarget',
                            //     title: '耗材补充'
                            // },
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
            }
        },
        created(){

        },
          mounted(){
            this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
            document.getElementsByTagName('html')[0].addEventListener('mousemove',this.mouseMoveFn);
            document.getElementsByTagName('html')[0].addEventListener('mouseup',this.moseUpFn)
        },
        methods: {
            // 滑块
            //mousedoen 事件
            mousedownFn:function (e) {
                if(!this.confirmSuccess){
                    e.preventDefault && e.preventDefault();   //阻止文字选中等 浏览器默认事件
                    this.mouseMoveStata = true;
                    this.beginClientX = e.clientX;
                }
            }, 
            //验证成功函数      
            successFunction(){
                this.confirmSuccess = true
                this.confirmWords = '验证通过';
                if(window.addEventListener){
                    document.getElementsByTagName('html')[0].removeEventListener('mousemove',this.mouseMoveFn);
                    document.getElementsByTagName('html')[0].removeEventListener('mouseup',this.moseUpFn);
                }else {
                    document.getElementsByTagName('html')[0].removeEventListener('mouseup',()=>{});
                }
                document.getElementsByClassName('drag_text')[0].style.color = '#fff'
                document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px';
                document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px';
            },  
            //mousemove事件              
            mouseMoveFn(e){
                if(this.mouseMoveStata){
                    let width = e.clientX - this.beginClientX;
                    if(width>0 && width<=this.maxwidth){
                        document.getElementsByClassName('handler')[0].style.left = width + 'px';
                        document.getElementsByClassName('drag_bg')[0].style.width = width + 'px';
                    }else if(width>this.maxwidth){
                        this.successFunction();
                    }
                }
            },   
            //mouseup事件                
            moseUpFn(e){
                this.mouseMoveStata = false;
                var width = e.clientX - this.beginClientX;
                if(width<this.maxwidth){
                    document.getElementsByClassName('handler')[0].style.left = 0 + 'px';
                    document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px';
                }
            },                     
              // 登录
            submitForm(formName) {
                // token 虚拟登陆
                this.loading=true;
                writeToken(new Date().getDate());
                this.$refs[formName].validate((valid) => {
                    setTimeout(()=>{
                        if (valid) {
                            // 是否记住密码
                            if(this.checked){
                                localStorage.setItem('longinMsg',JSON.stringify(this.ruleForm));
                            }else{
                                localStorage.removeItem('longinMsg')
                            }
                            // 权限列表
                            if(this.ruleForm.username!=='admin'){
                                this.$store.dispatch('rootFun',this.rootList)
                            }
                            localStorage.setItem('ms_username',this.ruleForm.username);
                            this.$message.success('登陆成功!')
                            this.$router.push('/');
                            sessionStorage.setItem('rootList',JSON.stringify(this.$store.state.user.rootList))
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    },2000)
                });
               
            },
            // doLogin() {
            //     this.loading = true
            //     // token 虚拟登陆
            //     writeToken(new Date().getDate())
            //     setTimeout(() => {
            //         this.loading = false
            //         // redirect
            //         this.$router.push({ path: '/' })
            //     }, 2000)
            // },
            // // 通过API接口登陆
            // doLoginByAPI() {
            //     this.loading = true
            //     const para = {
            //         username: this.loginPara.userName,
            //         password: this.loginPara.password
            //         /* loginText: "shouguang",
            //         password: 123456,
            //         loginType: 0 */
            //     }
            //     loginByUserName(para)
            //         .then(result => {
            //         if (result.success) {
            //             writeToken(result.result.sessionId)
            //             this.$message.success('登陆成功!')
            //             this.$router.push({ path: '/' })
            //         } else {
            //             this.$message.error(result.message)
            //         }
            //         })
            //         .finally(() => {
            //         this.loading = false
            //     })
            // }
        }
    }
</script>
<style>
 /* switch */
    .login-wrap .el-switch__core {
        height: 28px;
        border-radius:20px;
    }
    .login-wrap .el-switch.is-checked .el-switch__core::after{
        margin-left:-25px
    }
   .login-wrap .el-switch__core:after{
        width:24px;height: 24px;
    }

    .login-wrap .switch-text .el-switch__label {
        position: absolute;
        display: none;
        color: #fff;
    }
    /*打开时文字位置设置*/
    .login-wrap .switch-text .el-switch__label--right {
    z-index: 1;
    left: -3px;
    }
    /*关闭时文字位置设置*/
    .login-wrap .switch-text .el-switch__label--left {
    z-index: 1;
    right: -6px;
    }
    /*显示文字*/
    .login-wrap .switch-text .el-switch__label.is-active {
    display: block;
    }
    /* end */
    .login-wrap .isChecked .el-form-item__label{flex:1;text-align: left;}
    .login-wrap .el-input--small .el-input__inner{height:45px;line-height: 45px}
    .login-wrap .el-form-item--small .el-form-item__error{padding-top:8px}
    .login-wrap .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{margin-bottom: 28px;}
</style>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        /* background-image: url(../../assets/login-bg.jpg); */
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 55px;
        text-align: center;
        font-size:20px;
        color: #777676;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:440px;
        /* margin:-190px 0 0 -175px; */
        transform:translate(-50%,-50%);
        border-radius: 5px;
        background: rgba(255,255,255, 1);
        overflow: hidden;
    }
    .ms-content{
        padding:50px 50px 20px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        text-align:center;
        margin-top:10px;
    }
    .isChecked{
        display:flex;
        justify-content:space-between;

    }
    /* 滑块 */
    .drag{
        position: relative;
        background-color: #e8e8e8;
        width: 100%;
        height: 34px;
        line-height: 34px;
        text-align: center;
    }
    .handler{
        width: 40px;
        height: 32px;
        border: 1px solid #ccc;
        cursor: move;
    }
    .handler_bg{
        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;
    }
    .handler_ok_bg{
        background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==") no-repeat center;
    }
    .drag_bg{
        background-color: #7ac23c;
        height: 34px;
        width: 0px;
    }
    .drag_text{
        position: absolute;
        top: 0px;
        width: 100%;text-align: center;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        -o-user-select:none;
        -ms-user-select:none;
        color:#9c9c9c;
    }
     .drag::before {
                content: "";
                position: absolute;
                width: 20px;
                height: 100%;
                top: 0;
                left: -20px;
                overflow: hidden;
                background: -moz-linear-gradient(left, rgba(255,255,255,0)0, rgba(255,255,255,0.2)50%, rgba(255,255,255,0)100%);
                background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(50%, rgba(255,255,255,0.5)), color-stop(100%, rgba(255,255,255,0)));
                background: -webkit-linear-gradient(left, rgba(255,255,255,0)0, rgba(255,255,255,0.2)50%, rgba(255,255,255,0)100%);
                background: -o-linear-gradient(left, rgba(255,255,255,0)0, rgba(255,255,255,0.4)50%, rgba(255,255,255,0)100%);
                background: linear-gradient(to bottom right, rgba(255, 255, 255, 0)0, rgba(255, 255, 255, 0.2)50%, rgba(255, 255, 255, 0)100%); 

                -webkit-transform: skewX(-30deg);
                -moz-transform: skewX(-30deg);
                transform: skewX(-30deg);
                animation: animate-shine 2s linear infinite;
            }
            @keyframes animate-shine {
                0% {
                    opacity: 1;
                    /* width: 0; */
                    left:0
                }

                50% {
                    opacity: 1;
                    left:50%
                }

                100% {
                    opacity: 1;
                    left: 100%;
                }
            } 
            /* .drag:hover:before {
                left: 150%;
                transition: left 1.5s ease 0s;
            } */
</style>