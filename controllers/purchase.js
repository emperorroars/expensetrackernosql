const Razorpay = require('razorpay')
const User = require('../models/user');
const Order = require('../models/orders');
const usercontroller=require(`./usercontroller`)
console.log(process.env.RAZORPAY_KEY_ID)
exports.purchaserpremium = async (req, res) => {
    try {
        var rzp = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })
        const amount = 250000
        console.log(process.env.RAZORPAY_KEY_ID);
        console.log(process.env.RAZORPAY_KEY_SECRET);

        rzp.orders.create({ amount, currency: "INR" }, async(err, order) => {
            if (err) {
                console.log("shitty error")
                console.log("Razorpay API error:", err.error);
                throw new Error(JSON.stringify(err))
            }
        //    await Order.create({ orderid: order.id, status: 'PENDING' }).then(() => {
        //         return res.status(201).json({ order, key_id: rzp.key_id })
        //     }
        //     )
        try {
                const newOrder = new Order({ orderid: order.id, status: 'PENDING' });
                await newOrder.save();
                return res.status(201).json({ order, key_id: rzp.key_id });
            } 
        catch(err) {
                console.log("dirty error")
                throw new Error(err)

            }
        })
    } 
    catch (err) {
        console.log(err)
        res.status(403).json({ message: 'Something went wrong', error: err })
    }
}

exports.updatetransactionstatus = async (req, res) => {
    console.log("entered into updatetransactionstatus")
    try {
        const userId=req.user.id
        const { payment_id, order_id } = req.body;
        const order = await Order.findOne({ orderid: order_id  });
        console.log("payment id length is",payment_id.length)
      /*  if(payment_id!=1)
  promise1 = order.update({ paymentid: payment_id, status: 'SUCCESSFUL' });
else
 promise1 = order.update({ paymentid: payment_id, status: 'FAILED' });*/
 orderStatus=payment_id !== '1' ? 'SUCCESSFUL' : 'FAILED'
 order.paymentid = payment_id;
 order.status = orderStatus;
 const promise1=order.save()
        const promise2 = await User.findByIdAndUpdate (userId,{$set:{ispremiumuser:true}});

        Promise.all([promise1, promise2])
            .then(() => {
                return res.status(202).json({ success: true, message: "Transaction Successful",token:usercontroller.generateAccessToken(userId,undefined,true) });
            })
            .catch((err) => {
                console.error(err);
              
                    });
            
    } catch (err) {
        console.log(err);
        res.status(403).json({ success: false, message: "Something went wrong" });
    }
};
