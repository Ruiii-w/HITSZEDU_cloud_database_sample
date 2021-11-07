//保存所有tabpage
var tabstrs = ["home", "chat", "me"];


/**
 * @param {String} path1 
 * @param {String} path2 
 */
function isPathSame(path1, path2) {
  var path1Path = path1.split("/");
  var path1Name = path1Path[path1Path.length - 1];
  var path2Path = path2.split("/");
  var path2Name = path2Path[path2Path.length - 1];
  console.log("路径相同：", path1Path, path1Name, path2Path, path2Name);
  return path1Name === path2Name;
}

/**
 * 
 * @param {String} path 
 */
function popToPage(path) {
  let _path = path;
  var pagesStack = getCurrentPages();
  var top = pagesStack.length - 1;
  if(isPathSame(pagesStack[top].route,_path)){
    return;
  }
  else {
    wx.navigateBack({
      delta: 1,
      success: () =>{
        popToPage(_path);
      }
    });
  }
}

/**
 * Param 应该是一个 Json对象
 */
function navigateTo(path, obj) {
  const pagesStack = getCurrentPages();
  console.log("页面栈：",pagesStack, path);
  /* SingleTask模式导航 */
  var hasTask = false;
  pagesStack.forEach(page => {
    if(isPathSame(page.route, path)){
      hasTask = true;
    }
  });
  if(hasTask){
    popToPage(path);
    return;
  }
  var param= JSON.stringify(obj);
  var isTab = false;
  tabstrs.forEach(tabstr => {
    if(!isTab && path.indexOf(tabstr) != -1 && path.length == tabstr.length){
      isTab = true
      console.log("tab")
      wx.switchTab({
        url: path,
      });
    }
  });
  if(!isTab){
    wx.navigateTo({
      url: path+'?param='+param,
    });
  }
}

/**
 * 导航参数获取
 */
function getNavigationParam(options) {
  if(options.param!=undefined) return JSON.parse(options.param.trim());
  else return undefined;
}

function navigateBack(n) {
  wx.navigateBack({
    delta: n,
  });  
}

module.exports = {
  navigateTo: navigateTo,
  getNavigationParam: getNavigationParam,
  navigateBack:navigateBack
}