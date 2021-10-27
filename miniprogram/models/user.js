
class User{
    /**
     * 
     * @param {string} nickName 
     * @param {string} avatarUrl 
     * @param {string} gender 
     * @param {string} openid 
     * @param {string} motto 
     * @param {string} password 
     * @param {string} tel 
     * @param {string} identify 
     * @param {string} permission 
     */
    constructor(
        nickName,       // 昵称  从微信获取
        avatarUrl,      // 头像  从微信获取
        gender,         // 性别  从微信获取
        openid,         // 小程序openid 
        motto,          // 座右铭
        password,       // ********
        tel,            // telephone
        identify,       // 身份 default: public、student、 admin
        permission,     // 权限 default: normal
        ){
            this._id;
            let _ = this;
            [_.nickName, _.avatarUrl, _.gender, _.openid, _.motto, _.password, _.tel, _.identify, _.permission] = arguments;
        }
}

module.exports = User;