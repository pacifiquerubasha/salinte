// repositories/orderRepository.js
const Order = require('../models/OrderModel');

class OrderRepository {
  create(orderData) {
    const order = new Order(orderData);
    return order.save();
  }

  findAll() {
    return Order.find();
  }
}

module.exports = new OrderRepository();
