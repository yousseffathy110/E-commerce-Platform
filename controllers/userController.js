const prompt = require('prompt-sync')({ sigint: true });
const User = require('../classes/User');

let adminUser = new User(1, 'Admin', 'admin@example.com', true);
let loggedInUser = null; 

function adminLogin() {
    const email = prompt("Enter admin email: ");
    const password = prompt("Enter admin password: ");

    if (email === adminUser.email && password === 'admin123') {
        loggedInUser = adminUser;
        loggedInUser.login();
        return true;
    } else {
        console.log("Invalid email or password.");
        return false;
    }
}

function logout() {
    if (loggedInUser) {
        loggedInUser.logout();
        loggedInUser = null; // Clear logged-in user
    } else {
        console.log("No user is currently logged in.");
    }
}

module.exports = { adminLogin, logout };
