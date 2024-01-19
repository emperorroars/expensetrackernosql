// const Sequelize = require('sequelize');
// const sequelize = require('../utils/database');

// //id, name , password, phone number, role

// const Forgotpassword = sequelize.define('forgotpassword', {
//     uuid: {
//         type:Sequelize.STRING ,
//         allowNull: false,
//         primaryKey: true
//     },
//     isActive: Sequelize.BOOLEAN,
//     expiresby: Sequelize.DATE,
   
// })

// module.exports = Forgotpassword;
const mongoose=require('mongoose')
const ForgotpasswordSchema=new mongoose.Schema({
  isActive: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports=mongoose.model('Forgotpassword',ForgotpasswordSchema)
