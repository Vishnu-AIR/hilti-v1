
const db = require('../config/db')
const { Schema} = require('mongoose');

const orderItemSchema = new Schema({
    product: { type: Map, require:true},
    quantity: { type: Number, default: 1 }
});

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', require:true},
    items: { type: [orderItemSchema], default: [] },
    status:{type:String, default:"cart"},
    totalAmount:{type:Number, default:0},
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

orderSchema.pre('save', function(next) {
    

    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

orderSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function(next) {
    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
});

const CartModel = db.model('orders', orderSchema);

module.exports = CartModel;