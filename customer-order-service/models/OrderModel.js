const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  totalAmount: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
