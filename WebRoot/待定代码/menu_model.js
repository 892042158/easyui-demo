/**
 * 菜单model
 * 	一级菜单  id,icon,name,menus2(子菜单)
 *  二级菜单  id2,url2,icon2,name2,
 */
/**
 * 父亲菜单
 */
function menus(){
	var id ="";
	var name = "菜单名称";
	var icon = "#";
	//设置 set  get
	this.setId = function() {
			this.id = id;
	};
	this.getId = function(){
		return id;
	};
	//设置 set  get
	this.setName = function() {
			this.name = name;
	};
	this.getName = function(){
		return name;
	};
	//设置 set  get
	this.setIcon = function() {
			this.icon = icon;
	};
	this.getIcon = function(){
		return icon;
	};
	//设置 set  get
	this.setMenusChild = function() {
			this.id = menusChild;
	};
	this.getMenusChild = function(){
		return menusChild;
	};
}

//菜单添加管理
