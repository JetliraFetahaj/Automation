const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm463w2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "chromeWebSecurity": false,
});
