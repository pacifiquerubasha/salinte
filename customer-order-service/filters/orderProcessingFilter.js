
class OrderProcessingFilter {
    execute(data) {

      if (data) {
        //Process data
        return data;
      } else {
        throw new Error('Order processing failed');
      }
    }
  }
  
  module.exports = new OrderProcessingFilter();
  