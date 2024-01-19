// const Sequelize = require('sequelize');
// const sequelize = require('../utils/database');

// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     required:true,
//     primaryKey: true,
//   },
//   name: {
//    type:String,
//     required:true,
//   },
//   email: {
//    type:String,
//     required:true,
//     unique: true,
//   },
//   password: {
//    type:String,
//     required:true,
//   },
//   ispremiumuser: {type:Sequelize.BOOLEAN,
//     defaultValue: false
//   },
//   totalexpense: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0 
//   },
// }, {
//   timestamps: false,
// });

// module.exports = User;
const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
  name: {
   type:String,
    required:true,
  },
  email: {
   type:String,
    required:true,
    unique: true,
  },
  password: {
   type:String,
    required:true,
  },
  ispremiumuser: {
    type:Boolean,
    default: false
  },
  totalexpense: {
    type: Number,
    default: 0 
  },

})
module.exports=mongoose.model('User',userSchema)
