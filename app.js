const mongoose = require('mongoose');
const orderModel = require('./models/orderModel');
require('./models/productModel');



(async () => {

       mongoose.connect('mongodb://127.0.0.1:27017/shop').then(() =>{
        console.log('Database Connected');       
       }).catch(() => {
        console.log('Database not Connected');
       })

      const orders = await orderModel.find({}).populate('product_ids')
      console.log(orders);
    }
)
