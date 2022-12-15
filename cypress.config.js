const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl:'http://www.webdriveruniversity.com/'

    },
    defaultCommandTimeout:8000,
    reporter:"mochawesome",

    "env" : {
      first_name:'Qaqa'
    },


  },
});
