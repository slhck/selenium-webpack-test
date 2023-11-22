const chrome = require("selenium-webdriver/chrome");

// find chromedriver in current PATH
function getChromeDriverFromPath() {
  const spawnSync = require("child_process").spawnSync;
  const result = spawnSync("which", ["chromedriver"]);
  if (result.status === 0) {
    return result.stdout.toString().trim();
  }
  return undefined;
}

let chromeDriverBinary = getChromeDriverFromPath();
let chromeDriverService;
if (chromeDriverBinary) {
  // this works without selenium manager, if there is a chromedriver in the path
  chromeDriverService = new chrome.ServiceBuilder(chromeDriverBinary).build();
} else {
  console.warn("No chromedriver found in PATH, using selenium-manager");
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
