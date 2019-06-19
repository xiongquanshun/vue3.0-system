// 时间戳
/*export  function getLocalTime (nS){ 
      var d = new Date(nS * 1000);    //根据时间戳生成的时间对象 
      var date = (d.getFullYear()) + "-" +  (d.getMonth() + 1) + "-" + (d.getDate()); 
      return date
 
}*/

export default{
    install(Vue){
       // Vue.prototype.$myName = "zhagngsan";
        Vue.prototype._parseTime=(d) =>{ //时间格式化
            const newDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' '
                            + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            return newDate;
        }
        Vue.prototype._dateToTimeStamp=(d) =>{ //日期转时间戳
            const newDate = new Date(d).getTime()/1000
            return newDate;
        }
        Vue.prototype._getLocalTime = (value) => {
           var d = new Date(value * 1000);    //根据时间戳生成的时间对象 
           var year = d.getFullYear();
           var month = d.getMonth() + 1;
           var date = d.getDate();
           var hour = d.getHours();
           var minute = d.getMinutes();
           var second = d.getSeconds();
           if(month<10){
            month='0'+month
           }if(date<10){
            date='0'+date
           }
           if(hour<10){
            hour='0'+hour
           }
           if(minute<10){
            minute='0'+minute
           }
           if(second<10){
            second='0'+second
           }
           var date = year + "-" + month + "-" + date +' '+ hour +':'+ minute; 
           return date
        },
        Vue.prototype._bmTime = (value) => {
           var d = new Date(value * 1000);    //根据时间戳生成的时间对象 
           var year = d.getFullYear();
           var month = d.getMonth() + 1;
           var date = d.getDate();
           var hour = d.getHours();
           var minute = d.getMinutes();
           var second = d.getSeconds();
           if(month<10){
            month='0'+month
           }if(date<10){
            date='0'+date
           }
           if(hour<10){
            hour='0'+hour
           }
           if(minute<10){
            minute='0'+minute
           }
           if(second<10){
            second='0'+second
           }
           var date =month + "/" + date +' '+ hour +':'+ minute; 
           return date
        },
        //公用url
        Vue.prototype._getUrl = () => {
          var url='http://activityapi.1wgy.com/index.php/home/'
          return url
        },
        Vue.prototype._getUrltop = () => {
          //116.62.106.13:8080
          var urltop='http://activityapi.1wgy.com'
          return urltop
        },
        // 手机号打*号
        Vue.prototype._getPhone = (str,frontLen,endLen) => {
           var len = str.length-frontLen-endLen;
           var xing = '';
           for (var i=0;i<len;i++) {
             xing+='*';
            }
           return str.substr(0,frontLen)+xing+str.substr(str.length-endLen);
        },
        //时间戳友好化格式化函数，如显示:刚刚、5秒前、5小时前、5天前
          Vue.prototype._timestamp = (value) => {
             var minute = 1000 * 60;
             var hour = minute * 60;
             var day = hour * 24;
             var halfamonth = day * 15;
             var month = day * 30;
             var year=month*12;
             var now = new Date().getTime();
             var diffValue = now - value*1000;
             if(diffValue < 0){return;}
             var yearC =diffValue/year;
             var monthC =diffValue/month;
             var weekC =diffValue/(7*day);
             var dayC =diffValue/day;
             var hourC =diffValue/hour;
             var minC =diffValue/minute;
             var result;
             if(yearC>=1){
               result="" + parseInt(yearC) + "年前";
             }
             else if(monthC>=1){
               result="" + parseInt(monthC) + "个月前";
             }
             else if(weekC>=1){
               result="" + parseInt(weekC) + "周前";
             }
             else if(dayC>=1){
               result=""+ parseInt(dayC) +"天前";
             }
             else if(hourC>=1){
               result=""+ parseInt(hourC) +"小时前";
             }
             else if(minC>=1){
               result=""+ parseInt(minC) +"分钟前";
             }else
             result="刚刚";
             return result;
          },
          // 判断数组是否有某个元素
          Vue.prototype._isInArray = (arr,value) => {
            for(var i = 0; i < arr.length; i++){
              if(value === arr[i]){
                return true;
              }
            }
            return false;
          }
          ,
          //返回上一级
          Vue.prototype.back=(_self)=>{
            _self.$router.go(-1)
            return false
          },
          //判断是否拥有某个class
          Vue.prototype.hasClass=(element,cls)=>{
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
    }
}
