//DOM 事件浏览器兼容

var eventUtil={
	//添加句柄
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}eles if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}eles{
			element.['on'+type]=handler;
		}
	};

	//删除句柄
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}eles if(Element.detachEvent){
			element.detachEvent('on'+type,handler);
		}eles{
			element.['on'+type]=null;
		}
	};
}