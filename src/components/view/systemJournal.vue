<template>
    <div class="table systemJournal">
       
        <div class="container">
            <div class="handle-box">
                 <el-select v-model="select_ascription" placeholder="日志类型" class="handle-select mr10" >
                    <el-option v-for="(item,index) in ascriptionList" :key='index' :label="item.name" :value="item.name"  @mousedown="select"></el-option>
                </el-select>
                <el-date-picker type="date" placeholder="开始时间" v-model="select_startDate"  ></el-date-picker>
                <el-date-picker type="date" placeholder="结束时间" v-model="select_endDate" ></el-date-picker>
                <el-button type="primary" icon="search" @click="search" style="margin-left: 10px">搜索</el-button>
            </div>

            <el-table :data="data" border class="" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column prop="ascription" label="所属机构"  class='_cell'>
                </el-table-column>
                <el-table-column prop="name" label="操作用户" >
                </el-table-column>
                 <el-table-column prop="copies" label="行为" >
                </el-table-column>
                <el-table-column prop="income" label="创建时间" >
                </el-table-column>
            </el-table>
            
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="tableData.length">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'systemJournal',
        data() {
            return {
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
        }
    }

</script>
<style>
  .systemJournal th{background: rgb(237,242,246)}
  .systemJournal .cell{text-align: center}
</style>

<style scoped>
    .container{height: 100%;box-sizing:border-box}
    .pagination{position: absolute;bottom: 30px;left:0;right: 0; }
    .handle-box {
        margin-bottom: 10px;
    }
    .handle-select {
        width: 120px;
    }
    .table{
        width: 100%;
        font-size: 14px;
    }

</style>
