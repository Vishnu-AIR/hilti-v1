const mongoose = require('mongoose');
const db = require("../config/db");

const { Schema } = mongoose;

const walletSchema = new Schema({
    user:{type: Schema.Types.ObjectId, ref: 'users', require:true},
    action:{type:String},
    account:{type:String},
    ifsc:{type:String},
    amount:{type:Number},
    status:{type:String, default:"pending"},
    createdOn:{type: Date},
    updatedOn:{type: Date}
})

walletSchema.pre('save', function(next) {
   
    this.updatedOn = new Date();
    this.createdOn = new Date();

    // Hash the password
    
    next();
});

walletSchema.pre(['findOneAndUpdate','update','updateOne'], function(next) {


    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();
     

    next();

    // Hash the password
    
});

const WalletModel = db.model('wallet',walletSchema);

module.exports = WalletModel;