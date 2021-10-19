
/**
 * import {selfScrollTo} from '../../utils/utils'
 * 导入方式
 */

// 1.传入的number参数是滚动条要去的位置
export const selfScrollTo = (number) =>  {
    let timer=setInterval(() => {
      //设置一个步长，当前滚动条距离大于参数传入的距离就为负数
        let step = document.documentElement.scrollTop > number?-8:8;
        
        document.documentElement.scrollTop += step;
        if(Math.abs(document.documentElement.scrollTop - number) > Math.abs(step)){
            // console.log('继续执行');
            
          }else {
            // console.log('结束');
            clearInterval(timer);
          }
    
    }, 1);
    // document.body.scrollTop = number;
    // document.documentElement.scrollTop=number;
}

//2.将2021-08-05T06:12:29.276Z转化为2010-04-10 10:22:36格式
/**
 * 计算传入时间和当前时间差
 * @param date 要转换的时间 格式：2010-04-10 10:22:36
 * @return
 */
export function renderTime(date){
  let dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/,'')
}

//3.计算当前时间与传入时间的差,传入时间为2010-04-10 10:22:36格式
/**
 * 计算传入时间和当前时间差
 * @param d 要计算的时间 格式：2010-04-10 10:22:36
 * @return XXX个小时前
 */
 export function getDateDiff(d){   
  let now = new Date().getTime();
  let diffValue = now - Date.parse(d.replace(/-/g,'/').replace(/：/g,":"));
  if(diffValue < 0){     
    return "";    
  }   
  let minute = 1000 * 60;  
  let hour = minute * 60;  
  let day = hour * 24; 
  let halfamonth = day * 15; 
  let month = day * 30; 
  let yearC=diffValue/(month*12);
  let monthC =diffValue/month;   
  let weekC =diffValue/(7*day);   
  let dayC =diffValue/day;   
  let hourC =diffValue/hour;  
  let minC =diffValue/minute; 
  let result=null;  
  if(yearC>=1){
    result=parseInt(yearC) + "年前";   
  }
  else if(monthC>=1){    
    result=parseInt(monthC) + "个月前";    
  }else if(weekC>=1){
    result=parseInt(weekC) + "个星期前";    
  }else if(dayC>=1){    
    result= parseInt(dayC) +"天前";    
  }else if(hourC>=1){    
    result= parseInt(hourC) +"个小时前";   
  }else if(minC>=1){    
    result= parseInt(minC) +"分钟前";    
  }else{
    result="";    
  } 
  return result;  
} 