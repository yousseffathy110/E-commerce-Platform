const chalk = require("chalk");

// Class for managing users (admin or customer) 
class User {
  constructor(id, name, email, isAdmin = false) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.isAdmin = isAdmin;
  }

  login() {
      console.log(chalk.green(`${this.name} logged in`));
  }

  logout() {
      console.log(chalk.green(`${this.name} logged out`));
  }
}

module.exports = User;
