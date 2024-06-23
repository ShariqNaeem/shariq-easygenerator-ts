import { defineConfig } from 'cypress';
import fs = require('fs');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    viewportWidth: 1200,
    viewportHeight: 900,
    env: {
      alertTextFile: 'alert-text.txt',
      imagePath: 'cypress/fixtures/images/sign.jpg',
      taskFileName: 'task.html',
      title: 'Practice Page',
      dropdownOptionValue: 'option2',
      easyGeneratorURL: 'https://www.easygenerator.com/en/',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readFileText(filename: string): string | null {
          if (!fs.existsSync(filename)) {
            return null;
          }
          return fs.readFileSync(filename, 'utf8');
        },
      });
    },
  },
});
