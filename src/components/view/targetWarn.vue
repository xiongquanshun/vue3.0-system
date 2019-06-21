<template>
    <div class="table terminalMonitor">
       
        <div class="container">
            <div class="handle-box">
                <el-select v-model="select_type" placeholder="终端类型" class="handle-select mr10" >
                    <el-option v-for="(item,index) in typeList" :key="index" :label="item.name" :value="item.name"  @mousedown="select"></el-option>
                </el-select>
                <el-select v-model="select_status" placeholder="运行状态" class="handle-select mr10" >
                    <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text"  @mousedown="select"></el-option>
                </el-select>
                <el-select v-model="select_ascription" placeholder="所属机构" class="handle-select mr10" >
                    <el-option v-for="(item,index) in ascriptionList" :key='index' :label="item.name" :value="item.name"  @mousedown="select"></el-option>
                </el-select>
                <el-select v-model="select_hitch" placeholder="故障报警" class="handle-select mr10" >
                    <el-option v-for="(item,index) in hitchList" :key='index' :label="item.text" :value="item.text"  @mousedown="select"></el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="请输入终端名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search" style="margin-left: 10px">搜索</el-button>
            </div>
            <el-table :data="data" border class="" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column prop="name" label="终端名称"  class='_cell'>
                </el-table-column>
                <el-table-column prop="type" label="报警内容">
                </el-table-column>
                <el-table-column prop="status" label="报警时间">
                    <template slot-scope="scope">
                        <div :class="scope.row.status=='在线'? 'status_1' :'status_0'"> {{ scope.row.status }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="ascription" label="报警通知接收人" >
                </el-table-column>
                 <!-- <el-table-column prop="address" label="终端编码" >
                </el-table-column>
                <el-table-column prop="ip" label="MAC地址" >
                </el-table-column>
                <el-table-column prop="addr" label="所在地址">
                </el-table-column>
                <el-table-column prop="docPaper" label="剩余纸张/文档储纸量" >
                </el-table-column>
                <el-table-column prop="phoPaper" label="剩余相张/相纸储纸量" >
                </el-table-column>
                <el-table-column prop="hitch" label="故障报警" >
                    <template slot-scope="scope">
                        <div :class="scope.row.hitch=='运行正常'? '' :'status_0'"> {{ scope.row.hitch }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="alert" label="故障详情" >
                    <template slot-scope="scope">
                        <div :class="scope.row.alert=='正常'? '' :'status_0'"> {{ scope.row.alert }}</div>
                    </template>
                </el-table-column> -->
                
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="tableData.length">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
    // var fs = require('fs');
    export default {
        name: 'targetWarn',
        data() {
            return {
                url: './static/vuetable.json',
                typeList:[
                    {
                        id:"00",
                        name:'终端类型',
                    },
                    {
                        id:"01",
                        name:'照片',
                    },
                    {
                        id:"02",
                        name:'黑白文档',
                    },
                     {
                        id:"03",
                        name:'彩色文档',
                    },
                     {
                        id:"04",
                        name:'照片+黑白文档',
                    },
                     {
                        id:"05",
                        name:'照片+彩色文档',
                    },
                    
                ],
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
                hitchList:[
                    {
                        status:null,
                        text:'故障报警'
                    },
                    {
                        status:0,
                        text:'运行正常'
                    },
                    {
                        status:1,
                        text:'运行故障'
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
                        alert:"",
                        hitch:"运行正常"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
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
                        alert:"",
                        hitch:"运行故障"
                    },

                ],
                pagesize:10,
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                select_type: '',
                select_status: '',
                select_ascription: '',
                select_hitch:"",
                del_list: [],
                is_search: false,
                addVisible:false,
                editVisible: false,
                delVisible: false,
                addForm: {},
                form: {
                    name: '',
                    date: '',
                    address: '',
                    IDcard:"",
                    roomNumber:"",
                    sex:""
                },
                idx: -1,
                // cityList:cityList
            }
        },
        created() {
            // this.getData();
        },
        computed: {
            data() {
                this.select_type=this.select_type=='终端类型'?"":this.select_type;
                this.select_status=this.select_status=='运行状态'?"":this.select_status;
                this.select_ascription=this.select_ascription=='所属机构'?"":this.select_ascription;
                this.select_hitch=this.select_hitch=='故障报警'?"":this.select_hitch;
                // this.select_word=this.select_ascription=='所属机构'?"":this.select_ascription;

                const {cur_page,pagesize,select_type,select_status,select_ascription,select_hitch,select_word}=this;
                //   return this.tableData.slice((cur_page-1)*pagesize,cur_page*pagesize)
                const newList=this.tableData.filter((d) => {
                    let is_del = false;
                    // for (let i = 0; i < this.del_list.length; i++) {
                    //     if (d.name === this.del_list[i].name) {
                    //         is_del = true;
                    //         break;
                    //     }
                    // }
                    // if (!is_del) {
                    //     if(this.select_cate=='全国')return d;
                    //     if (d.address.indexOf(this.select_cate) > -1 &&
                    //         (d.name.indexOf(this.select_word) > -1 ||
                    //             d.address.indexOf(this.select_word) > -1)
                    //     ) {
                    //         return d;
                    //     }
                    // }
                    // if (!is_del) {
                    //     if(select_type=='终端类型'&&select_status=='运行状态'&&select_ascription=='所属机构')return d;
                    //     if(select_type=='终端类型'){
                    //         if(select_status=='运行状态'){
                    //             return d;
                    //         }
                    //         else if (d.status.indexOf(select_status) > -1 &&(d.name.indexOf(select_word) > -1 ||d.status.indexOf(select_word) > -1)){
                    //             if(select_ascription=='所属机构'){
                    //                  return d;
                    //             }
                    //             else if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)
                    //             ){
                    //               if(select_hitch=='故障报警'){
                    //                     return d;
                    //                 }
                    //                 else if(d.hitch.indexOf(select_hitch) > -1 &&(d.name.indexOf(select_word) > -1 ||d.hitch.indexOf(select_word) > -1)){
                    //                     return d;
                    //                 }
                    //             }
                    //         }


                    //     }
                    //     else if (d.type.indexOf(select_type) > -1 &&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                    //         if(select_status=='运行状态'){
                    //             return d;
                    //         }
                    //         else if (d.status.indexOf(select_status) > -1 &&(d.name.indexOf(select_word) > -1 ||d.status.indexOf(select_word) > -1)){
                    //             if(select_ascription=='所属机构'){
                    //                  return d;
                    //             }
                    //             else if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)
                    //             ){
                    //                 if(select_hitch=='故障报警'){
                    //                     return d;
                    //                 }
                    //                 else if(d.hitch.indexOf(select_hitch) > -1 &&(d.name.indexOf(select_word) > -1 ||d.hitch.indexOf(select_word) > -1)){
                    //                     return d;
                    //                 }
                    //             }
                    //         }

                    //     }

                    // }

                     if (!is_del) {
                        if(select_type==''&&select_status==''&&select_ascription==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1))return d;
                        if(select_type==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                            if(select_status==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                return d;
                            }
                            else if (d.status.indexOf(select_status) > -1 &&(d.name.indexOf(select_word) > -1 ||d.status.indexOf(select_word) > -1)){
                                if(select_ascription==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                     return d;
                                }
                                else if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)
                                ){
                                  if(select_hitch==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                        return d;
                                    }
                                    else if(d.hitch.indexOf(select_hitch) > -1 &&(d.name.indexOf(select_word) > -1 ||d.hitch.indexOf(select_word) > -1)){
                                        return d;
                                    }
                                }
                            }


                        }
                        else if (d.type.indexOf(select_type) > -1 &&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                            if(select_status==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                return d;
                            }
                            else if (d.status.indexOf(select_status) > -1 &&(d.name.indexOf(select_word) > -1 ||d.status.indexOf(select_word) > -1)){
                                if(select_ascription==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                     return d;
                                }
                                else if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)
                                ){
                                    if(select_hitch==''&&(d.name.indexOf(select_word) > -1 || d.type.indexOf(select_word) > -1)){
                                        return d;
                                    }
                                    else if(d.hitch.indexOf(select_hitch) > -1 &&(d.name.indexOf(select_word) > -1 ||d.hitch.indexOf(select_word) > -1)){
                                        return d;
                                    }
                                }
                            }

                        }

                    }
                })
                return newList.slice((cur_page-1)*pagesize,cur_page*pagesize)
            }
        },
        methods: {
            // 选择城市
            select(e){
                console.log(1231)
                console.log(e)
            },
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = Number(val);
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
        }
    }

</script>
<style>
  .terminalMonitor th{background: rgb(237,242,246)}
  .terminalMonitor .cell{text-align: center}
</style>

<style scoped>
    .container{height: 100%;box-sizing:border-box}
    .pagination{position: absolute;bottom: 30px;left:0;right: 0; }
    .status_0{color:rgb(242,151,141)}
    .status_1{color:rgb(16,162,241)}
    .handle-box {
        margin-bottom: 20px;
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
    .el-select{margin-right:10px}

</style>
