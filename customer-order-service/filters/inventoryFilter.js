
class InventoryFilter {
    inventory = [];

    execute(data) {
      if (this.inventory.length > 0) {
        return data; 
      } else {
        throw new Error('Products not available');
      }
    }
  }
  
  module.exports = new InventoryFilter();
  