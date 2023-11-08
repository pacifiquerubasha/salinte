// services/orderService.js
const OrderRepository = require('../repositories/orderRepository');
const AuthenticationFilter = require("../filters/authFilter");
const ValidationFilter = require("../filters/validationFilter");
const InventoryFilter = require("../filters/inventoryFilter");
const OrderProcessingFilter = require("../filters/orderProcessingFilter");
const LoggingFilter = require("../filters/loggingFilter");


class OrderService {
  async createOrder(customerName, totalAmount) {
    let data = { customerName, totalAmount };

    try {

      data = AuthenticationFilter.execute(data);
      data = ValidationFilter.execute(data);
      data = InventoryFilter.execute(data);
      data = OrderProcessingFilter.execute(data);
      data = LoggingFilter.execute(data);

        
      const order = await OrderRepository.create(data);
      return order;
    } catch (error) {
      throw error;
    }
  }

  getAllOrders() {
    return OrderRepository.findAll();
  }
}

module.exports = new OrderService();
