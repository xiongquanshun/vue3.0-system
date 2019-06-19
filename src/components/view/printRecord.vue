<template>
    <div class="table printRecord">
       
        <div class="container">
            <div class='title'>设备列表</div>
            <img src="../../assets/img/terminal-01.png" alt="">    
            <div>
                <div class="handle-box"> 
                <el-select v-model="select_status" placeholder="运行状态" class="handle-select mr10" >
                    <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                </el-select>
                <el-select v-model="select_ascription" placeholder="所属机构" class="handle-select mr10" >
                    <el-option v-for="(item,index) in ascriptionList" :key='index' :label="item.name" :value="item.name" ></el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="请输入终端名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search" style="margin-left:10px">搜索</el-button>
            </div>
            <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange" :highlight-current-row='true' :row-class-name='tableRowClassName'  @row-click="checkRow">

                <el-table-column prop="name" label="终端名称" class='_cell'>
                </el-table-column>
                <el-table-column prop="ip" label="MAC地址" >
                </el-table-column>
                <el-table-column prop="status" label="运行状态">
                    <template slot-scope="scope">
                        <div :class="scope.row.status=='在线'? 'status_1' :'status_0'"> {{ scope.row.status }}</div>
                    </template>

                </el-table-column>
                <el-table-column prop="ascription" label="所属机构" >
                </el-table-column>
                 <el-table-column prop="address" label="终端编码" >
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="tableData.length">
                </el-pagination>
            </div>

            </div>
        </div>

        <div class="container">
            <div  class='title'>打印记录</div>
            <div class="form-boxs">
                <div class='printList-select'>
                    <font :class='printListSelect?"printList-select-active":""' @click="selectList('doc')">文档打印</font>
                    <font :class='!printListSelect?"printList-select-active":""' @click="selectList('photo')">照片打印</font>
                </div>
                <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                    <el-table-column prop="name" label="打印时间" class='_cell'>
                    </el-table-column>
                    <el-table-column prop="ip" label="打印类型" >
                    </el-table-column>
                    <el-table-column prop="status" label="格式">
                        <template slot-scope="scope">
                            <div :class="scope.row.status=='在线'? 'status_1' :'status_0'"> {{ scope.row.status }}</div>
                        </template>

                    </el-table-column>
                    <el-table-column prop="ascription" label="应支付金额" >
                    </el-table-column>
                    <el-table-column prop="address" label="状态" >
                    </el-table-column>
                    <el-table-column prop="address" label="用户" >
                    </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="tableData.length">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // var fs = require('fs');
    export default {
        name: 'printRecord',
        data() {
            return {
                printListSelect:true,
                statusList:[
                    {
                        status:null,
                        text:'运行状态'
                    },
                    {
                        status:0,
                        text:'离线'
                    },
                    {
                        status:1,
                        text:'在线'
                    },
                ],
                ascriptionList:[
                    {
                        id:"00",
                        name:'所属机构',
                    },
                    {
                        id:"01",
                        name:'益网互联公司',
                    },
                    {
                        id:"02",
                        name:'川纳传媒公司',
                    },
                    {
                        id:"03",
                        name:'印记',
                    }
                ],
                tableData: [
                    {
                        name:'蘇州大學風奎',
                        type:"照片",
                        status:"在线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'清华大学',
                        type:"黑白文档",
                        status:"在线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'青海大学',
                        type:"彩色文档",
                        status:"在线",
                        ascription:"印记",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'北京大学',
                        type:"照片",
                        status:"在线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'暨南大学',
                        type:"照片",
                        status:"在线",
                        ascription:"川纳传媒公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'华南理工',
                        type:"照片+黑白文档",
                        status:"在线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'剑桥大学',
                        type:"照片+彩色文档",
                        status:"在线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                      {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },

                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },
                     {
                        name:'牛津大学',
                        type:"照片",
                        status:"离线",
                        ascription:"益网互联公司",
                        address:"",
                        ip:"",
                        addr:"",
                        docPaper:"",
                        phoPaper:"",
                        alert:""
                    },

                ],
                pagesize:9,
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                select_type: '',
                select_status: '',
                select_ascription: '',
                del_list: [],
                is_search: false,
                addVisible:false,
                editVisible: false,
                delVisible: false,
                addForm: {},
                form: {
                    name:'深圳大学风槐斋',
                    type:"照片",
                    status:"离线",
                    ascription:"益网互联公司",
                    address:"",
                    ip:"9c-f6-dd-b0-70-1e",
                    addr:"",
                    docPaper:"",
                    phoPaper:"",
                    alert:""
                },
                idx: -1,
                isActive:true

            }
        },
        mounted(){
           
        },
        created() {
            // this.getData();
        },
        computed: {
              data() {
                this.select_status=this.select_status=='运行状态'?"":this.select_status;
                this.select_ascription=this.select_ascription=='所属机构'?"":this.select_ascription;
                const {cur_page,pagesize,select_status,select_ascription,select_hitch,select_word}=this;
                // this.tableData.slice((cur_page-1)*pagesize,cur_page*pagesize)
                const newList= this.tableData.filter((d) => {
                    let is_del = false;
                    if (!is_del) {
                        if(select_status==''&&select_ascription==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1))return d;
                            if(select_status==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                if(select_ascription==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                     return d;
                                }
                                else if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)
                                ){
                                  return d;
                                }
                            }
                            else if (d.status.indexOf(select_status) > -1 &&(d.name.indexOf(select_word) > -1 ||d.status.indexOf(select_word) > -1)){
                                if(select_ascription==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                     return d;
                                }
                                else if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)
                                ){
                                  return d;
                                }
                            }

                    }
                })
                return newList.slice((cur_page-1)*pagesize,cur_page*pagesize)
            }
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

            // /* 随机生成 */
            // randomNum(){
            //     /* 模拟数据 */
            //    var rand = "";
            //     for(var i = 0; i < 6; i++){
            //         var r = Math.floor(Math.random() * 10);
            //         rand += r;
            //     }
            //     this.form.address=rand
            // }
            // ,
            // saveData(){
            //     console.log("保存数据")
            // },
            selectList(val){
                this.printListSelect=val==='doc'?true:false;
            },
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
                console.log(row, event, column)
                this.isActive = false
            },
        }
    }

</script>
<style>
    .printRecord th{background: rgb(237,242,246)}
    .printRecord .cell{text-align: center}
    .printRecord  .addr-select .el-form-item__content{display:flex;}
    .printRecord .el-form-item__label{width:105px;text-align: left;}
</style>

<style scoped>
    .printRecord{display: flex;justify-content:center;}
    .container{flex:1;margin-right:10px;padding:0;position: relative;box-shadow:4px 2px 16px 0 rgba(98,104,127,0.3)}
    .container:nth-child(2){margin:0 0 0 10px}
    .pagination{position: absolute;bottom: 30px;left:0;right: 0; }
    .container img{position:absolute;right: -18px;top:180px;}
    .container>div{padding:30px;}
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
    .saveBtn{display: flex;justify-content:flex-end;margin-top:20px;margin-bottom:0 !important;position: absolute;width:100%;left:-30px;bottom:30px}
    .saveBtn button{font-size:16px}
    .handle-box {
        margin-bottom: 20px;
        display:flex;
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
    .printList-select{
        
    }
    .printList-select font{
        display: inline-block;
        padding:6px 10px;
        border:1px solid #409EFF;
        margin:0 0 10px;
        float: right;
        color:#409EFF;
        box-sizing:border-box;
        cursor: pointer;
    }
    .printList-select font:last-child{
        border-right:none
    }
    .printList-select-active{
        color:#fff !important;
        background-color:#409EFF;
    }
</style>
