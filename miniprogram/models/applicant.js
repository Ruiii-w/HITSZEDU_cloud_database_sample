class Applicant{
    /**
     * 
     * @param {string} userID 
     * @param {string} signUpState 
     */
    constructor(userID, signUpState){
        this.userID = userID
        this.signUpState = signUpState
    }
}

module.exports = Applicant;