# Selenium Webpack Bundling Test

This repo demonstrates the (current) inability to bundle Selenium with WebPack.

To test it in dev mode, unbundled:

```
yarn start
```

This works! It uses the manager in `node_modules`.

But when you build with WebPack:

```
yarn build
node dist/compiled.js
```

You get:

```
Error: Unable to obtain browser driver.
        For more information on how to install drivers see
        https://www.selenium.dev/documentation/webdriver/troubleshooting/errors/driver_location/. Error: Unable to obtain Selenium Manager at /Users/werner/Desktop/selenium-test/bin/macos/selenium-manager
    at getPath (/Users/werner/Desktop/selenium-test/dist/compiled.js:2:160875)
    at u.createSession (/Users/werner/Desktop/selenium-test/dist/compiled.js:2:156779)
    at u.createSession (/Users/werner/Desktop/selenium-test/dist/compiled.js:2:154194)
    at /Users/werner/Desktop/selenium-test/dist/compiled.js:2:434867
    at /Users/werner/Desktop/selenium-test/dist/compiled.js:2:434974
    at Object.<anonymous> (/Users/werner/Desktop/selenium-test/dist/compiled.js:2:434978)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)

Node.js v18.18.2
```

So you have to have a `chromedriver` available in the `$PATH`:

```console
$ which -a chromedriver
/Users/werner/.nvm/versions/node/v18.18.2/bin/chromedriver
```

and then search it yourself (see `index.js`), and now Selenium Manager will not be used anymore.
