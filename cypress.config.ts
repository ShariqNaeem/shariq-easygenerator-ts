import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    viewportWidth: 1200,
    viewportHeight: 900,
    env: {
      email: 'shariq@yopmail.com',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
