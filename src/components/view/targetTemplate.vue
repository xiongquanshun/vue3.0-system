<template>
    <div class="table targetTemplate">
       
        <div class="container">
            <div class='printList-select clearfix'>
                <div class='clearfix' style="flex:1">
                    <font :class='printListSelect?"printList-select-active":""' @click="selectList('doc')">文档打印</font>
                    <font :class='!printListSelect?"printList-select-active":""' @click="selectList('photo')">照片打印</font>
                </div>
               
                <el-button type="primary" icon="add" @click="add" style="float:right"> 添加新设备 </el-button>
            </div>

           
            
            <el-table :data="data" border class="" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="打印机型号" width="120" class='_cell'>
                </el-table-column>
                <el-table-column prop="ascription" label="色彩模式" >
                </el-table-column>
                 <el-table-column prop="copies" label="纸盒容量（张）" >
                </el-table-column>
                <el-table-column prop="income" label="硒鼓最大打印量（页）" >
                </el-table-column>
                 <el-table-column prop="income" label="打印机来源" >
                </el-table-column>
                 <el-table-column prop="income" label=" 供应商 " >
                </el-table-column>
                 <el-table-column prop="income" label=" 联系人 " >
                </el-table-column>
                 <el-table-column prop="income" label=" 联系方式  " >
                </el-table-column>
                <!-- <el-table-column prop="income" label=" 售后联系人   " >
                </el-table-column>
                <el-table-column prop="income" label=" 联系电话  " >
                </el-table-column> -->
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
             <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                
            </div>
            
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="tableData.length">
                </el-pagination>
            </div>
        </div>

         <!-- 新增弹出框 -->
        <el-dialog title="添加新设备" :visible.sync="addVisible" width="530px">
            <el-form ref="addForm" :model="addForm" label-width="130px" >
                <el-form-item label="打印机型号">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="色彩模式">
                    <div class="el-form-content">
                         <el-select v-model="select_status" placeholder="运行状态"  style="width:100%;margin:0">
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                 <el-form-item label="纸盒容量">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" class='unit-input1'></el-input>
                         <span class='el-form-content-unit'>张</span>
                    </div>
                </el-form-item>
                 <el-form-item label="硒鼓容量">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" class='unit-input1'></el-input>
                         <span class='el-form-content-unit'>页</span>
                    </div>
                </el-form-item>
                 <el-form-item label="设备来源">
                    <div class="el-form-content">
                       <el-select v-model="select_status" placeholder="运行状态"  style="width:100%;margin:0">
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                 <el-form-item label="供应商">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="联系人">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="联系方式 ">
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
         <!-- 编辑弹出框 -->
        <el-dialog title="详情" :visible.sync="editVisible" width="530px" class='detail'>
             <el-form ref="addForm" :model="addForm" label-width="130px" >
                <el-form-item label="打印机型号">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="色彩模式">
                    <div class="el-form-content">
                         <el-select v-model="select_status" placeholder="运行状态"  style="width:100%;margin:0">
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                 <el-form-item label="纸盒容量">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" class='unit-input1'></el-input>
                         <span class='el-form-content-unit'>张</span>
                    </div>
                </el-form-item>
                 <el-form-item label="硒鼓容量">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" class='unit-input1'></el-input>
                         <span class='el-form-content-unit'>页</span>
                    </div>
                </el-form-item>
                 <el-form-item label="设备来源">
                    <div class="el-form-content">
                       <el-select v-model="select_status" placeholder="运行状态"  style="width:100%;margin:0">
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                 <el-form-item label="供应商">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="联系人">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="联系方式 ">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
               <!-- <el-button @click="editVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="editVisible = true">确定编辑</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    // var fs = require('fs');
    // import util from './../../../static/js/util.js'
    export default {
        name: 'targetTemplate',
        data() {
            return {
                // url: './static/vuetable.json',
                printListSelect:true,
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
                        ascription:"川纳传媒公司",
                        copies:10,
                        income:40,
                        date:'2019/03/23'
                    },
                      {
                        name:'清华大学',
                        ascription:"川纳传媒公司",
                        copies:30,
                        income:20,
                        date:'2019/03/23'
                    },
                      {
                        name:'青海大学',
                        ascription:"印记",
                        copies:50,
                        income:45,
                        date:'2019/03/23'
                    },
                    {
                        name:'北京大学',
                        ascription:"川纳传媒公司",
                        copies:1,
                        income:30,
                        date:'2019/05/07'
                    },
                    {
                        name:'暨南大学',
                        ascription:"川纳传媒公司",
                        copies:8,
                        income:14,
                        date:'2019/05/20'
                    },
                      {
                        name:'华南理工',
                        ascription:"印记",
                        copies:7,
                        income:28,
                        date:'2019/04/23'
                    },
                    {
                        name:'剑桥大学',
                        ascription:"印记",
                        copies:10,
                        income:40,
                        date:'2019/05/23'
                    },
                    {
                        name:'牛津大学',
                        ascription:"印记",
                        copies:10,
                        income:40,
                         date:'2019/05/23'
                    },
                    {
                        name:'牛津大学',
                        ascription:"印记",
                        copies:10,
                        income:40,
                        date:'2019/05/23'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                        date:'2019/05/23'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                        date:'2019/05/23'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                        date:'2019/05/23'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                        date:'2019/05/23'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                        date:'2019/05/21'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                         date:'2019/05/20'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                         date:'2019/05/20'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                         date:'2019/05/20'
                    },
                     {
                        name:'牛津大学',
                        ascription:"益网互联公司",
                        copies:10,
                        income:40,
                        date:'2019/05/20'
                    },

                     

                ],
                pagesize:10,
                cur_page: 1,
                multipleSelection: [],
                select_word: '',
                select_ascription: '',
                select_startDate:"",
                select_endDate:"",
                del_list: [],
                is_search: false,
                addVisible:false,
                editVisible: false,
                delVisible: false,
                addForm: {},
                form: {
                    name:'',
                    ascription:"",
                    copies:0,
                    income:0
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
                this.select_ascription=this.select_ascription=='所属机构'?"":this.select_ascription;
                let {cur_page,pagesize,select_ascription,select_startDate,select_endDate,select_word}=this,that = this;
                /* 时间转换 */
                select_startDate=(select_startDate==''||select_startDate==null)?"":this._parseTime(new Date(select_startDate));
                select_endDate=(select_endDate==''||select_endDate==null)?"":this._parseTime(new Date(select_endDate));
                let startTime=this._dateToTimeStamp(select_startDate),endTime=this._dateToTimeStamp(select_endDate);
                /* end */
                // .slice((cur_page-1)*pagesize,cur_page*pagesize)
                let newList = this.tableData.filter((d) => {
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if (d.name === this.del_list[i].name) {
                            is_del = true;
                            break;
                        }
                    }
                    if (!is_del) {
                        // 数据过滤
                        if(select_ascription==''&&select_startDate==''&&select_endDate==""&&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1))return d;
                        if(select_ascription==''&&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)){
                            if(!isNaN(startTime)){
                                if(this._dateToTimeStamp(d.date)>=startTime){
                                    if(!isNaN(endTime)){
                                        if(this._dateToTimeStamp(d.date)<=endTime){
                                            return d
                                        }
                                    }else{
                                        return d
                                    }
                                }
                            }else {
                                if(!isNaN(endTime)){
                                    if(this._dateToTimeStamp(d.date)<=endTime){
                                        return d
                                    }
                                }else{
                                    return d
                                }
                            }
                        }
                        if (d.ascription.indexOf(select_ascription) > -1 &&(d.name.indexOf(select_word) > -1 ||d.ascription.indexOf(select_word) > -1)){
                             if(!isNaN(startTime)){
                                if(this._dateToTimeStamp(d.date)>=startTime){
                                    if(!isNaN(endTime)){
                                        if(this._dateToTimeStamp(d.date)<=endTime){
                                            return d
                                        }
                                    }else{
                                        return d
                                    }
                                }
                            }else {
                                if(!isNaN(endTime)){
                                    if(this._dateToTimeStamp(d.date)<=endTime){
                                        return d
                                    }
                                }else{
                                    return d
                                }
                            }
                        }

                    }
                })
                return newList.slice((cur_page-1)*pagesize,cur_page*pagesize)
            }
        },
        methods: {
            selectList(val){
                this.printListSelect=val==='doc'?true:false;
            },
            // 选择城市
            select(){
                console.log(1231)
                console.log(this)
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
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    name: item.name,
                    date: item.date,
                    sex: item.sex,
                    IDcard: item.IDcard,
                    roomNumber: item.roomNumber,
                    address: item.address,
                    iphone:item.iphone

                }
                this.editVisible = true;
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
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
              

                 this.$confirm('确定删除所选文件吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.del_list = this.del_list.concat(this.multipleSelection);
                        for (let i = 0; i < length; i++) {
                            str += this.multipleSelection[i].name + ' ';
                        }
                        // this.$message.error('删除了' + str);
                        this.multipleSelection = [];
                        this.$message({
                            message: '删除了'+str,
                            type: 'success',
                            center:true
                        });
                    }).catch(() => {
                    
                    });
            },
              // 确定删除
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
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
             // 保存编辑
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
        }
    }

</script>

<style>
    .targetTemplate th{background: rgb(237,242,246)}
    .targetTemplate .cell{text-align: center}
    .targetTemplate .el-form-item__label{text-align:left}
    .targetTemplate .el-dialog{
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
    .targetTemplate .el-dialog__header{
        padding:15px;
        text-align: center;
        background: #EDF2F6;
    }
    .targetTemplate .el-dialog__close{
        display: none
    }
    .targetTemplate .el-dialog__body {
        padding:0
    }

    .targetTemplate  .el-dialog__header{text-align:center}
    .targetTemplate  .dialog-footer{
        text-align:center;
        display: block;
        padding:45px 0 25px;
        margin-top:-10px;
    }
    .targetTemplate  .dialog-footer button{
        border:none;
        font-size:16px;
        border-radius:6px;
        margin:0 12px;
        width: 110px;
    }
    .targetTemplate  .dialog-footer button:active{
     border:none;
    }
    .targetTemplate  .dialog-footer button:hover{
        opacity: 0.6;
    }
    .targetTemplate .el-dialog  .el-form-item{margin-bottom:0px}
    .targetTemplate .el-dialog  .el-form{padding:20px 45px;margin:0 auto;background: rgb(242,242,242)}
    .targetTemplate .el-dialog  .el-form:first-child{background: none}
    .targetTemplate .el-dialog  .el-form:last-child{border-top:1px solid rgb(204,204,204)}
    .targetTemplate .unit-input1 input{
        padding-right:46px;
    }
    .targetTemplate .unit-input2 input{
        padding-right:30px;
    }
    .targetTemplate .el-switch__core {
        height: 28px;
        border-radius:20px
    }
    .targetTemplate .el-switch.is-checked .el-switch__core::after{
        margin-left:-25px
    }
    .targetTemplate .el-switch__core:after{
        width:24px;height: 24px;
    }
</style>

<style scoped>
    .container{height: 100%;box-sizing:border-box}
    .pagination{position: absolute;bottom: 30px;left:0;right: 0; }
    .status_0{color:rgb(242,151,141)}
    .status_1{color:rgb(16,162,241)}
    .handle-box {
        margin-top: 20px;
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
    .el-select,.el-date-editor{margin-right:10px;width:130px}
    .el-form-content{display: flex;justify-content:space-between;align-items:center;margin-bottom:15px;}
    .el-form-content-unit{position:absolute;top:1px;right: 10px;padding-left:6px;color:#DCDFE6}
    .el-switch{height: 32px;}
    .switch-text{
        display: flex;
        font-weight: 400;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
    }
    .switch-text span{padding-right:6px}

    .printList-select{
         margin:0 0 20px;
        display: flex;
        align-items:center;
          justify-content: space-between;
    }
    .printList-select font{
        display: inline-block;
        padding:10px 20px;
        border:1px solid #409EFF;
       
        float: left;
        color:#409EFF;
        box-sizing:border-box;
        cursor: pointer;
    }
    .printList-select font:first-child{
        border-right:none
    }
    .printList-select-active{
        color:#fff !important;
        background-color:#409EFF;
    }
    .clearfix:after{
        content:".";
        display:block;
        height:0;
        clear:left;
        visibility:hidden;
    }
 
</style>
