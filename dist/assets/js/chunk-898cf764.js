(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-898cf764"],{"83f3":function(e,t,a){},"8e3d":function(e,t,a){},d9a5:function(e,t,a){"use strict";var l=a("83f3"),i=a.n(l);i.a},e239:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table vipMsg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box",staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{"margin-right":"10px"}},[e._v("注册时间")]),a("el-date-picker",{attrs:{type:"date",placeholder:"年-月-日"},model:{value:e.select_startDate,callback:function(t){e.select_startDate=t},expression:"select_startDate"}}),a("el-date-picker",{attrs:{type:"date",placeholder:"年-月-日"},model:{value:e.select_endDate,callback:function(t){e.select_endDate=t},expression:"select_endDate"}}),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"省级地区"},model:{value:e.select_type,callback:function(t){e.select_type=t},expression:"select_type"}},e._l(e.typeList,function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name},on:{mousedown:e.select}})}),1),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"市级地区"},model:{value:e.select_type,callback:function(t){e.select_type=t},expression:"select_type"}},e._l(e.typeList,function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name},on:{mousedown:e.select}})}),1),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"性别"},model:{value:e.select_status,callback:function(t){e.select_status=t},expression:"select_status"}},e._l(e.sexList,function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name},on:{mousedown:e.select}})}),1),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"用户ID"},model:{value:e.select_ascription,callback:function(t){e.select_ascription=t},expression:"select_ascription"}},e._l(e.ascriptionList,function(t,l){return a("el-option",{key:l,attrs:{label:t.name,value:t.name},on:{mousedown:e.select}})}),1),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"请输入终端名称"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),a("el-table",{ref:"multipleTable",attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{staticClass:"_cell",attrs:{prop:"name",label:"用户ID",width:"120"}}),a("el-table-column",{attrs:{prop:"ascription",label:"昵称"}}),a("el-table-column",{attrs:{prop:"copies",label:"电话号码"}}),a("el-table-column",{attrs:{prop:"income",label:"性别"}}),a("el-table-column",{attrs:{prop:"income",label:"城市"}}),a("el-table-column",{attrs:{prop:"income",label:"注册ip"}}),a("el-table-column",{attrs:{prop:"income",label:"最后登录"}}),a("el-table-column",{attrs:{prop:"income",label:"文档打印次数  "}}),a("el-table-column",{attrs:{prop:"income",label:" 文档打印消费  "}}),a("el-table-column",{attrs:{prop:"income",label:" 照片打印次数  "}}),a("el-table-column",{attrs:{prop:"income",label:" 照片打印消费  "}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticStyle:{margin:"20px 0 0"}},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")])],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.tableData.length},on:{"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"添加新设备",visible:e.addVisible,width:"530px"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"打印机型号"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)]),a("el-form-item",{attrs:{label:"色彩模式"}},[a("div",{staticClass:"el-form-content"},[a("el-select",{staticStyle:{width:"100%",margin:"0"},attrs:{placeholder:"运行状态"},model:{value:e.select_status,callback:function(t){e.select_status=t},expression:"select_status"}},e._l(e.statusList,function(e,t){return a("el-option",{key:t,attrs:{label:e.text,value:e.text}})}),1)],1)]),a("el-form-item",{attrs:{label:"纸盒容量"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{staticClass:"unit-input1",model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}}),a("span",{staticClass:"el-form-content-unit"},[e._v("张")])],1)]),a("el-form-item",{attrs:{label:"硒鼓容量"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{staticClass:"unit-input1",model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}}),a("span",{staticClass:"el-form-content-unit"},[e._v("页")])],1)]),a("el-form-item",{attrs:{label:"设备来源"}},[a("div",{staticClass:"el-form-content"},[a("el-select",{staticStyle:{width:"100%",margin:"0"},attrs:{placeholder:"运行状态"},model:{value:e.select_status,callback:function(t){e.select_status=t},expression:"select_status"}},e._l(e.statusList,function(e,t){return a("el-option",{key:t,attrs:{label:e.text,value:e.text}})}),1)],1)]),a("el-form-item",{attrs:{label:"供应商"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)]),a("el-form-item",{attrs:{label:"联系人"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)]),a("el-form-item",{attrs:{label:"联系方式 "}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveAdd}},[e._v("确定添加")])],1)],1),a("el-dialog",{staticClass:"detail",attrs:{title:"详情",visible:e.editVisible,width:"530px"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"打印机型号"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)]),a("el-form-item",{attrs:{label:"色彩模式"}},[a("div",{staticClass:"el-form-content"},[a("el-select",{staticStyle:{width:"100%",margin:"0"},attrs:{placeholder:"运行状态"},model:{value:e.select_status,callback:function(t){e.select_status=t},expression:"select_status"}},e._l(e.statusList,function(e,t){return a("el-option",{key:t,attrs:{label:e.text,value:e.text}})}),1)],1)]),a("el-form-item",{attrs:{label:"纸盒容量"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{staticClass:"unit-input1",model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}}),a("span",{staticClass:"el-form-content-unit"},[e._v("张")])],1)]),a("el-form-item",{attrs:{label:"硒鼓容量"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{staticClass:"unit-input1",model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}}),a("span",{staticClass:"el-form-content-unit"},[e._v("页")])],1)]),a("el-form-item",{attrs:{label:"设备来源"}},[a("div",{staticClass:"el-form-content"},[a("el-select",{staticStyle:{width:"100%",margin:"0"},attrs:{placeholder:"运行状态"},model:{value:e.select_status,callback:function(t){e.select_status=t},expression:"select_status"}},e._l(e.statusList,function(e,t){return a("el-option",{key:t,attrs:{label:e.text,value:e.text}})}),1)],1)]),a("el-form-item",{attrs:{label:"供应商"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)]),a("el-form-item",{attrs:{label:"联系人"}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)]),a("el-form-item",{attrs:{label:"联系方式 "}},[a("div",{staticClass:"el-form-content"},[a("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editVisible=!0}}},[e._v("确定编辑")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},i=[],s=(a("d4d5"),a("7364"),{name:"vipMsg",data:function(){return{printListSelect:!0,sexList:[{id:"00",name:"性别"},{id:"01",name:"男"},{id:"02",name:"女"}],ascriptionList:[{id:"00",name:"所属机构"},{id:"01",name:"益网互联公司"},{id:"02",name:"川纳传媒公司"},{id:"03",name:"印记"}],tableData:[{name:"蘇州大學風奎",ascription:"川纳传媒公司",copies:10,income:40,date:"2019/03/23"},{name:"清华大学",ascription:"川纳传媒公司",copies:30,income:20,date:"2019/03/23"},{name:"青海大学",ascription:"印记",copies:50,income:45,date:"2019/03/23"},{name:"北京大学",ascription:"川纳传媒公司",copies:1,income:30,date:"2019/05/07"},{name:"暨南大学",ascription:"川纳传媒公司",copies:8,income:14,date:"2019/05/20"},{name:"华南理工",ascription:"印记",copies:7,income:28,date:"2019/04/23"},{name:"剑桥大学",ascription:"印记",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"印记",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"印记",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/23"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/21"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/20"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/20"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/20"},{name:"牛津大学",ascription:"益网互联公司",copies:10,income:40,date:"2019/05/20"}],pagesize:10,cur_page:1,multipleSelection:[],select_word:"",select_ascription:"",select_startDate:"",select_endDate:"",del_list:[],is_search:!1,addVisible:!1,editVisible:!1,delVisible:!1,addForm:{},form:{name:"",ascription:"",copies:0,income:0},idx:-1}},created:function(){},computed:{data:function(){var e=this;this.select_ascription="所属机构"==this.select_ascription?"":this.select_ascription;var t=this.cur_page,a=this.pagesize,l=this.select_ascription,i=this.select_startDate,s=this.select_endDate,n=this.select_word;i=""==i||null==i?"":this._parseTime(new Date(i)),s=""==s||null==s?"":this._parseTime(new Date(s));var o=this._dateToTimeStamp(i),c=this._dateToTimeStamp(s),r=this.tableData.filter(function(t){for(var a=!1,r=0;r<e.del_list.length;r++)if(t.name===e.del_list[r].name){a=!0;break}if(!a){if(""==l&&""==i&&""==s&&(t.name.indexOf(n)>-1||t.ascription.indexOf(n)>-1))return t;if(""==l&&(t.name.indexOf(n)>-1||t.ascription.indexOf(n)>-1))if(isNaN(o)){if(isNaN(c))return t;if(e._dateToTimeStamp(t.date)<=c)return t}else if(e._dateToTimeStamp(t.date)>=o){if(isNaN(c))return t;if(e._dateToTimeStamp(t.date)<=c)return t}if(t.ascription.indexOf(l)>-1&&(t.name.indexOf(n)>-1||t.ascription.indexOf(n)>-1))if(isNaN(o)){if(isNaN(c))return t;if(e._dateToTimeStamp(t.date)<=c)return t}else if(e._dateToTimeStamp(t.date)>=o){if(isNaN(c))return t;if(e._dateToTimeStamp(t.date)<=c)return t}}});return r.slice((t-1)*a,t*a)}},methods:{selectList:function(e){this.printListSelect="doc"===e},select:function(){console.log(1231),console.log(this)},handleCurrentChange:function(e){this.cur_page=Number(e)},getData:function(){var e=this;this.$axios.get(this.url).then(function(t){console.log(t),e.tableData=t.data.data.list})},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleSelectionChange:function(e){this.multipleSelection=e},handleEdit:function(e,t){this.idx=e;var a=this.tableData[e];this.form={name:a.name,date:a.date,sex:a.sex,IDcard:a.IDcard,roomNumber:a.roomNumber,address:a.address,iphone:a.iphone},this.editVisible=!0},handleDelete:function(e,t){var a=this;this.idx=e,this.$confirm("确定删除所选文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.deleteRow()}).catch(function(){})},delAll:function(){var e=this,t=this.multipleSelection.length,a="";this.$confirm("确定删除所选文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.del_list=e.del_list.concat(e.multipleSelection);for(var l=0;l<t;l++)a+=e.multipleSelection[l].name+" ";e.multipleSelection=[],e.$message({message:"删除了"+a,type:"success",center:!0})}).catch(function(){})},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1},add:function(){this.addForm={name:"",date:"",address:"",IDcard:"",roomNumber:"",sex:"",iphone:""},this.addVisible=!0},saveAdd:function(){console.log(this.addForm);var e="api/add",t=this.addForm;this.addVisible=!1,this.$axios.post(e,{newAdd:t}).then(function(e){console.log(e)})},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 ".concat(this.idx+1," 行成功"))}}}),n=s,o=(a("ffe3"),a("d9a5"),a("17cc")),c=Object(o["a"])(n,l,i,!1,null,"5c4a9e56",null);t["default"]=c.exports},ffe3:function(e,t,a){"use strict";var l=a("8e3d"),i=a.n(l);i.a}}]);