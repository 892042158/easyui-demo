<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//	EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>public jsp</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

  </head>
  	
  <body>
  			 <script type="text/javascript" src="common/frame/jquery-2.0.3.min.js" ></script>
  			 
  			    <!-- 配置组件 -->
     <script type="text/javascript" src="common/include.js" ></script>
  			<noscript >
  <div>
  	对不起，您的浏览器不支持或者禁止了javascript的执行<br/>
  	为了得到更好的效果请您开启或者更换谷歌浏览器
  </div>
  </noscript>     	
  	
  </body>
</html>
