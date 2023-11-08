const express = require('express');
const axios = require('axios');

const router = express.Router();
const serviceBaseUrl = 'http://customer-order-service-url'; 

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${serviceBaseUrl}/customer-order`);
    res.status(200).json({
        data: response.data
    })
  } catch (error) {
    res.status(500).json({
        message: "fail"
    })
  }
});



module.exports = router;
