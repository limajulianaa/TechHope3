"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./authentication");
const appContainer = document.getElementById('app-container');
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');
(0, authentication_1.subscribeToAuthChanges)(user => {
    if (user) {
        console.log("User logged in:", user.email);
        if (welcomeMessage)
            welcomeMessage.textContent = `Welcome, ${user.email}!`;
        if (loginSection)
            loginSection.style.display = 'none';
        if (dashboardSection)
            dashboardSection.style.display = 'block';
    }
    else {
        console.log("User logged out.");
        if (welcomeMessage)
            welcomeMessage.textContent = 'Please log in.';
        if (loginSection)
            loginSection.style.display = 'block';
        if (dashboardSection)
            dashboardSection.style.display = 'none';
    }
});
logoutButton?.addEventListener('click', async () => {
    try {
        await (0, authentication_1.logoutUser)();
    }
    catch (error) {
        console.error("Error logging out from main app:", error);
    }
});
console.log("TechHope3 Web App Started!");
//# sourceMappingURL=index.js.map