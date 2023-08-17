const OrderModel = require('./../models/order.model');


const OrderController = {

    getAllOrder: async function(req,res,next){
        try {
            
            const userId = req.params.id;

            if(!userId){
                const allOrders  = await OrderModel.find();
                return res.json({success:true, data: allOrders, message:"here you go"})
            }

            const userOrders  = await OrderModel.find({user:userId});

            return res.json({success:true, data: userOrders, message:"here you go"})
            
            


        } catch (error) {
            res.json({success:false, message:error})
        }
    },

    

    createOrder: async function(req, res, next) {
        try {
            const { product,user, quantity } = req.body;
            
            const totalamt = product.price*quantity; 
            const newOrder = new OrderModel({user:user,  items : [{product:product , quantity:quantity}],status: "pending", totalAmount:totalamt});
            await newOrder.save();
            
            return res.json({ success: true, data: newOrder, message: "Product added to orde_request" });
                

            }

        catch(ex) {
            console.log(ex);
            return res.json({ success: false, message: ex });
        }
    },

    updateOrder:async (req, res)=>{
        try {
            const userId = req.params.id;
            const updateData = req.body;
    
            const updatedUser = await OrderModel.findOneAndUpdate(
                { _id: userId },
                updateData,
                { new: true }
            );
    
            if(!updatedUser) {
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

module.exports = OrderController;