const Applicant = require("./applicant")
const MapSite = require("./mapSite");
class Need {
    /**
     * 
     * @param {string} type 
     * @param {string} time 
     * @param {string} title 
     * @param {string} description 
     * @param {string} addressName 
     * @param {MapSite} mapSite 
     * @param {string} addressDescription 
     * @param {Number} reward 
     * @param {Number} numberOfHire 
     * @param {Number} numberOfSignUp 
     * @param {string} publishTime 
     * @param {string} publisherName 
     * @param {string} publisherID 
     * @param {string} reviewerID 
     * @param {string} state 
     * @param {Array<Applicant>} application 
     */
    constructor(
        // _id,                    // 需求号
        type,                   // 类型 （勤工俭学，公益活动等）
        time,                   // 时间
        title,                  // 需求名称
        description,            // 需求描述
        addressName,            // 地点名（API获取）
        mapSite,                // {longitude, latitude} 经纬度
        addressDescription,     // 地址描述
        reward,                 // 单词报酬
        numberOfHire,           // 目标人数
        numberOfSignUp,         // 可报名人数
        publishTime,            // 发布时间
        publisherName,          // 发布者名称
        publisherID,            // 发布人ID
        reviewerID,             // 审核人ID
        state,                  // 状态
        application,            // [{userID 用户ID, signUpState 报名状态}] 报名人
        ){
            this._id;
            let _ = this;
            [_.type, _.time, _.title, _.description, _.addressName, _.mapSite, _.addressDescription, _.reward, _.numberOfHire, _.numberOfSignUp, _.publishTime, _.publisherName, _.publisherID, _.reviewerID, _.state, _.application] = arguments;
    }
}

module.exports = Need;