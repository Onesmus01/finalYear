import orderModel from '../models/orderModel.js'

//placing orders using cod method
const placeOrder = async(req,res)=>{
    try {
        const {userId,items,amount,address} = req.body
        const orderData = {
            userId,items,amount,
            paymentMethod:"COD",
            address,
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

//placing order using a stripe methode
const placeOrderStripe = async(req,res)=>{
    
}

//placing order using a razorpay methode
const placeOrderRazorpay = async(req,res)=>{
    
}

//all Orders data for admin panel
const allOrders = async(req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success: false,msg: "internal server error"})
    }
}

//user orders for frontend
const userOrders = async(req,res)=>{
    try{
    const {userId} = req.body
    const orders = await orderModel.find({userId})
    res.json({success:true,orders})

    }catch(error){
     console.log(error)
     res.json({success: false,msg: "internal server error"})
    }
    
    
}

//update Orders status
const updateStatus = async(req,res)=>{
    try {
        const {orderId,status} = req.body
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success: true,message: 'status updated'})
    } catch (error) {
        console.log(error)
     res.json({success: false,msg: "internal server error"})
    }
    

}

export {placeOrder,placeOrderRazorpay,allOrders,userOrders,updateStatus,placeOrderStripe}