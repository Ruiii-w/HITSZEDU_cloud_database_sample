// **************** User相关 *******************//
const User = require("../../models/user")
const common = require("../interface/common")


/**
 * 新增user
 * 
 * @param {User} user User对象
 * @param {Function} callback 回调函数 无参数
 */
function create(user, callback){
    common.create(common.CLOUD_DATABASE_CRUD_FUNCTION, common.CLOUD_DATABASE_COLLECTION_USER,user, callback);
}


/**
 * 查询所有User
 * 
 * @param {Function} callback 回调函数 参数为Array<@param {User}>
 */
function retrieveAll(callback){
    common.retrieve(common.CLOUD_DATABASE_CRUD_FUNCTION,common.CLOUD_DATABASE_COLLECTION_USER, {}, callback);
}


/**
 * 查询num个User
 * 
 * @param {Number} num 查询数量
 * @param {*} callback 回调函数 参数为Array<@param {User}>
 */
function retrieveWithLimit(num, callback){
    common.retrieve(common.CLOUD_DATABASE_CRUD_FUNCTION,common.CLOUD_DATABASE_COLLECTION_USER, {}, callback, num);
}


/**
 * 根据_id查询用户
 * 
 * @param {string} _id user._id
 * @param {Function} callback 回调函数 参数为Array<@param {User}>
 */
function retrieveByID(_id, callback){
    common.retrieve(common.CLOUD_DATABASE_CRUD_FUNCTION,common.CLOUD_DATABASE_COLLECTION_USER, 
        {
            _id: _id
        }, 
        callback,
    )
}


/**
 * 根据open和identify查询
 * 
 * @param {string} openid user.openid
 * @param {string} identify user.identify
 * @param {Function} callback 回调函数 参数为Array<@param {User}>
 */
function retrieveByOpenidAndIdentity(openid, identify, callback){
    common.retrieve(common.CLOUD_DATABASE_CRUD_FUNCTION,common.CLOUD_DATABASE_COLLECTION_USER, 
        {
            openid : openid,
            identify : identify,
        },
        callback
    )
}


/**
 * 更新user
 * 
 * @param {User} user 
 * @param {*} callback 回调函数 无参数
 */
function update(user, callback){
    common.update(common.CLOUD_DATABASE_CRUD_FUNCTION, common.CLOUD_DATABASE_COLLECTION_USER,
        {
            _id : user._id,
        },
        user,
        callback,
    )
}


/**
 * 根据_id删除user
 * 
 * @param {string} _id 
 * @param {Function} callback 回调函数 无参数
 */
function delByID(_id, callback){
    common.del(common.CLOUD_DATABASE_CRUD_FUNCTION, common.CLOUD_DATABASE_COLLECTION_USER, 
        {
            _id : _id
        }, 
        callback
    );
}

module.exports = {
    create : create,
    retrieveAll : retrieveAll,
    retrieveWithLimit: retrieveWithLimit,
    retrieveByID : retrieveByID,
    retrieveByOpenidAndIdentity : retrieveByOpenidAndIdentity,
    update : update,
    delByID : delByID,
}

