const chrome = require("selenium-webdriver/chrome");

let chromeDriverBinary = undefined; // may replace later on
let chromeDriverService;
if (chromeDriverBinary) {
  chromeDriverService = new chrome.ServiceBuilder(chromeDriverBinary).build();
} else {
  chromeDriverService = new chrome.ServiceBuilder().build();
}

const opts = new chrome.Options();

const driver = chrome.Driver.createSession(opts, chromeDriverService);

(async () => {
  // load a URL
  await driver.get("https://www.google.com");

  // sleep for a second, then quit
  await driver.sleep(1000);

  await driver.quit();
})();
