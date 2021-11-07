// **************** Admin相关 *******************//
const Admin = require("../../models/admin")
const common = require("../interface/common")

/**
 * 
 * @param {Admin} admin 
 * @param {Function} callback 
 */
function update(admin, callback){
    common.update(common.CLOUD_DATABASE_CRUD_FUNCTION, common.CLOUD_DATABASE_COLLECTION_ADMIN,
        {
            _id : admin._id,
        },
        admin,
        callback,
    )
}

/**
 * 根据_id查询admin
 * 
 * @param {string} _id  (一般情况为登录时使用的usrName)
 * @param {Function} callback 回调函数 参数为Array<@param {User}>
 */
function retrieveByID(_id, callback){
    common.retrieve(common.CLOUD_DATABASE_CRUD_FUNCTION,common.CLOUD_DATABASE_COLLECTION_ADMIN, 
        {
            _id: _id
        }, 
        callback,
    )
}


module.exports = {
    retrieveByID : retrieveByID,
    update : update,
}