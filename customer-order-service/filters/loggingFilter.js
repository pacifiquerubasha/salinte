
class LoggingFilter {
    execute(data) {

        console.log('Order data:', data);
      return data;
    }
  }
  
  module.exports = new LoggingFilter();
  