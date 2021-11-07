// **************** Student相关 *******************//
const Student = require("../../models/student")
const common = require("../interface/common")

/**
 * 
 * @param {Student} student 
 * @param {Function} callback 
 */
function update(student, callback){
    common.update(common.CLOUD_DATABASE_CRUD_FUNCTION, common.CLOUD_DATABASE_COLLECTION_STUDENT,
        {
            _id : student._id,
        },
        student,
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
    common.retrieve(common.CLOUD_DATABASE_CRUD_FUNCTION,common.CLOUD_DATABASE_COLLECTION_STUDENT, 
        {
            _id: _id
        }, 
        callback,
    )
}

/**
 * 
 * @param {*} map 查询条件
 * @param {Function} callback 回调函数 参数为Array<object>？
 */
function retrieve(map, callback){
    common.retrieve(
        common.CLOUD_DATABASE_CRUD_FUNCTION,
        common.CLOUD_DATABASE_COLLECTION_STUDENT, 
        map, 
        callback,
    )
}

module.exports = {
    retrieveByID : retrieveByID,
    update : update,
}