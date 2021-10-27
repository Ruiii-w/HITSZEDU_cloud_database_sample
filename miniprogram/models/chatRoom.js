const User = require("./user");

const User = require("./user")
class ChatRoom{
    /**
     * 
     * @param {Number} currentPage 
     * @param {Number} pageMessages 
     * @param {string} lastMessageType 
     * @param {string} lastMessageContent 
     * @param {string} lastMessageSenderID 
     * @param {string} lastMessageTime 
     * @param {Array<Number>} members 
     */
    constructor(
        currentPage,            // 当前页号
        pageMessages,           // 当前页信息数
        lastMessageType,        // 最后一条消息类型
        lastMessageContent,     // 最后一条消息内容
        lastMessageSenderID,    // 最后一条消息发送者
        lastMessageTime,        // 最后一条消息发送时间
        members,                // 聊天室成员列表 (保存userID)
    ){
        this._id;
        // this.currentPage = currentPage
        // this.pageMessages = pageMessages
        // this.lastMessageType = lastMessageType
        // this.lastMessageContent = lastMessageContent
        // this.lastMessageSenderID = lastMessageSenderID
        // this.lastMessageTime = lastMessageTime
        // this.members = members
        let _ = this;
        [_.currentPage, _.lastMessageType, _.lastMessageContent, _.lastMessageSenderID, _.lastMessageTime, _.members] = arguments;
    }
}

module.exports = ChatRoom