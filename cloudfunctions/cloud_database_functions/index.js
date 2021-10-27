const CRUD = require("./CRUD/index")
// 云函数入口函数
exports.main = async (event, context) => {
    switch(event.func){
        case 'CRUD':
            return await CRUD.main(event, content);

        /** 拓展数据库功能 **/ 
        
        default:
            return {
                cloud_db_Msg : "no such clout database function",
            };
    }
}