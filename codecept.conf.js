const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e2e/outputs',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:3030',
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'restaurant-apps-testing',
};
