import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './test',
  
  testMatch: ["test/5TestCasesHw.test.ts"],
  
  use: {
    headless : false
  },

  reporter: [['line'],['allure-playwright', {
    detail: true,
    outputFolder: 'my-allure-results',
    suiteTitle: false
  }]],

};

export default config;
