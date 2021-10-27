class Message{
    /**
     * 
     * @param {string} type 
     * @param {string} content 
     * @param {string} senderID 
     * @param {string} time 
     * @param {Number} page 
     */
    constructor(
        type,           // 类型
        content,        // 消息内容
        senderID,       // 发送者ID
        time,           // 发送时间
        page,           // 所在页
    ){
        this._id;
        let _ = this;
        [_.type, _.content, _.senderID, _.time, _.page] = arguments;
    }
}

module.exports = Message;