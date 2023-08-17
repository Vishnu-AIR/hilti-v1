const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model")


class UserService{
    static async registerUser(name, email, password, phone){
        try {

            const NoU = await UserModel.find();
           
            const refNo = phone.slice(6,10)+ NoU.length;
             
            

            const createUser = new UserModel({name, email, password, phone, refcode:refNo});
            
            return await createUser.save();

        } catch (error) {
            return error
        }
    }

    static async getUserByEmail(email){
        try{
            return await UserModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }
    static async checkUser(phone){
        try {
            return await UserModel.findOne({phone});
        } catch (error) {
            throw error;
        }
    }

    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}


module.exports = UserService;