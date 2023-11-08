const https = require('https');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const port = 443; 


const healthCheckURL = 'http://microservices-management-service/health'; 

// Function to send periodic health check requests
const sendHealthCheckRequest = async () => {
  try {
    const response = await axios.get(healthCheckURL);
    const healthStatus = response.data;
    // Update API Gateway's status based on the health status response
  } catch (error) {
    // Handle any errors during the health check
    console.error('Health check failed:', error);
  }
};

// Schedule the health check to run periodically (e.g., every 10 minutes)
setInterval(sendHealthCheckRequest, 10 * 60 * 1000);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes for each microservice
app.use('/customer-order', require('./routes/com'));
app.use('/customer-relationship', require('./routes/customer-relationship'));
app.use('/hr-management', require('./routes/hr-management'));
app.use('/accounting', require('./routes/accounting'));
app.use('/warehouse-management', require('./routes/warehouse-management'));


// Handle authentication and authorization here

const options = {
    key: fs.readFileSync('./SSL/private.key'),
    cert: fs.readFileSync('./SSL/certificate.crt'),
};
  
const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`);
});

