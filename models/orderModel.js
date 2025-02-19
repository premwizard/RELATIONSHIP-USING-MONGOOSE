const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    amount: String,
    customer_id: mongoose.SchemaTypes.ObjectId,
    product_ids:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Product'
        }
    ]
})


const orderModel =  mongoose.model('Order', orderSchema);

module.exports = orderModel;