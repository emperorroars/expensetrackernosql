// const Sequelize=require('sequelize')
// const sequelize=require('../utils/database')
// const Expenseuser=sequelize.define('expenseuser',{
//     id:{
//         type:Number,
//         autoIncrement:true,
//        required:true,
//        primaryKey:true 

//     },
//    expenseamount:{
//         type:Number,
//         required:true,
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     category:{
//         type:String,
//         required:true
//     }
    
// },
// {
//     timestamps:false
//  } )
//  module.exports=Expenseuser
const mongoose=require('mongoose')
const ExpenseuserSchema=new mongoose.Schema({

   expenseamount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
      userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }

})
module.exports=mongoose.model("Expensuser",ExpenseuserSchema)