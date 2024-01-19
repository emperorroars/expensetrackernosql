const Expense = require('../models/expensemodels');
const User = require('../models/user');
// const sequelize = require('sequelize');

exports. getLeaderBoard = async (req, res) => {
    try {
      /*  const users = await User.find({
           
            //order: [['totalexpense', 'DESC']]
        });*/
const users = await User.find({}).sort({ totalexpense: -1 });
        res.status(200).json(users);
    } catch (err) {
        console.log(err); // Corrected from console.og to console.log
        res.status(500).json(err);
    }
};

/*const userAggregatedExpensees={}
console.log(expenses)
expenses.forEach((expense)=>{
    if(userAggregatedExpensees[expense.userId]){
        userAggregatedExpensees[expense.userId]=userAggregatedExpensees[expense.userId]+expense.expenseamount
    }
    else{
        userAggregatedExpensees[expense.userId]=expense.expenseamount

    }
})
var userLeaderBoardDetails=[]
users.forEach((user)=>{
    userLeaderBoardDetails.push({name:user.name,total_cost:userAggregatedExpenses[user.id||0]})

})
}
}*/
