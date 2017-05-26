/**
*公用的方法
*           ${pageContext.request.contextPath}
*/


/**
 * 获得类似于jsp的basePath
 */
function basePath(){
	var base;
		var local = window.location;
		var contextPath = local.pathname.split("/")[1];
		base=local.protocol+"//"+local.host+"/"+contextPath;
	return base;
}
/**
 * 继承
 */
