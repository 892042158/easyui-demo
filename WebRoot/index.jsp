<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>xxx系统template</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!-- 加载公共jsp -->
<jsp:include page="include.jsp"></jsp:include>
<link rel="stylesheet"
	href="jquery-easyui-1.5.1/themes/default/easyui.css">
<link rel="stylesheet" href="jquery-easyui-1.5.1/themes/icon.css">
<!-- 导航菜单样式 -->
<style type="text/css">
* {
	margin: 0;
	padding: 0;
	font-size: 14px;
}

#navigation  a {
	color: #333;
	text-decoration: none
}

#navigation .nav li a {
	list-style: none;
	display: block;
	text-indent: 20px;
	height: 30px;
	line-height: 30px;
	width: 200px;
	background-color: #efefef;
	margin-bottom: 1px;
}

#navigation .nav li a:hover {
	background-color: #F60;
	color: #fff
}
</style>
</head>

<body class="easyui-layout">
	<div data-options="region:'north',title:'xxx系统',split:true"
		style="height:100px;"></div>

	<div data-options="region:'south',title:'版权',split:true"
		style="height:1px;"></div>

	<div
		data-options="region:'east',iconCls:'icon-help',title:'East',split:true"
		style="width:200px;"></div>
	<!-- 菜单栏 -->
	<div data-options="region:'west',title:'导航菜单',split:true"
		style="width:200px;">
		<div id="navigation" class="easyui-accordion"
			style="width:300px;height:200px;"></div>



	</div>
	<div data-options="region:'center'"  style="padding:0px;background:#eee;">
		<div id="tabhost" class="easyui-tabs"  data-options="fit:true" >   
       <div title="首页">   
                   欢迎来到XXX系统    
           <!-- 	<iframe id= "11" src="test.jsp"  scrolling="no" frameborder="0">
           				
           	</iframe>          -->  
       </div>   
</div>  
		
		</div>
	<!-- 配置easyui -->

	<script type="text/javascript"
		src="jquery-easyui-1.5.1/jquery.easyui.min.js"></script>

	<!-- 初始化菜单 -->
	<script type="text/javascript" src="js/menu_model.js"></script>
	<script type="text/javascript" src="js/menus.js"></script>

</body>
</html>
