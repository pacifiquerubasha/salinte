const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3002; // or any port of your choice

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/microservices', { useNewUrlParser: true, useUnifiedTopology: true });


const serviceSchema = new mongoose.Schema({
  serviceName: String,
  serviceURL: String,
});

const Service = mongoose.model('Service', serviceSchema);

app.post('/register', async (req, res) => {
    const { serviceName, serviceURL } = req.body;
    
    const service = new Service({ serviceName, serviceURL });
  
    try {
      await service.save();
      res.status(201).send('Service registered successfully');
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
});


async function checkServiceHealth(serviceURL) {
    try {
      const response = await axios.get(`${serviceURL}/health`);
      if (response.status === 200 && response.data.status === 'OK') {
        return true; 
      }
    } catch (error) {
      // Handle any errors or failures
    }
    return false; 
}

app.get('/health', async (req, res) => {
    try {
      const services = await Service.find();
      
      // Perform health checks for each service
      const healthStatus = await Promise.all(
        services.map(async (service) => ({
          serviceName: service.serviceName,
          healthy: await checkServiceHealth(service.serviceURL),
        })
      ));
  
      res.json(healthStatus);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Microservices Management is running on port ${port}`);
});
  