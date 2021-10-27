// 云函数入口文件
const cloud = require('wx-server-sdk')

// 云函数init 必须填加环境ID
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    try{
        return basicOperation(event);
    }catch(e){
        // console.log(e)
        return {
            success: false,
            ErrorMsg : e,
        }
    }
}

const retrieve_limit = 1000;
async function basicOperation(event){
    try{
        switch(event.opr){
            case "create":
                return await db.collection(event.collection).add({data : event.params});
                break;
            case "retrieve":
                let limit = event.num || retrieve_limit;  // 没有指定检索数量 最多返回1000条数据
                return await db.collection(event.collection).where(event.map).limit(limit).get();
                break;
            case "update":
                return await db.collection(event.collection).where(event.map).update({
                    data : event.params,
                });
                break;
            case "delete":
                return await db.collection(event.collection).where(event.map).remove();
                break;
            default:
                return {
                    ErrorMsg : "No event is executed for this operation."
                }
        }
    }catch(e){
        return {
            ErrorMsg : e,
        }
    }
}