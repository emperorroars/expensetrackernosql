// const Sequelize= require('sequelize')
// const sequelize=require('../utils/database')

// const Order= sequelize.define('order',{
//     id:{type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//        primaryKey:true 

//     },
// paymentid:String,
// orderid:String,
// status:String
// })
// module.exports=Order

const mongoose=require('mongoose')
const OrderSchema=new mongoose.Schema({
    paymentid:String,
orderid:String,
status:String,
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}

})
module.exports=mongoose.model('Order',OrderSchema)