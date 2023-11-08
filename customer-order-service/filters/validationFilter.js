
class ValidationFilter {
    execute(data) {
        if (data.items < 100) {
        return data; 
      } else {
        throw new Error('Invalid order data');
      }
    }
  }
  
  module.exports = new ValidationFilter();
  