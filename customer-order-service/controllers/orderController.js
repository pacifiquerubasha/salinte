// controllers/orderController.js
const express = require('express');
const OrderService = require('../services/orderService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  const { customerName, totalAmount } = req.body;
  try {
    const order = await OrderService.createOrder(customerName, totalAmount);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
