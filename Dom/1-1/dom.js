function showMes(){
  alert('DOM 2级事件 ');
};
var btn2 = document.getElementById('btn2');
btn2.onclick=function(){
  alert('这是通过DOM0级添加的事件！');
};
// btn2.onclick=null;

//DOM 2级
// addEventListener();  removeEventListener();
// 接受三个参数：要处理的时间名称，作为时间初六程序的函数&布尔值
var btn3=document.getElementById('btn3');
  btn3.addEventListener('click',showMes,false);
  // btn3.removeEventListener('click',showMes,false);


// IE事件处理程序
// attachEvent()添加事件
// detachEvent()删除事件
// 接受相同的两个参数：事件处理程序的名称和事件处理函数
// btn3.attachEvent('onclick',showMes);
// btn3.detachEvent('onclick',showMes);