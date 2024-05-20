const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl: 'http://localhost:3000',
  },
 

  env: {
    url_api : 'http://localhost:5000',
    user_email: 'g.panulaya@arcanys.com',
    user_password: '@TeamZero123',
    timeout: '30000'
  }
});
