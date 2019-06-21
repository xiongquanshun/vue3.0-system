<template>
    <div class="table printLadder">
        <div class="container">
            <div class='printPrice-content'> 
                <div class='printPrice-content-scroll'>
                    <div class="list addList"  @click="add" style="cursor:pointer">
                        <div  id='cross'></div>
                        <div style="text-align:center;position:absolute;bottom:30px;width:100%;color:rgb(204,204,204)">添加新收费模版</div>
                    </div>
                    <div class="list" v-for="(item,index) in data" :key="index" >
                        <div class='list-header'>{{item.name}}</div>
                        <div  class='list-main'>
                            <div v-for="(list,index) in item.list" :key="index">
                            <div class='list-detail'>
                                <div>
                                    <span>{{list.startNum}}</span>
                                    <span>至</span>
                                    <span>{{list.endNum}}</span>
                                    <span>张：</span>
                                </div>
                                   
                                <div>
                                    <span>{{list.price}}</span>
                                    <span>元/张</span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="list-footer">
                            <div class='list-border'></div>
                            <div class="list-footer-main">
                                <span class='list-footer-edit'>修改</span>
                                <span>{{item.status==0?"未使用":"正在使用"}}</span>
                                <span :class='item.status==0?"list-footer-del":"list-footer-disDel"' @click="handleDelete(index)">删除</span>
                            </div>
                        </div> 
                        
                    </div>  
                </div>

            </div>
        </div>

         <!-- 新增弹出框 -->
        <el-dialog title="添加阶梯价格收费模版" :visible.sync="addVisible" width="530px">
            <el-form ref="addForm" :model="addForm" label-width="70px" id='addForm'>
                <el-form-item label="阶梯名称">
                    <div class="el-form-content">
                        <el-input v-model="addForm.name" ></el-input>
                    </div>
                </el-form-item>
       
                <div v-for="(item,index) in addForm.list" :key='index'>
                    <div class="el-form-content">
                        <el-input v-model="item.startNum" style="width:79px"></el-input>
                        <span style="margin:0 10px">至</span>
                        <el-input v-model="item.endNum" style="width:79px"></el-input>
                        <span style="margin:0 10px">张</span>

                        <span style='margin:0 10px'>每张</span>
                        <el-input v-model="item.price" style="width:79px"></el-input>
                        <span style='margin:0 10px'>元</span>
                        <div class="list-close" @click="delList(index)"></div>
                    </div>
                </div>
              
                <div :class='{"addList-icon":true,"addList-icon-disDel":addForm.list.length>3}' @click='addList'>
                    <div :class='{"_add-icon":true,"_add-icon-disDel":addForm.list.length>3}'></div>
                </div>

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
        name: 'printLadder',
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
                        name:'文档通用阶梯价格',
                        status:0,
                        list:[
                            {
                                startNum:"1",
                                endNum:"50",
                                price:"2.0",
                                isShow:false
                            },
                            {
                                startNum:"51",
                                endNum:"100",
                                price:"1.8",
                                isShow:false
                            },
                            {
                                startNum:"101",
                                endNum:"150",
                                price:"1.6",
                                isShow:false
                            },
                            {
                                startNum:"151",
                                endNum:"200+",
                                price:"1.4",
                                isShow:false
                            },
                        ]
                    },
                    {
                        name:'文档-测试收费标准',
                        status:1,
                        list:[
                            {
                                startNum:"1",
                                endNum:"50",
                                price:"2.0",
                                isShow:false
                            },
                            {
                                startNum:"51",
                                endNum:"100",
                                price:"1.8",
                                isShow:false
                            },
                            {
                                startNum:"101",
                                endNum:"150",
                                price:"1.6",
                                isShow:false
                            },
                            {
                                startNum:"151",
                                endNum:"200+",
                                price:"1.4",
                                isShow:false
                            },
                        ]
                    },
                     {
                        name:'文档-标准收费标准',
                        status:1,
                       list:[
                            {
                                startNum:"1",
                                endNum:"50",
                                price:"2.0",
                                isShow:false
                            },
                            {
                                startNum:"51",
                                endNum:"100",
                                price:"1.8",
                                isShow:false
                            },
                            {
                                startNum:"101",
                                endNum:"150",
                                price:"1.6",
                                isShow:false
                            },
                            {
                                startNum:"151",
                                endNum:"200+",
                                price:"1.4",
                                isShow:false
                            },
                        ]
                    },
                     {
                        name:'照片-标准收费标准',
                        status:0,
                        list:[
                            {
                                startNum:"1",
                                endNum:"50",
                                price:"2.0",
                                isShow:false
                            },
                            {
                                startNum:"51",
                                endNum:"100",
                                price:"1.8",
                                isShow:false
                            },
                            {
                                startNum:"101",
                                endNum:"150",
                                price:"1.6",
                                isShow:false
                            },
                            {
                                startNum:"151",
                                endNum:"200+",
                                price:"1.4",
                                isShow:false
                            },
                        ]
                    }
                ],
                addForm:{
                    name:'',
                    list:[
                        {
                            startNum:"",
                            endNum:"",
                            price:"",
                            isShow:false
                        },
                    ]
                  
                    // list_2:{
                    //     starNum:"",
                    //     endNum:"",
                    //     price:"",
                    //     isShow:true
                    // },
                    // list_3:{
                    //     starNum:"",
                    //     endNum:"",
                    //     price:"",
                    //     isShow:false
                    // },
                    // list_4:{
                    //     starNum:"",
                    //     endNum:"",
                    //     price:"",
                    //     isShow:true
                    // },
                }

            }
        },
        created() {
        },
        computed: {
            data() {
                // if(this.printListSelect){
                //     const newList= this.priceList.filter((d) => {
                //         return d.type=='photo'
                //     })
                //     return newList
                // }else{
                //     const newList= this.priceList.filter((d) => {
                //         return d.type=='doc'
                //     })
                //     return newList
                // }
                 return this.priceList
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
                    name:'',
                    status:0,
                    list:[
                        {
                            startNum:"",
                            endNum:"",
                            price:"",
                            isShow:false
                        },
                    ]  
                };
                this.addVisible=true
            },
            // 保存新增
            saveAdd() {
                const addForm=this.addForm;
                let flag=true
                // this.$set(this.tableData, this.idx, this.addForm);
                // console.log(this.addForm)
                // console.log(flag)
                  //过滤
                  if(addForm.name==''){
                       flag=false
                  }
                  for(var i=0;i<addForm.list.length;i++){
                    Object.keys(addForm.list[i]).forEach(function(key){
                        console.log(addForm.list[i][key]==='')
                          console.log(addForm.list[i][key],key)
                        if(addForm.list[i][key]===''){
                            flag=false
                            return 
                        }
                    });
                  }
               
            //    console.log(flag)
                if (!flag){
                    this.$confirm('模板内容不能有空', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        // flag=true
                    }).catch(() => {
                        // flag=true
                    });
                    return
                } 
                this.priceList.push(this.addForm)
                // const url='api/add',addForm=this.addForm;
                // this.writeJson(this.addForm)//执行一下;
                this.addVisible = false;
                // this.$axios.post(url,{"newAdd":addForm}).then(res=>{
                //     console.log(res)
                // })
            },
             // 保存编辑
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            selectList(val){
                this.printListSelect=val==='doc'?true:false;
            },
            addList(){
                const _obj={
                    startNum:"",
                    endNum:"",
                    price:"",
                    isShow:false
                }
                 this.addForm.list.push(_obj);
            },
            delList(index){
                console.log(index)
                this.addForm.list.splice(index, 1)
            }
        }
    }

</script>

<style>
    .printLadder th{background: rgb(237,242,246)}
    .printLadder .cell{text-align: center}
    .printLadder .el-form-item__label{text-align:left}
    .printLadder .el-dialog{
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
    .printLadder .el-dialog__header{
        padding:15px;
        text-align: center;
        background: #EDF2F6;
    }
    .printLadder .el-dialog__close{
        display: none
    }
    /* .printPrice .el-dialog__body {
        padding:0
    } */

    .printLadder  .el-dialog__header{text-align:center}
    .printLadder  .dialog-footer{
        text-align:center;
        display: block;
        padding:0px 0 50px;
        margin-top:-20px;
    }
    .printLadder  .dialog-footer button{
        border:none;
        font-size:16px;
        border-radius:6px;
        margin:0 12px;
        width: 200px;
    }
    .printLadder  .dialog-footer button:active{
     border:none;
    }
    .printLadder  .dialog-footer button:hover{
        opacity: 0.6;
    }
    .printLadder .el-dialog  .el-form-item{margin-bottom:0px}
    .printLadder .el-dialog  .el-form{padding:20px 35px;margin:0 auto;background: rgb(242,242,242)}
    .printLadder .el-dialog  .el-form:first-child{background: none}
    /* .printPrice .el-dialog  .el-form:last-child{border-top:1px solid rgb(204,204,204)} */
    .printLadder .unit-input1 input{
        padding-right:46px;
    }
    .printLadder .unit-input2 input{
        padding-right:30px;
    }
    .printLadder .el-switch__core {
        height: 28px;
        border-radius:20px
    }
    .printLadder .el-switch.is-checked .el-switch__core::after{
        margin-left:-25px
    }
    .printLadder .el-switch__core:after{
        width:24px;height: 24px;
    }
    
</style>

<style scoped>
    .printLadder{position: relative;}
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
    .printPrice-content{width:100%;height: 100%;box-sizing:border-box;overflow: hidden; }
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
    .list-main{
        padding:30px 30px 0;
    }
    .list-detail{padding:0px 0px 21px;display:flex;align-items:center;justify-content:space-between;}
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
    .list-border{height: 1px;background:rgb(204,204,204);margin:0 20px}
    .list-footer{
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        bottom: 0;
    }
    .list-footer-main{
        display: flex;
        justify-content:space-between;
        padding:20px;
        color:#999999;
     
    }
    .list-footer-edit{
        color:#409EFF;
        cursor: pointer;
    }
    .list-footer-del{
         color:#EB6015;
         cursor: pointer;
        
    }
    .list-footer-disDel{
        pointer-events:none;
        color:rgb(204,204,204) ;
        text-decoration:line-through;
    }
    .list-close{
        width: 28px;
        height: 28px;
        line-height: 22px;
        text-align: center;
        padding: 1px;
        font-size: 20px;
        background: #fff;
        color: #409EFF;
        border: 1px solid #409EFF;
        border-radius: 50%;
        /* top: -10px;
        right: -10px;
        position: absolute; */
        cursor: pointer;
        box-sizing:border-box;
    }
    .list-close::before{
         content:"\2013";
    }

    .addList-icon{
        width: 28px;
        height: 28px;
        position: relative;
        border-radius:50%;
        border:1px solid #409EFF;
        box-sizing:border-box;
        cursor: pointer;
    }
     .addList-icon-disDel{
        pointer-events:none;
        border-color:rgb(204,204,204) ;
    }
     ._add-icon {
        background:#409EFF;
        height: 18px;
        position: absolute;
        width: 1px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    ._add-icon:after {
        background: #409EFF;
        content: "";
        width: 18px;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    ._add-icon-disDel{
        pointer-events:none;
        background:rgb(204,204,204);
        color:rgb(204,204,204) ;
    }
     ._add-icon-disDel:after{
        background:rgb(204,204,204);
        color:rgb(204,204,204);
     }
</style>
