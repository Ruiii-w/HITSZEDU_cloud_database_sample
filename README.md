# 小程序云数据库基本操作实现

## 云函数层接口实现
目录：cloudfunctions\cloud_database_functions\index.js

实现：**调用当前目录下实现的数据库操作相关的云函数**
```
switch(event.func){
      case 'CRUD':
          return await CRUD.main(event, content);

      /** 拓展数据库功能 **/ 

      default:
          return {
              cloud_db_Msg : "no such clout database function",
          };
  }
```

---

## 本地接口实现

### 云函数请求接口

目录：miniprogram\databaseHelper\interface\common.js

实现：**1. 数据库云函数请求接口  2. 全局常量定义   3.  数据库操作统一接口实现**

```
var CLOUD_DATABASE_FUNCTIONS = 'cloud_database_functions'
var CLOUD_DATABASE_CRUD_FUNCTION = 'CRUD'
var CLOUD_DATABASE_OPERATION_CREATE = 'create'
var CLOUD_DATABASE_OPERATION_RETRIEVE = 'retrieve'
var CLOUD_DATABASE_OPERATION_UPDATE = 'update'
var CLOUD_DATABASE_OPERATION_DELETE = 'delete'
var CLOUD_DATABASE_COLLECTION_USER = "user"
var CLOUD_DATABASE_COLLECTION_NEED = "need"
var CLOUD_DATABASE_COLLECTION_MESSAGE = "message"
var CLOUD_DATABASE_COLLECTION_ADMIN = "admin"
var CLOUD_DATABASE_COLLECTION_CHATROOM = "chatRoom"
var CLOUD_DATABASE_COLLECTION_STUDENT = "student"

/**
 * 数据库云函数请求接口
 * 
 * @param {*} data 参数
 * @param {*} callback 
 */
function cloudDatabaseRequest(data, callback){
    wx.cloud.callFunction({
        name: CLOUD_DATABASE_FUNCTIONS,
        data: data,
        success: res=>{
            wx.hideLoading();
            callback(res);
        },
        fail: res=>{
            wx.hideLoading();
        }
    })
}

/**
 * 添加
 * 
 * @param {string} func 调用的云函数名
 * @param {string} collection 集合名称
 * @param {*} params 添加的对象
 * @param {Function} callback 回调函数 无参数
 */
function create(func, collection, params, callback){
    cloudDatabaseRequest(
        {
            func : func,
            opr: CLOUD_DATABASE_OPERATION_CREATE,
            collection: collection,
            params : params,
        },
        function(res){
            console.log(res);
            callback();
        }
    )
}

/**
 * 查询
 * 
 * @param {string} func 调用的云函数名
 * @param {string} collection 集合名称
 * @param {*} map 查询条件
 * @param {Function} callback 回调函数 参数为Array<object>
 */
function retrieve(func, collection, map, callback, ...args){
    var num;
    if(args[0]){
        num = args[0];
    }
    cloudDatabaseRequest(
        {
            func : func,
            opr : CLOUD_DATABASE_OPERATION_RETRIEVE,
            collection : collection,
            num : num,
            map : map,
        },
        function(res){
            var needs = res.result.data;
            callback(needs);
        }
    )
}

/**
 * 更新
 * 
 * @param {string} func 调用的云函数名
 * @param {string} collection 集合名称
 * @param {*} map 查询条件
 * @param {*} params 需要更新的字段集合
 * @param {Function} callback 回调函数 无参数
 */
function update(func, collection, map, params, callback){
    cloudDatabaseRequest(
        {
            func: func,
            opr : CLOUD_DATABASE_OPERATION_UPDATE,
            collection: collection,
            map: map,
            params: params,
        },
        function(res){
            console.log(res);
            callback();
        }
    )
}


/**
 * 通过_id删除对象
 * 
 * @param {string}} func 调用的云函数名
 * @param {string} collection 集合名称
 * @param {*} map 查询条件
 * @param {Function} callback 回调函数 无参数
 */
function del(func, collection, map, callback){
    cloudDatabaseRequest(
        {
            func : func,
            opr : CLOUD_DATABASE_OPERATION_DELETE,
            collection : collection,
            map: map,
        },
        function(res){
            console.log(res);
            callback();
        }
    )
}

module.exports = {

    /****************** defined const and internal interface ******************/
    CLOUD_DATABASE_CRUD_FUNCTION : CLOUD_DATABASE_CRUD_FUNCTION,
    cloudDatabaseRequest : cloudDatabaseRequest,
    CLOUD_DATABASE_OPERATION_CREATE : CLOUD_DATABASE_OPERATION_CREATE,
    CLOUD_DATABASE_OPERATION_RETRIEVE : CLOUD_DATABASE_OPERATION_RETRIEVE,
    CLOUD_DATABASE_OPERATION_UPDATE : CLOUD_DATABASE_OPERATION_UPDATE,
    CLOUD_DATABASE_OPERATION_DELETE : CLOUD_DATABASE_OPERATION_DELETE,
    CLOUD_DATABASE_COLLECTION_USER : CLOUD_DATABASE_COLLECTION_USER,
    CLOUD_DATABASE_COLLECTION_NEED : CLOUD_DATABASE_COLLECTION_NEED,
    CLOUD_DATABASE_COLLECTION_MESSAGE : CLOUD_DATABASE_COLLECTION_MESSAGE,
    CLOUD_DATABASE_COLLECTION_ADMIN : CLOUD_DATABASE_COLLECTION_ADMIN,
    CLOUD_DATABASE_COLLECTION_CHATROOM : CLOUD_DATABASE_COLLECTION_CHATROOM,
    CLOUD_DATABASE_COLLECTION_STUDENT : CLOUD_DATABASE_COLLECTION_STUDENT,

    /****************** database common interface  ******************/
    create : create,
    retrieve : retrieve,
    update : update,
    del : del,
}
```

### 前端接口

目录： miniprogram\databaseHelper\basic_CRUD

实现： 针对每一个特定对象实现基本的CRUD操作
