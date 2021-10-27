class Student{
    /**
     * 
     * @param {string} birthday 
     * @param {string} name 
     * @param {string} university 
     * @param {string} major 
     * @param {string} educationBackground 
     * @param {string} graduateTime 
     * @param {string} userID 
     */
    constructor(
        birthday,               // 生日 例：20020118
        name,                   // 名字
        university,             // 大学
        major,                  // 专业
        educationBackground,    // 教育背景
        graduateTime,           // 毕业时间
        userID,                 // userID
    ){
        this._id;
        let _ = this;
        [_.birthday, _.name, _.university, _.major, _.educationBackground, _.graduateTime, _.userID] = arguments;
    }
}

module.exports = Student;