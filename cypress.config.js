const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "pageLoadTimeout": 30000,
  "viewportWidth": 1366,
  "viewportHeight": 768
});
