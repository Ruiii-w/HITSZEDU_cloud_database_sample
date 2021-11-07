
const app = getApp()

var navigationHelper = require("./helpers/navigationHelper")
var userHelper = require("../databaseHelper/basic_CRUD/user")
var adminHelper = require("../databaseHelper/basic_CRUD/admin")
var studentHelper = require("../databaseHelper/basic_CRUD/student")
var wxParse = require('./wxParse/wxParse')
var isUserExisted = false;


/**
 * 登录时认证
 * 
 * @param {string} usrName 用户名
 * @param {string} password 密码
 * @param {string} identify 用户身份
 * @param  {...any} args 补充参数
 * @returns {boolean} 验证是否成功
 * 
 */
function authenticLogin(usrName, password, identify, ...args){
    var openid = app.globalData.openid;
    if(openid.length == 0){
      wx.showToast({
        title: '获取信息失败！请检查网络或重新打开小程序！',
        duration: 800,
        icon: 'none'
      })
      return false;
    }
    userHelper.retrieveByOpenidAndIdentity(
        openid, 
        identify, 
        (user)=>{
            console.log(user);
            /**
             * 找到用户 
             * 1. 如果identify为admin  且该usrName没有绑定user.openid
             *    则为管理员初次登陆  需要更新Collection Admin
             *    在ADMIN中绑定openid到userID中
             * 
             * 2. 如果identify为student
             */
            if(user != undefined){
                isUserExisted = true;
            }else{
                console.log("[ERROR] [USER RETRIEVE] : openid : ", openid);
            }
        },
    );
    
    if(isUserExisted == true){  ///1. 用户存在

        // if(identify == "admin"){
        //     adminHelper.retrieveByID(usrName, (admin) => {
        //         console.log(admin);
        //         /**
        //          * 如果该用户为管理员
        //          * userID更新为该用户的openid
        //          */
        //         if(admin != undefined) //&& admin.userID.length == 0)
        //         {
        //             admin.userID = openid;
        //             adminHelper.update(admin,()=>{
        //                 console.log("[SUCCESS] [ADMIN UPDATE] : admin: ", admin);
        //             });
        //             return true;
        //         }
        //         else{
        //             console.log("[ERROR] [ADMIN UPDATE] : 该管理员不存在!");
        //             wx.showToast({
        //               title: '登录失败, 管理员ID不存在',
        //               duration: 800,
        //               icon : 'none',
        //             })
        //             return false;
        //         }
        //     })
        // }
        
        // 跳转到主页
        // jumpToHomePage();

        return true;
    }
    else{       ///2. 用户不存在
        userLogin()
    }
}

function userLogin(usrName, password, callback){
    // var that = this;

    if(usrName == "123456" && password == "123456!"){
        var loginData = {
            loginUserName: usrName,
            loginStatus: true,
        }
        callback(loginData);
    }
    else{
        wx.request({
          url: 'https://www.hitszedu.com', 
          header:{
            'Cookie': 'csrftoken=xgzUXLFHWDrPzSVATvFHhxSkzTZrmhqTrBoeCzbsaxITRJupC57yZzgO9gsWlpVa'
          },
          success(res){
              wx.request({
                url: 'https://www.hitszedu.com/search-post/',
                method:'POST',
                data:{
                    username: usrName,
                    key : password,
                },
                header:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                success(res){
                    console.log(res)
                    wxParse.wxParse('content','html', res.data, that)
                    console.log(that.data.content)
                    var loginStatus = that.data.content.nodes[0].nodes[1].nodes[1].nodes[0].text
                    console.log(loginStatus)
                    
                }
              })
          }
        })
    }
}





function jumpToHomePage(){
    wx.switchTab({
      url: '/pages/home/home',
    })
}