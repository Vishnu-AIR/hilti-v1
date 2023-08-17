const mongoose = require('mongoose');
const db = require("../config/db");
//const UserModel = require("../models/users.model")
const { Schema } = mongoose;

const productSchema = new Schema({

    title:{
        type:String,
        require:true,

    },
    cycle:{
        type:String,
        default:"35"

    },
    daily:{
        type:Number,
        require:true,

    },
    price:{
        type:Number,
        require:true,

    },
    image: { type: String, default: [] },
    updatedOn: { type: Date },
    createdOn: { type: Date }

})

productSchema.pre('save', function(next) {
    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

const ProductModel = db.model('Product', productSchema);

module.exports = ProductModel;


