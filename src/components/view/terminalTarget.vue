<template>
    <div class="table terminalTarget">
       
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
            <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange"  :highlight-current-row='true' :row-class-name='tableRowClassName'  @row-click="checkRow">

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
            <div  class='title'>耗材补充</div>
            <div class="form-boxs">
                <el-form ref="form" :model="form" >
                    <!-- 耗材状态 -->
                    <div class='form-title'>
                        <div class='form-title-text'>
                            <font style="font-size:16px;font-weight:600">耗材状态</font>
                            <font></font>
                        </div>
                        <div class='form-title-bar'>
                            <div  class='form-title-bar2'></div>
                        </div>
                    </div>

                    <el-form-item label="文档纸剩余">
                        <div>750张</div>
                        <!-- <template slot-scope="scope">
                            <div :class="scope.row.status=='在线'? 'status_1' :'status_0'"> {{ scope.row.status }}</div>
                        </template> -->
                    </el-form-item>
                    <el-form-item label="照片纸剩余">
                        <div>3000页</div>
                    </el-form-item>

                    <el-form-item label="碳粉可打印">
                        <div>500张</div>
                    </el-form-item>

                   <!-- 耗材补充更换 -->
                    <div class='form-title'>
                        <div class='form-title-text'>
                            <font style="font-size:16px;font-weight:600">耗材补充更换</font>
                            <font></font>
                        </div>
                        <div class='form-title-bar'>
                            <div  class='form-title-bar2'></div>
                        </div>
                    </div>
                    <el-form-item label="文档纸更新为">
                        <el-input v-model="form.name" class='el-input'></el-input>
                    </el-form-item>

                    <el-form-item label="照片纸更新为">
                          <el-input v-model="form.name" class='el-input'></el-input>
                    </el-form-item>
                    
                    <el-form-item label="是否更换硒鼓">
                        <el-select v-model="select_status" placeholder="运行状态" class="handle-select mr10" >
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
                        <el-select v-model="select_status" placeholder="运行状态" class="handle-select mr10" >
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
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
    // var fs = require('fs');
    export default {
        name: 'terminalTarget',
        data() {
            return {
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

             /**
             * [过滤对象]
             * @param  obj [过滤前数据]
             * @param  arr [过滤条件，要求为数组]
             */
            filterObj(obj, arr) {
                if (typeof (obj) !== "object" || !Array.isArray(arr)) {
                    throw new Error("参数格式不正确")
                }
                const result = {}
                Object.keys(obj).filter((key) => arr.includes(key)).forEach((key) => {
                    result[key] = obj[key]
                })
                return result
            },
            /* 随机生成 */
            randomNum(){
                /* 模拟数据 */
               var rand = "";
                for(var i = 0; i < 6; i++){
                    var r = Math.floor(Math.random() * 10);
                    rand += r;
                }
                this.form.address=rand
            }
            ,
            saveData(){
                console.log("保存数据")
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
    .terminalTarget th{background: rgb(237,242,246)}
    .terminalTarget .cell{text-align: center}
    .terminalTarget  .addr-select .el-form-item__content{display:flex;}
    .terminalTarget .el-form-item__label{width:105px;text-align: left;}
</style>

<style scoped>
    .terminalTarget{display: flex;justify-content:center;}
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
</style>
