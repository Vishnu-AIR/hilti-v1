const WalletModel = require('./../models/wallet.model');
const UserModel = require('../models/users.model')


const WalletController = {

    fetchAllWalletRequest: async function(req,res,next){
        try {

            const allRequest  = await WalletModel.find();

            return res.json({success:true, data: allRequest, message:"here you go"})
            
        } catch (error) {

            return res.json({ success: false, message: ex });
        }
    },

    createWalletRequest: async function(req, res, next) {
        try {
            const { user, action, amount, account, ifsc} = req.body;
            
            
            const newOrder = new WalletModel({user:user,  action:action, amount:amount, account:account, ifsc:ifsc});
            await newOrder.save();
            
            return res.json({ success: true, data: newOrder, message: "Product added to orde_request" });
                

            }

        catch(ex) {
            
            return res.json({ success: false, message: ex });
        }
    },

    updateWallet:async (req, res)=>{
        try {
            const userId = req.params.id;
            const updateData = req.body;

            const lastWallet = await WalletModel.findById(userId);

            if(lastWallet.status == "done"){
                throw "already done";
            }
    
            const updatedWallet = await WalletModel.findOneAndUpdate(
                { _id: userId },
                updateData,
                { new: true }
            );
            if(!updatedWallet) {
                throw "wallet not found!";
            }

            const lastUser = await UserModel.find(
                updatedWallet.user
            )
            

            console.log(lastUser[0].Wallet)
            var newAmt = lastUser[0].Wallet;

            if(updatedWallet.action == "recharge"){

                newAmt += updatedWallet.amount;
            }else if(updatedWallet.action == "withdraw"){
                newAmt -= updatedWallet.amount;
            }

            const updatedUser = await UserModel.findOneAndUpdate(
                { _id: lastUser[0]._id},
                {"Wallet":newAmt},
                { new: true }
            );
    
            console.log(updatedUser)
            if(!updatedUser){
                throw "user not found!";
            }

            return res.json({ success: true, data: updatedUser, message: "User updated!" });
        }
        catch(ex) {
            console.log(ex)
            return res.json({ success: false, message: ex });
        }
    }
    
};

module.exports = WalletController;