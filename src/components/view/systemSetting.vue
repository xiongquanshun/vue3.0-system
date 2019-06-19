<template>
    <div class="table systemSetting">

        <div class="container">
            <!-- <div  class='title'>系统设置</div> -->
            <div class="form-boxs">
                <el-form ref="form" :model="formData" >
                       <!-- 消息通知方式 -->
                    <div class='form-title'>
                        <div class='form-title-text'>
                            <font style="font-size:16px;font-weight:600">消息通知方式</font>
                            <font></font>
                        </div>
                        <div class='form-title-bar'>
                            <div  class='form-title-bar2'></div>
                        </div>
                    </div>

                    <el-form-item label="手机短信通知">
                        <el-switch 
                            v-model="formData.noteSwitch" 
                            active-text="ON"
                            inactive-text="OFF"
                            :width='60' 
                            class="switch-text"
                        >
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="微信消息通知">
                        <el-switch 
                            v-model="formData.weChatSwitch" 
                            active-text="ON"
                            inactive-text="OFF"
                            :width='60' 
                            class="switch-text"
                        >
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="邮件通知">
                        <el-switch 
                            v-model="formData.mailboxSwitch" 
                            active-text="ON"
                            inactive-text="OFF"
                            :width='60' 
                            class="switch-text"
                        >
                        </el-switch>
                    </el-form-item>
                    <!-- IP设置 -->
                    <div class='form-title' style="margin-top:40px">
                        <div class='form-title-text'>
                            <font style="font-size:16px;font-weight:600">IP设置</font>
                            <font></font>
                        </div>
                        <div class='form-title-bar'>
                            <div  class='form-title-bar2'></div>
                        </div>
                    </div>

                    <el-form-item label="服务器主IP/主域名：">
                        <el-input v-model="formData.mainServer" ></el-input>
                    </el-form-item>
                    <el-form-item label="服务器副IP/副域名：">
                         <el-input v-model="formData.viceServer" ></el-input>
                    </el-form-item>
                    <el-form-item label="与终端通信IP/域名：">
                         <el-input v-model="formData.terminal" ></el-input>
                    </el-form-item>

                
                    <el-form-item class='saveBtn'>
                         <el-button type="primary"  @click="saveData">确定保存</el-button>
                    </el-form-item>
                   
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'systemSetting',
        data() {
            return {
                formData: {
                    noteSwitch:true,
                    weChatSwitch:true,
                    mailboxSwitch:true,
                    mainServer:'',
                    viceServer:'',
                    terminal:""
                },


            }
        },
        mounted(){
           
        },
        created() {
            // this.getData();
        },

      
        methods: {
            saveData(){
                console.log(this.formData)
                console.log('保存')
            }
        }
    }

</script>
<style>
    .systemSetting th{background: rgb(237,242,246)}
    .systemSetting .cell{text-align: center}
    .systemSetting  .addr-select .el-form-item__content{display:flex;}
    .systemSetting .el-form-item__label{width:145px;text-align: left;}

    /* switch */
    .systemSetting .el-switch__core {
        height: 28px;
        border-radius:20px;
    }
    .systemSetting .el-switch.is-checked .el-switch__core::after{
        margin-left:-25px
    }
   .systemSetting .el-switch__core:after{
        width:24px;height: 24px;
    }

    .systemSetting .switch-text .el-switch__label {
        position: absolute;
        display: none;
        color: #fff;
    }
    /*打开时文字位置设置*/
    .systemSetting .switch-text .el-switch__label--right {
    z-index: 1;
    left: -3px;
    }
    /*关闭时文字位置设置*/
    .systemSetting .switch-text .el-switch__label--left {
    z-index: 1;
    right: -6px;
    }
    /*显示文字*/
    .systemSetting .switch-text .el-switch__label.is-active {
    display: block;
    }

</style>

<style scoped>
    .systemSetting{display: flex;justify-content:center;}
    .container{flex:1;margin-right:10px;padding:0;position: relative;box-shadow:4px 2px 16px 0 rgba(98,104,127,0.3)}
    .container img{position:absolute;right: -18px;top:180px;}
    .container>div{padding:40px;}
    .title{padding:0 30px !important;font-size:26px;height: 50px;line-height:50px;background:rgb(254, 251, 236)}
    .container:nth-child(1) .title{background:rgb(237, 242, 246)}
    .status_0{color:rgb(242,151,141)}
    .status_1{color:rgb(16,162,241)}
    .form-boxs .el-input {width:280px;}
    .el-select{margin-right:10px}
    .form-title-text{display: flex;align-item:center;justify-content:space-between}
    .form-title-bar{height: 3px;background:rgb(204,204,204);margin:8px 0 20px;}
    .form-title-bar2{width:84px;height: 100%;background:rgb(121,121,121)}
    
    .el-form-item.el-form-item--small{margin-bottom:10px}
    .el-form-item.el-form-item--small+.form-title{margin-top:20px}
    .saveBtn{display: flex;justify-content:center;margin-top:100px;}
    .saveBtn button{font-size:16px;padding:9px 96px;}

</style>
