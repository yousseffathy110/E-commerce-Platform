const chalk = require("chalk");

// Class for handling orders 
class Order {
  constructor(user, items, totalAmount) {
      this.id = Date.now();
      this.user = user;
      this.items = items;
      this.totalAmount = totalAmount;
      this.status = 'pending';
  }

  confirmOrder() {
      this.status = 'confirmed';
      console.log(chalk.greenBright('Order confirmed!'));
  }

  updateStatus(status) {
      this.status = status;
  }
}

module.exports = Order;
