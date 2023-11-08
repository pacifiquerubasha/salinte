# Microservices-Based Backend Application

This backend application is designed for a microservices-based system. It emphasizes scalability and fault tolerance while employing a pipe-and-filter architecture for efficient data processing.

## Code Folder and Content Structure

The code folder is organized into microservices, each following a controller-service-repository architecture. This code is not meant to create a working prototype but rather to serve as a blueprint for the application's construction. Below is an overview of the contents of each folder:

### accounting-service
This microservice is responsible for handling accounting tasks, such as creating invoices and processing payments.

### customer-relationship-service
This microservice manages customer data, including contact information and order history.

### hr-management-service
The HR management microservice is tasked with employee record management and payroll.

### inventory-service
The inventory service manages product inventory levels.

### order-service
This microservice handles orders, including placing orders, processing payments, and managing order shipments.

### product-service
This microservice is in charge of product data, such as product descriptions and pricing.

### shared
The "shared" folder contains shared code that is utilized by all microservices.

## Pipe-and-Filter Architecture

The application is built on a pipe-and-filter architecture for data processing. This architecture offers flexibility for combining filters and simplifies the addition of new filters without affecting existing code.

In this architecture, each filter represents a discrete function that takes input data and produces output data. These filters are linked together, with the output of one filter serving as the input for the next. A clear example of this architecture can be found in the order processing pipeline:


Each filter within the pipeline performs a specific task, such as authentication validation, order data validation, inventory checks, payment processing, and order status updates.

## Express Application

Each microservice is developed as an Express application, meaning it functions as an independent unit of code that can be deployed and scaled separately. The Express framework offers numerous features crucial for building microservices, including:

- Routing
- Middleware
- Error handling
- Deployment

Deployment will take place on Amazon Web Services (AWS), with Docker being the chosen containerization tool.

## Monitoring

Monitoring is an essential aspect of ensuring the application's performance and identifying any issues. Several monitoring tools are available for microservices, such as Prometheus and Grafana but we are still yet to decide.
