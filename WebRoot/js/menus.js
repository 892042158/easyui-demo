/**
 *    菜单思路  ：最上方事菜单对象
 * 	  然后遍历一级菜单，二级菜单
 * 		生成相应的nav
 * 
 *    操作菜单对象生成相应的导航菜单
 */
	
	
	$(function(){
			//输出菜单对象
		   generateMenus1();
		 //默认打开第一个菜单
		   $('#navigation').accordion({    
		       animate:false ,
		    });
		   
		   //生成其他的
		  /* generateTabs('测试','#');*/
		   
	});
	
	//首先生成一级菜单
function generateMenus1(){
	for(var i = 0,len= menus.length;  i<len; i++ ){
			//生成二级菜单
		 var menus2 = menus[i].menus2;
		  $('#navigation').accordion('add', {
				title: menus[i].name,  //标题
				content: generateMenus2(menus2), 
				selected: false,
				iconCls: menus[i].icon//左侧图标
		});
	}
}
//生成二级菜单  首先解决打开的顺序问题
function generateMenus2(menus2){
	//这里要生成对应的html 语言
	//var str1 ='<ul class="nav"> <li><a href="#">联系我们&nbsp;&nbsp;<span ><img src="ok.png"/></span></a></li></ul>';
	var str ='<ul class="nav"> ';
	for(var i = 0,len= menus2.length;  i<len; i++ ){
		//onclick="generateTabs(' + menus2[i].name+'+',''+menus2[i].url+')"    // '+menus2[i].url+'
		str += '<li ><a  onclick="generateTabs(\'' + menus2[i].name+'\',\''+menus2[i].url+'\')" href="javascript:;" >' + menus2[i].name+'&nbsp;&nbsp;<span ><img src="'+menus2[i].icon
		+'"/></span></a></li>';
	}
	str += '</ul>';
	return str;
}

/**
 * 现在存在的问题 就是如何点开a标签的时候 同时生成右侧tabs  并且 能够打开超级链接
 * 并且判断tabs 是否存在，如果存在打开存在的，不存在重新打开一个
 * 
 */
//生成对面的tabs 采用<iframe>  id = tabhost
function generateTabs(name,url){
	//首先判断是否存在  通过导航菜单的名称 不能相同的
	var exists = $('#tabhost').tabs('exists',name); 
//		console.log(exists);
	/*var pp = $('#tabhost').tabs('getSelected');    //第二种判断面板是否存在的方法
	var tab = $('#tabhost').tabs('getTab',pp);*/
	if(!exists){//                      如果是null 就是false  也就是说不存在 那么就打开新的模板
		$('#tabhost').tabs('add',{    
		    title:name,    
		    content:createIframe(url),    
		    closable:true    //现实选显卡的关闭按钮
		});  
	}else{
		   $('#tabhost').tabs('select',name);	
	}
	return false;//不执行a标签的href
}
//         <iframe id= "11" src="index.html"  scrolling="no" frameborder="0"></iframe>
function createIframe(url){
	return '<iframe id= "11" src="'+url+'"  scrolling="no" frameborder="0"></iframe>';
}
