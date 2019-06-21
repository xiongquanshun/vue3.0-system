<template>
    <div class="table systemRoot">
       
        <div class="container">
            <div class='title'>角色列表</div>
            <img src="../../assets/img/terminal-01.png" alt="">    
            <div>
            <div class="handle-box" >
                <el-button type="primary" icon="add" @click="add" style="float:right"> 添加角色</el-button>
            </div>
            <el-table :data="tableData" border :highlight-current-row='true' :row-class-name='tableRowClassName'  @row-click="checkRow" class="" ref="multipleTable" @selection-change="handleSelectionChange">       
                <el-table-column label="序号" width="80" class='_cell'>
                   <template scope="scope"> <span>{{(scope.$index + 1)}} </span> </template>
                </el-table-column>
                <el-table-column prop="name" label=" 角色名称 " >
                    <!-- <template scope="scope" > <div @click="checkRole(scope.row)" style="cursor:pointer;"> {{ scope.row.name }} </div> </template> -->
                </el-table-column>

                <el-table-column label="操作" align="center" width='120' >
                    <template slot-scope="scope" v-if='scope.$index!==0'> 
                        <el-button type="text" icon="el-icon-delete" class="red" @click.stop="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>
        </div>

        <div class="container">
            <div  class='title'>权限分配</div>
            <div style="padding:40px 40px 0">{{row.name}}</div>
            <div class="form-boxs">
                
               <div v-for='(item,index) in rootList' :key='index' class='rootList' v-if='item.index!=="index"'>
                   <div class='rootList-header'>{{item.title}}</div>
                    <div class='rootList-content'>
                        <el-checkbox-group v-model="rootSet" :disabled='row.name=="系统管理员"?true:false'>
                            <el-checkbox name="type"  v-for='(list,i) in item.subs' :key='i' :label="list.title"  v-model="val"></el-checkbox>
                        </el-checkbox-group>
                    </div>
               </div>
            </div>
            <div class='saveBtn'>
                <el-button type="primary" @click="saveData" :disabled='row.name=="系统管理员"?true:false'>确定保存</el-button>
            </div>
        </div>

           <!-- 新增弹出框 -->
        <el-dialog title="添加管理员" :visible.sync="addVisible" width="530px" class='addForm'>
            <el-form ref="addForm" :model="addForm" label-width="100px" >
                
                <el-form-item label="账号">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="设置密码">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="确认密码">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="姓名">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="电话">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="邮箱">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="addVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="saveAdd">确定添加</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    // var fs = require('fs');
    export default {
        name: 'systemRoot',
        data() {
            return {
                isActive:true,
                rootSet:[],
                val:true,
                addVisible:false,
                tableData: [
                    {
                        id:"01",
                        name:"系统管理员",
                        rootSet:["终端监控", "终端信息", "终端设置", "耗材补充", "打印报表", "打印记录", "退款列表", "价格模板", "价格阶梯", "促销设置", "耗材预警", "打印机配置", "耗材模板", "预警设置", "接警人员", "会员信息", "管理成员", "机构管理", "权限设置", "系统设置", "系统日志"],
                        rootList:[]
                    },
                    {
                        id:"02",
                        name:"企业管理员",
                        rootSet:[]
                    },
                    {
                        id:"03",
                        name:"运营管理",
                        rootSet:[]
                    },
                    {
                        id:"04",
                        name:"财务管理",
                        rootSet:[]
                    },
                    {
                        id:"05",
                        name:"耗材管理",
                        rootSet:[]
                    },
                    {
                        id:"06",
                        name:"耗材管理",
                        rootSet:[]
                    },
                    {
                        id:"07",
                        name:"耗材管理",
                        rootSet:[]
                    },
                    {
                        id:"08",
                        name:"耗材管理",
                        rootSet:[] 
                    },
                    {
                        id:"09",
                        name:"耗材管理",
                        rootSet:[] 
                    },
                    {
                        id:"10",
                        name:"耗材管理",
                        rootSet:[] 
                    },
                ],
                rootList: [
                    {
                        icon: require('../../assets/img/sidebar-01.png'),
                        index: 'index',
                        title: '我的首页'
                    },
                    {
                        index: 'terminal',
                        title: '终端管理',
                        icon: require('../../assets/img/sidebar-02.png'),
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
                        icon: require('../../assets/img/sidebar-03.png'),
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
                        icon: require('../../assets/img/sidebar-04.png'),
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
                        icon: require('../../assets/img/sidebar-05.png'),
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
                        icon: require('../../assets/img/sidebar-06.png'),
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
                addForm:{
                    name: '',
                    date: '',
                    address: '',
                    IDcard:"",
                    roomNumber:"",
                    sex:"",
                    iphone:""
                },
                 idx: -1,
            }
        },
        mounted(){
           
        },
        created() {
            // this.getData();
            this.rootSet=this.tableData[0].rootSet
            this.row=this.tableData[0];
        },

        methods: {
              // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                // this.getData();
            },
            // 获取 easy-mock 的模拟数据
            getData() {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
                if (process.env.NODE_ENV === 'development') {
                    // this.url = '../../../static/vuetable.json';
                    this.url='/api/users'
                };
                this.$axios.get(this.url, 
                // {
                //     page: this.cur_page
                // }
                ).then((res) => {
                    console.log(res)
                    this.tableData = res.data.data.list;
                })
            },
            search() {
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
             // 新增
            add(){
                this.addForm={
                    name: '',
                    date: '',
                    address: '',
                    IDcard:"",
                    roomNumber:"",
                    sex:"",
                    iphone:""
                };
                this.addVisible=true
            },
             // 保存新增
            saveAdd() {
                // this.$set(this.tableData, this.idx, this.addForm);
                console.log(this.addForm)
                const url='api/add',addForm=this.addForm;
                // this.writeJson(this.addForm)//执行一下;
                this.addVisible = false;
                this.$axios.post(url,{"newAdd":addForm}).then(res=>{
                    console.log(res)
                })
            },
             handleDelete(index, row) {
                this.idx = index;
                // this.delVisible = true;
                    this.$confirm('确定删除所选文件吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.deleteRow()
                    }).catch(() => {
                    
                    });
            },
            // 确定删除
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            },
            // 保存数据
            saveData(){
                let newRootSet=[],newRootList=[],that = this;
                // 获取设置的权限&&重构路由列表
                  this.rootList.map(item => {
                    //  新构建一个obj-->防止修改原数组
                    let _subs=[],obj={
                        index: item.index,
                        title: item.title,
                        icon:item.icon,
                        subs:[]
                    }
                    // 是否为首页
                    if(item.index!=='index'){
                        item.subs.map(item2 => {
                            if (this.rootSet.indexOf(item2.title) > -1) {
                            newRootSet.push(item2.title)
                            _subs.push(item2)
                            }
                        })
                        obj.subs=_subs
                    }else{
                        delete(obj["subs"])
                    }
                    newRootList.push(obj) //重构路由列表
                })
            
                // 重设tableList的角色root
                this.tableData.map((item,index) => {
                    if (this.row.name.indexOf(item.name) > -1&&this.row.id===item.id) {
                        item.rootSet=newRootSet;
                        item.rootList=newRootList;
                        // this.tableData[index]=item;
                        console.log(this.tableData[index])
                    }
                })
              
            },
            // // 选择角色
            // checkRole(row){
            //     this.rootSet=row.rootSet;
            //     this.row=row;
            //     console.log(row)
            // },
            // table 行高亮
            tableRowClassName(row){
                if (row.rowIndex === 0 && this.isActive) {
                    return 'current-row'
                } else {
                    return ''
                }
            },
            // 选择行
            checkRow(row, event, column) {
                console.log(row)
                 this.rootSet=row.rootSet;
                this.row=row;
                this.isActive = false
            },
            
        }
    }

</script>
<style>
    .systemRoot th{background: rgb(237,242,246)}
    .systemRoot .cell{text-align: center}
    .systemRoot  .addr-select .el-form-item__content{display:flex;}
    .systemRoot .el-form-item__label{width:105px;text-align: left;}
    .systemRoot .el-dialog{
        position:absolute;
        top: 50%;
        left: 50%;
        margin: 0 !important;
        transform: translate(-50%, -50%);
        max-height: calc(100% - 30px);
        max-width: calc(100% - 30px);
        display: flex;
        flex-direction: column;
    }
    .systemRoot .el-dialog__header{
        padding:15px;
        text-align: center;
        background: #EDF2F6;
    }
    .systemRoot .el-dialog__close{
        display: none
    }
    .systemRoot .el-dialog__body {
        padding:0
    }

    .systemRoot .el-dialog__header{text-align:center}
    .systemRoot .dialog-footer{
        text-align:center;
        display: block;
        padding:45px 0 25px;
        margin-top:-10px;
    }
    .systemRoot .dialog-footer button{
        border:none;
        font-size:16px;
        border-radius:6px;
        margin:0 12px;
        width: 110px;
    }
    .systemRoot .dialog-footer button:active{
     border:none;
    }
    .systemRoot .dialog-footer button:hover{
        opacity: 0.6;
    }
    .systemRoot .el-dialog  .el-form-item{margin-bottom:0px}
    .systemRoot .el-dialog  .el-form{padding:20px 45px;margin:0 auto;background: rgb(242,242,242)}
    .systemRoot .el-dialog  .el-form:first-child{background: none}
    .systemRoot .el-dialog  .el-form:last-child{border-top:1px solid rgb(204,204,204)}
    .systemRoot .el-checkbox-group .el-checkbox .el-checkbox__label{
        padding-left:15px;
    }

</style>

<style scoped>
    .systemRoot{display: flex;justify-content:center;}
    .container{flex:0.8;margin-right:10px;padding:0;position: relative;box-shadow:4px 2px 16px 0 rgba(98,104,127,0.3)}
    .container:nth-child(2){margin:0 0 0 10px;flex:2;}
    .pagination{position: absolute;bottom: 30px;left:0;right: 0; }
    .container img{position:absolute;right: -18px;top:180px;}
    .container>div{padding:40px;box-sizing:border-box;}
    .title{padding:0 30px !important;font-size:26px;height: 50px;line-height:50px;background:rgb(254, 251, 236)}
    .container:nth-child(1) .title{background:rgb(237, 242, 246)}
    .el-form-content{display: flex;justify-content:space-between;align-items:center;margin-bottom:15px;}
    .handle-box {
        margin-bottom: 20px;
        display:flex;
        justify-content:flex-end
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: rgb(242,151,141);
    }
    .saveBtn{display: flex;justify-content:flex-end;margin-top:20px;margin-bottom:0 !important;
    position: absolute;width:100%;left:-30px;bottom:30px}
    .saveBtn button{font-size:16px}
    .form-boxs{display:flex;flex-direction: row;flex-wrap:wrap;align-content: baseline;}
    .rootList{
        width:220px;
        box-shadow:0px 0px 6px rgb(169,169,169);
        margin:0 40px 40px 0;
        box-sizing:border-box;
    }
    .rootList-header{
       text-align:center;
       background:rgb(73,85,119);
       color:#fff;
       padding:10px;
    }
    .rootList-content{padding:20px;}
    .el-checkbox-group .el-checkbox{
        margin:0 0 15px;
        display: block;
    }

</style>
