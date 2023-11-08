// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3001; 
const orderController = require('./controllers/orderController');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/orders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/customer-order', orderController);

// Start the microservice
app.listen(port, () => {
  console.log(`Customer Order Service is running on port ${port}`);
});
