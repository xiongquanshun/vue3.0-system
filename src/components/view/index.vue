<template>
    <div style="padding:15px">
        <el-row :gutter="20" class='statis-header'>
            <el-col :span="9">
                 <el-card shadow="hover">
                    <div class='statis'>
                        <div>今日统计</div>
                        <div>
                            <div class='statis-content'>
                                <img src="../../assets/img/index-01.png" alt="">
                                <font>收入<span>15</span>元</font>
                            </div>
                            <div class='statis-content'>
                                <img src="../../assets/img/index-02.png" alt="">
                                <font>照片<span>16</span>张</font>
                            </div>
                            <div class='statis-content'>
                                <img src="../../assets/img/index-03.png" alt="">
                                <font>文档<span>71</span>张</font>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="9" style="padding-right:25px">
                 <el-card shadow="hover">
                    <div class='statis'>
                        <div>本月统计</div>
                        <div>
                            <div class='statis-content'>
                                <img src="../../assets/img/index-01.png" alt="">
                                <font>收入<span>15</span>元</font>
                            </div>
                            <div class='statis-content'>
                                <img src="../../assets/img/index-02.png" alt="">
                                <font>照片<span>16</span>张</font>
                            </div>
                            <div class='statis-content'>
                                <img src="../../assets/img/index-03.png" alt="">
                                <font>文档<span>71</span>张</font>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                 <el-card shadow="hover">
                    <div class='statis target'> 
                        <div >耗材预警</div>
                        <div class='target-warn'>
                            <p>
                                <span>深圳大学风槐斋</span>
                                <span>文档纸仅剩<font>25</font>张</span>
                            </p>
                            <p>
                                <span>深圳大学风槐斋</span>
                                <span>文档纸仅剩<font>25</font>张</span>
                            </p>
                            <p>
                                <span>深圳大学风槐斋</span>
                                <span>文档纸仅剩<font>25</font>张</span>
                            </p>
                        </div>
                        <font class='hasMore'>更多</font>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="18" style="padding-right:25px">
                 <el-card shadow="hover">
                     <div style="text-align:center;margin-bottom:20px;">打印统计（月）</div>
                  <div id="myChart" :style="{width: '100%', height: '700px'}"></div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <el-card shadow="hover" class='ranking'>
                     <div style="text-align:center;padding-bottom:20px">本月照片排行</div>
                     <div class='el-row rank-row'>
                         <div>排行</div>
                         <div>设备</div>
                         <div>打印量</div>
                     </div>
                     <div v-for='(item,index) in 7' :key='index' class='el-row rank-row rank-row-list'>
                         <div :class='{"rank-row-active":index<3}'>{{index+1}}</div>
                         <div>{{rankPhoth[index].title}}</div>
                         <div>{{rankPhoth[index].num}}</div>
                     </div>

                    </el-card>
                </el-row>
                <el-row style="margin:0;">
                    <el-card shadow="hover" class='ranking' >
                     <div style="text-align:center;padding-bottom:20px">本月文档排行</div>
                      <div class='el-row rank-row'>
                         <div>排行</div>
                         <div>设备</div>
                         <div>打印量</div>
                     </div>
                     <div v-for='(item,index) in 7' :key='index' class='el-row rank-row rank-row-list'>
                         <div :class='{"rank-row-active2":index<3}'>{{index+1}}</div>
                         <div>{{rankPhoth[index].title}}</div>
                         <div>{{rankPhoth[index].num}}</div>
                     </div>
                    </el-card>
                </el-row>
               
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    // 引入柱状图组件
    require('echarts/lib/chart/bar')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        name: 'index',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                rankPhoth:[
                    {
                        id:"01",
                        title:"深圳大学",
                        num:23
                    },
                     {
                        id:"02",
                        title:"荔湾小学",
                        num:16
                    },
                     {
                        id:"03",
                        title:"秦华大学",
                        num:13
                    },
                     {
                        id:"04",
                        title:"北京大学",
                        num:10
                    },
                     {
                        id:"05",
                        title:"深圳大学",
                        num:8
                    },
                     {
                        id:"06",
                        title:"深圳大学",
                        num:7
                    },
                     {
                        id:"07",
                        title:"深圳大学",
                        num:2
                    },

                ],
                histogramChart:{
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['照片打印量','文档打印量']
                    },
                    toolbox: {
                        itemSize:0,  //去掉顶部自带的功能按钮
                        show : true,
                        feature : {
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    // xAxis : [
                    //     {
                    //     type : 'category',
                    //     data : []
                    //     }
                    // ],
                    yAxis : [
                        {
                        type : 'value',
                        //去掉默认的线
                        splitLine: {
                            show: false
                        },
                        }
                    ],
                     xAxis: {
                          type : 'category',
                        data: ['2019/01','2019/02','2019/03','2019/04','2019/05','2019/06','2019/07','2019/08','2019/09','2019/10','2019/11','2019/12']
                    },
                    series : [
                        {
                            name:'照片打印量',
                            type:'bar',
                            data: [150, 100, 250, 400, 450, 200,150,100,180,205,350,450],
                            itemStyle:{
                                normal:{
                                color:'rgb(231,156,152)'
                                }
                            },
                           
                        },
                        {
                            name:'文档打印量',
                            type:'bar',
                            data: [80, 180, 200, 320, 400, 100,200,150,300,305,250,350],
                            itemStyle:{
                                normal:{
                                color:'rgb(112,170,206)'
                                }
                            }
                        },
                       
                    ]
                    } 
            }
        
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },
        mounted(){
            this.drawLine();
        },

        methods: {
              drawLine() {
                const that=this;
                console.log(this.histogramChart)
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption(
                    that.histogramChart
                )
            },
        }
    }

</script>

<style>
    .statis-header .el-card__body{padding:0;height: 108px;box-sizing: border-box;overflow: hidden;}
</style>

<style scoped>
   
    .el-row {
        margin-bottom: 20px;
        display: flex;justify-content: center;
        font-size:18px;
    }
    .el-card{width: 100%}
    .ranking{height: 380px;}
    .ranking .el-row>div:nth-child(2){flex:1;text-align: center;}
    .rank-row{justify-content:flex-start;font-size:14px;border-bottom: 1px solid #ccc;margin: 0;padding: 4px 0}
    .rank-row-list>div{
        padding:4px 10px;
    }
    .rank-row-active{background: rgb(231, 156, 152);color: #fff;}
    .rank-row-active2{background: rgb(112,170,206);color: #fff;}
    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }
    
    .statis{display: flex;align-items:center;height: 100%;position: relative;}
    .target{align-items:initial}
    .statis>div{height: 100%;box-sizing:border-box; display:flex;
        align-items:center; word-wrap: break-word;}
    .statis-header .el-col:nth-child(1) .statis>div:first-child{background: #8DA2A8}
    .statis-header .el-col:nth-child(2) .statis>div:first-child{background: #8BA3C7}
    .statis-header .el-col:nth-child(3) .statis>div:first-child{background: #EB6015}
    .statis>div:first-child{color:#fff;width:73px;text-align:center;padding:10px;}
    .statis>div:last-child{
        padding:30px 0;
        flex:1;
        justify-content:center;
       
    }
    .statis-content{flex:1;display:flex;justify-content:center;align-items:center;border-right:1px solid #ccc;padding:0 30px;}
    .statis-content:last-child{border:none}
    .statis img{margin-right:18px;}
    .target-warn{display: block !important;font-size:14px;padding:8px !important;position: relative;flex:1;height: 82px !important;overflow: hidden;}
    .target-warn p{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .target-warn p>span:first-child{
        margin-right:10px
    }
    .hasMore{
        position: absolute;
        bottom:10px;
        right: 10px;
        font-size:14px;
        color:#EB6015;
    }
    .hasMore::after{
        content:'\0BB'
    }

</style>
