<template>
    <div class="table systemOrgan">
       
        <div class="container" ref='organList'>
            <div class='title'>设备列表</div>
            <img src="../../assets/img/terminal-01.png" alt="">   

            <!-- 树状图 -->
            
            <vo-edit :style="{'width':organListW,'height':organListH}"  ref='chart'
                :data="chartData"
                direction="l2r"
            >
            </vo-edit>
            <div id="edit-panel" class="view-state edit-container">
                <div class="item item-half">
                <div class="input-node-container">
                    <label class="selected-node-group">选择删除的机构名称</label>
                    <input type="text" id="selected-node" class="selected-node-group new-node">
                </div>
                <div>
                    <label>新增的机构名称</label>
                    <ul id="new-nodelist">
                    <li><input type="text" class="new-node" v-model='addName'></li>
                    </ul>
                </div>
                </div>
                <div id="node-type-panel" class="radio-panel item" v-show="false">
                  <input type="radio" name="node-type" id="rd-sibling" value="siblings" checked ><label for="rd-sibling">Sibling</label>
                </div>
                <div class="item">
                   <el-button type="primary"  @click="addNodes">添加</el-button>
                  <el-button type="primary"  @click="deleteNodes">删除</el-button>
                </div>
            </div>

        </div>

        <div class="container">
            <div  class='title'>机构详情</div>
            <div class="form-boxs">
                <el-form ref="form" :model="form" label-width="120px">
                    <!-- 耗材状态 -->
                    <div class='form-title'>
                        <div class='form-title-text'>
                            <font style="font-size:16px;font-weight:600">基本信息</font>
                            <font></font>
                        </div>
                        <div class='form-title-bar'>
                            <div  class='form-title-bar2'></div>
                        </div>
                    </div>

                    <el-form-item label="机构名称">
                         <el-input v-model="form.name" class='el-input'></el-input>
                    </el-form-item>

                    <el-form-item label="机构设备数量">
                        <div>500张</div>
                    </el-form-item>

                   <!-- 耗材补充更换 -->
                    <div class='form-title'>
                        <div class='form-title-text'>
                            <font style="font-size:16px;font-weight:600">收款信息</font>
                            <font></font>
                        </div>
                        <div class='form-title-bar'>
                            <div  class='form-title-bar2'></div>
                        </div>
                    </div>
                    <el-form-item label="公众号名称">
                        <el-input v-model="form.name" class='el-input'></el-input>
                    </el-form-item>

                    <el-form-item label="公众号appId">
                          <el-input v-model="form.name" class='el-input'></el-input>
                    </el-form-item>
                    
                    <el-form-item label="JS接口验证文件">
                        <!-- <el-select v-model="select_status" placeholder="运行状态" class="handle-select mr10" >
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select>
                        <el-select v-model="select_status" placeholder="运行状态" class="handle-select mr10" >
                            <el-option v-for="(item,index) in statusList" :key='index' :label="item.text" :value="item.text" ></el-option>
                        </el-select> -->
                    </el-form-item>
                    <el-form-item label="微信支付商户号">
                        <div>500张</div>
                    </el-form-item>
                     <el-form-item label="API密钥">
                        <div>500张</div>
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
import { VoEdit } from 'vue-orgchart'
    // var fs = require('fs');
   
    export default {
        name: 'basetable',
        data() {
            return {
                chartData:{},
                addName:"",
                organListW:0,
                organListH:0,
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

            }
        },
        components: { VoEdit },
        mounted(){
            this.$nextTick(
                this.mountOrgchart()
            )
            
            let _H = this.$refs.organList.offsetHeight;
            let _W = this.$refs.organList.offsetWidth;
            this.organListW=_W+'px'
            this.organListH=_H-180+'px'
            document.getElementsByClassName('orgchart')[0].style.width=_H-180+'px'
            document.getElementsByClassName('orgchart')[0].style.height=_W+'px'
        },
        created() {
            // this.getData();
            this.chartData = {
              name: '益网互联',
              className: 'top-level',
              children: [
                  { name: '川纳', className: 'middle-level' },
                  {
                      name: '印记',
                      className: 'middle-level',
                  },
                  {
                      name: '腾讯',
                  
                  }
              ]
            }
 
        },
 
        methods: {
            saveData(){
                console.log("保存数据")
            },
            

    mountOrgchart() {
      this.$children.forEach((item) => {
        item.orgchart !== undefined ? this.orgchart = item.orgchart : null
      })
    },
    // addNodes() {
    //   let chartContainer = document.getElementById('chart-container')
    //   let nodeVals = []
    //   Array.from(document.getElementById('new-nodelist').querySelectorAll('.new-node'))
    //     .forEach(item => {
    //       let validVal = item.value.trim()
    //       if (validVal) {
    //         nodeVals.push(validVal)
    //       }
    //     })
    //   let selectedNode = document.getElementById(document.getElementById('selected-node').dataset.node)

    // //    console.log(selectedNode)
    //   if (!nodeVals.length) {
    //     alert('Please input value for new node')
    //     return
    //   }
    //   let nodeType = document.querySelector('input[name="node-type"]:checked')
    //   if (!nodeType) {
    //     alert('Please select a node type')
    //     return
    //   }
    //   if (nodeType.value !== 'parent' && !document.querySelector('.orgchart')) {
    //     alert('Please creat the root node firstly when you want to build up the orgchart from the scratch')
    //     return
    //   }
    //   if (nodeType.value !== 'parent' && !selectedNode) {
    //     alert('Please select one node in orgchart')
    //     return
    //   }
    //   /* eslint-disable */
    //   if (nodeType.value === 'parent') {
    //     if (!chartContainer.children.length) {// if the original chart has been deleted
    //       this.orgchart = new OrgChart({
    //         'chartContainer': '#chart-container',
    //         'data': { 'name': nodeVals[0] },
    //         'parentNodeSymbol': 'fa-th-large',
    //         'createNode': function (node, data) {
    //           node.id = this.getId()
    //         }
    //       })
    //       this.orgchart.chart.classList.add('view-state')
    //     } else {
    //       this.orgchart.addParent(chartContainer.querySelector('.node'), { 'name': nodeVals[0], 'Id': this.getId() })
    //     }
    //   } else if (nodeType.value === 'siblings') {
    //     this.orgchart.addSiblings(selectedNode, {
    //       'siblings': nodeVals.map(item => {
    //         return { 'name': item, 'relationship': '110', 'Id': this.getId() }
    //       })
    //     })
    //   } else {
    //     let hasChild = selectedNode.parentNode.colSpan > 1
    //     if (!hasChild) {
    //       let rel = nodeVals.length > 1 ? '110' : '100'
    //       this.orgchart.addChildren(selectedNode, {
    //         'children': nodeVals.map(item => {
    //           return { 'name': item, 'relationship': rel, 'Id': this.getId() }
    //         })
    //       })
    //     } else {
    //       this.orgchart.addSiblings(closest(selectedNode, el => el.nodeName === 'TABLE').querySelector('.nodes').querySelector('.node'),
    //         { 'siblings': nodeVals.map(function (item) { return { 'name': item, 'relationship': '110', 'Id': this.getId() } })
    //         })
    //     }
    //   }
    // },
    addNodes(){
        const objs={
                    name: this.addName,
                    className: 'middle-level',
              };
        this.chartData.children.push(objs)
        console.log(this.chartData)

        let nodeVals = []
        Array.from(document.getElementById('new-nodelist').querySelectorAll('.new-node'))
        .forEach(item => {
          let validVal = item.value.trim()
          if (validVal) {
            nodeVals.push(validVal)
          }
        })
        if (!nodeVals.length) {
          alert('请输入新增机构名称')
          return
        }
        let selectedNode = document.querySelector('#chart-container .nodes tr>td>div')
        this.orgchart.addSiblings(selectedNode, {
          'siblings': nodeVals.map(item => {
            return { 'name': item, 'relationship': '110', 'Id': this.getId() }
          })
        })
    },
    deleteNodes() {
      let sNodeInput = document.getElementById('selected-node')
      let sNode = document.getElementById(sNodeInput.dataset.node)

      if (!sNode) {
        alert('Please select one node in orgchart')
        return
      } else if (sNode === document.querySelector('.orgchart').querySelector('.node')) {
        const _classList=sNode.classList;
        for(var i =0 ;i<_classList.length;i++){
            if(_classList[i]=='top-level'){
                alert('该节点不能删除')
                return;
            }
        }
        if (!window.confirm('Are you sure you want to delete the whole chart?')) {
          return
        }
      }
      this.orgchart.removeNodes(sNode)
      sNodeInput.value = ''
      sNodeInput.dataset.node = ''
    },
    exportJSON() {
      let datasourceJSON = {}
      let ChartJSON = this.orgchart.getChartJSON()
      datasourceJSON = JSON.stringify(ChartJSON, null, 2)
      if(document.getElementsByTagName('code')[0]) {
        let code = document.getElementsByTagName('code')[0]
        code.innerHTML = datasourceJSON
      }
      return datasourceJSON
    },
    getId() {
      return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001)
    }
        }
    }

</script>
<style>
    .systemOrgan th{background: rgb(237,242,246)}
    .systemOrgan .cell{text-align: center}
    .systemOrgan  .addr-select .el-form-item__content{display:flex;}
    .systemOrgan .el-form-item__label{width:105px;text-align: left;}

    #chart-container{
        top: 0;
        left:0;
    }
    /* for Chrome */
    #chart-container::-webkit-scrollbar {
        display: none;
    }
    .orgchart .top-level .title {
        margin-top:-15px;
    }
    .orgchart .node.focused,
    .orgchart .node:hover {
        background-color:#fff
    }
    .orgchart .node.focused .title,
    .orgchart .node .title:hover{
        cursor: pointer;
        /* -moz-box-shadow:0px 0px 10px rgba(64,158,255,0.6); 
        -webkit-box-shadow:0px 0px 10px rgba(64,158,255,0.6);
        box-shadow:0px 0px 10px rgba(64,158,255,1); */
        box-shadow:0px 0px 6px red;
    }
    .orgchart.l2r {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(-90deg) rotateY(180deg);
        min-width: auto;
        min-height: auto;
       }

    .orgchart.l2r .node .title{
        margin-left: 9px;
        border-radius: 6px;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
    }
    .orgchart.l2r .node, .orgchart.r2l .node {margin:0 30px}
    .orgchart>table:first-child{
      /* margin:0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin:50px */
    }

    #edit-panel{position: absolute;bottom: 0}
  
        /* .orgchart>table:first-child{position: absolute;left:50%;transform: translateX(-50%)} */
</style>

<style scoped>
    .systemOrgan{display: flex;justify-content:center;}
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
    @media (min-width: 768px) {
  .input-node-container {
    margin-top:-20px;
    margin-bottom:15px;
  }
}
.edit-container {
  border-radius: 5px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-container .item {
  flex: 1;
}
.edit-container .item-half {
  height: 24px;
  flex: 0 0 45%;
  text-align: center;
}
@media (max-width: 768px) {
  .edit-container {
    height: 140px;
    flex-direction: column;
    flex: 1;
  }
  .edit-container .item {
    flex: auto;
  }
}
.json-container {
  margin-right: 15px;
  float: right;
  border-radius: 5px;
}
.json {
  margin-top: -12.5px;
  margin-left: 10px;
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #383a42;
  background: #fff;
}


</style>
