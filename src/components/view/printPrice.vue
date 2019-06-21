<template>
    <div class="table printPrice">
       
        <div class="container">
            <div class='printList-select printPrice-header'>
                <font :class='printListSelect?"printList-select-active":""' @click="selectList('doc')">文档收费</font>
                <font :class='!printListSelect?"printList-select-active":""' @click="selectList('photo')">照片收费</font>
            </div>
            <div class='printPrice-content'> 
                <div class='printPrice-content-scroll'>
                    <div class="list addList"  @click="add" style="cursor:pointer">
                        <div  id='cross'></div>
                        <div style="text-align:center;position:absolute;bottom:30px;width:100%;color:rgb(204,204,204)">添加新收费模版</div>
                    </div>
                    <div class="list" v-for="(list,i) in data" :key="i" >
                        <div class="list-close" @click="handleDelete(i)"></div>
                        <div v-for="(val,key,index) in list" :key="index">
                            <div v-if="key=='name'" class='list-header'>{{list.name}}</div>
                            <div v-else-if="key!='type'"  class='list-main'>
                                <span>{{key}}</span>
                                <span>{{val}}</span>
                            </div>
                        </div>
                    </div>  
                </div>

            </div>
        </div>

         <!-- 新增弹出框 -->
        <el-dialog title="添加文档收费标准模版" :visible.sync="addVisible" width="530px">
            <el-form ref="addForm" :model="addForm" label-width="120px" >
                <el-form-item label="模版名称">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
                 <el-form-item label="黑白单面打印">
                        <div class="el-form-content">
                            <el-input v-model="addForm.sex" class='unit-input1'></el-input>
                            <span class='el-form-content-unit'>元/张</span>
                        </div>
                 </el-form-item>
                 <el-form-item label="黑白双面打印">
                       <div class="el-form-content">
                            <el-input v-model="addForm.sex" class='unit-input1'></el-input>
                            <span class='el-form-content-unit'>元/张</span>
                        </div>
                 </el-form-item>
                 <el-form-item label="彩色单面打印">
                        <div class="el-form-content">
                            <el-input v-model="addForm.sex" class='unit-input1'></el-input>
                            <span class='el-form-content-unit'>元/张</span>
                        </div>
                 </el-form-item>
                 <el-form-item label="彩色双面打印">
                       <div class="el-form-content">
                            <el-input v-model="addForm.sex" class='unit-input1'></el-input>
                            <span class='el-form-content-unit'>元/张</span>
                        </div>
                 </el-form-item>
                 <el-form-item label="身份证黑白打印">
                        <div class="el-form-content">
                            <el-input v-model="addForm.sex" class='unit-input1'></el-input>
                            <span class='el-form-content-unit'>元/张</span>
                        </div>
                 </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="saveAdd">确定添加</el-button>
            </span>
        </el-dialog>
         <!-- 编辑弹出框 -->
        <el-dialog title="详情" :visible.sync="editVisible" width="530px" class='detail'>
             <el-form ref="addForm" :model="addForm" label-width="70px" >
                <el-form-item label="标签名称">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name"  disabled></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="截止时间">
                    <div class="el-form-content">
                        <el-date-picker type="date" placeholder="开始日期" v-model="addForm.date" value-format="yyyy-MM-dd" style="width:160px"  disabled></el-date-picker>
                        <span style="margin-right:10px">至</span>
                        <el-date-picker type="date" placeholder="截止日期" v-model="addForm.date" value-format="yyyy-MM-dd" style="margin-right:0;width:160px"  disabled></el-date-picker>
                    </div>
                </el-form-item>
            </el-form>

            <el-form label-width="70px">
                <el-form-item label="文档促销"  style="font-weight:600">
                    <div class="el-form-content">
                        <div class='switch-text'>
                            <span>彩色文档除外</span>
                            <el-switch v-model="form.delivery"  width='60' disabled ></el-switch>
                        </div>
                     
                    </div>
                </el-form-item>
                <div class="el-form-content">
                    <el-form-item label="免费打印">
                        <el-input v-model="addForm.sex" class='unit-input1'  disabled></el-input>
                        <span class='el-form-content-unit'>张/人</span>
                    </el-form-item>
                 
                    <el-form-item label="共接受" label-width="54px" style="margin-left:10px">
                        <el-input v-model="addForm.sex" class='unit-input2'  disabled></el-input>
                        <span class='el-form-content-unit'>名</span>
                    </el-form-item>
                </div>
            </el-form>
            <el-form  label-width="70px">
                <el-form-item label="照片促销" style="font-weight:600">
                    <div class="el-form-content">
                        <div class='switch-text'>
                            <span>证件照除外</span>
                            <el-switch v-model="form.delivery"  width='60' disabled ></el-switch>
                        </div>
                    </div>
                </el-form-item>
             
                <div class="el-form-content">
                    <el-form-item label="免费打印">
                        <el-input v-model="addForm.sex" class='unit-input1'  disabled></el-input>
                        <span class='el-form-content-unit'>张/人</span>
                    </el-form-item>
                 
                    <el-form-item label="共接受" label-width="54px" style="margin-left:10px">
                        <el-input v-model="addForm.sex" class='unit-input2'  disabled></el-input>
                        <span class='el-form-content-unit'>名</span>
                    </el-form-item>
                </div>
              


            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" >关 闭</el-button>
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
    export default {
        name: 'printprice',
        data() {
            return {
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
                printListSelect:true,
                priceList:[
                    {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'文档-测试收费标准',
                        type:'doc',
                        '黑白单面打印:':'1.0元/张',
                        '黑白双面打印:':'2.0元/张',
                        '彩印单面打印:':'3.0元/张',
                        '彩印双面打印:':'4.0元/张',
                        '身份证黑白打印:':'1.0元/张',
                    },
                     {
                        name:'文档-标准收费标准',
                        type:'doc',
                        '黑白单面打印:':'0.2元/张',
                        '黑白双面打印:':'0.4元/张',
                        '彩印单面打印:':'1.0元/张',
                        '彩印双面打印:':'1.5元/张',
                        '身份证黑白打印:':'0.2元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                     {
                        name:'照片-标准收费标准',
                        type:'photo',
                        '普通照片:':'2.0元/张',
                        '钱包照片:':'2.0元/张',
                        '1寸照:':'5.0元/张',
                        '1二寸照:':'5.0元/张',
                        '2寸照:':'5.0元/张',
                    },
                ]

                
              
            }
        },
        created() {
        },
        computed: {
            data() {
                if(this.printListSelect){
                    const newList= this.priceList.filter((d) => {
                        return d.type=='photo'
                    })
                    return newList
                }else{
                    const newList= this.priceList.filter((d) => {
                        return d.type=='doc'
                    })
                    return newList
                }
               
            }
        },
        methods: {
            
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
            handleDelete(index) {
                this.idx = index;
                // this.delVisible = true;
                    this.$confirm('确定删除所选文件吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.deleteRow(index)
                    }).catch(() => {
                    
                    });
            },
              // 确定删除
            deleteRow(index){
                this.priceList.splice(index, 1);
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
            selectList(val){
                this.printListSelect=val==='doc'?true:false;
            }
        }
    }

</script>

<style>
    .printPrice th{background: rgb(237,242,246)}
    .printPrice .cell{text-align: center}
    .printPrice .el-form-item__label{text-align:left}
    .printPrice .el-dialog{
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
    .printPrice .el-dialog__header{
        padding:15px;
        text-align: center;
        background: #EDF2F6;
    }
    .printPrice .el-dialog__close{
        display: none
    }
    /* .printPrice .el-dialog__body {
        padding:0
    } */

    .printPrice  .el-dialog__header{text-align:center}
    .printPrice  .dialog-footer{
        text-align:center;
        display: block;
        padding:0px 0 50px;
        margin-top:-20px;
    }
    .printPrice  .dialog-footer button{
        border:none;
        font-size:16px;
        border-radius:6px;
        margin:0 12px;
        width: 200px;
    }
    .printPrice  .dialog-footer button:active{
     border:none;
    }
    .printPrice  .dialog-footer button:hover{
        opacity: 0.6;
    }
    .printPrice .el-dialog  .el-form-item{margin-bottom:0px}
    .printPrice .el-dialog  .el-form{padding:20px 45px;margin:0 auto;background: rgb(242,242,242)}
    .printPrice .el-dialog  .el-form:first-child{background: none}
    /* .printPrice .el-dialog  .el-form:last-child{border-top:1px solid rgb(204,204,204)} */
    .printPrice .unit-input1 input{
        padding-right:46px;
    }
    .printPrice .unit-input2 input{
        padding-right:30px;
    }
    .printPrice .el-switch__core {
        height: 28px;
        border-radius:20px
    }
    .printPrice .el-switch.is-checked .el-switch__core::after{
        margin-left:-25px
    }
    .printPrice .el-switch__core:after{
        width:24px;height: 24px;
    }
    
</style>

<style scoped>
    .printPrice{position: relative;}
    .container{width:100%;height: 100%;box-sizing:border-box;position: relative;padding:54px 20px}
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
    .red{
        color: rgb(242,151,141);
    }
    .el-select,.el-date-editor{margin-right:10px;width:130px}
    .el-form-content{display: flex;justify-content:space-between;align-items:center;margin-bottom:25px;}
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

    /* 分界线 */
    /* .printPrice-header-btn{position:fixed;right: 0;} */
     .printPrice-header{position:fixed;margin-left:34px}
    .printList-select{

    }
    .printList-select font{
        display: inline-block;
        padding:10px 20px;
        border:1px solid #409EFF;
        margin:0 0 10px;
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
    .printPrice-content{padding-top:80px;width:100%;height: 100%;box-sizing:border-box;overflow: hidden; }
    .printPrice-content-scroll{overflow-y:scroll;padding:12px;height: 100%;width:100%;display: flex;flex-direction: row;flex-wrap:wrap;justify-content: star;align-content: baseline;}
    .list{
        width:264px;
        height: 298px;
        box-sizing:border-box;
        box-shadow: 4px 2px 16px 4px rgba(98,104,127,0.3);
       margin:0 24px 50px;
       position: relative;
        
    }
    .list-header{text-align:center;background:#EDF2F6;padding:15px;}
    .list-main{padding:20px 20px 8px;display:flex;align-items:center;justify-content:space-between;}
    .addList:hover{
          box-shadow: 4px 2px 16px 4px rgba(64,158,255,0.3);
    }
    #cross {
        background: rgb(204,204,204);
        height: 120px;
        position: absolute;
        width: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    #cross:after {
        background: rgb(204,204,204);
        content: "";
        width: 120px;
        height: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .list-close {
        background: #fff;
        border: 1px solid #409EFF;
        color: #409EFF;
        border-radius: 50%;
        line-height: 24px;
        text-align: center;
        height: 24px;
        width: 24px;
        font-size: 20px;
        padding: 1px;
        top: -10px;
        right: -10px;
        position: absolute;
        cursor: pointer;
    }
    .list-close::before{
         content:"\2716";
    }
</style>
