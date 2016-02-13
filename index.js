import webdriverio from 'webdriverio'
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

client.init()
  .url("http://shop.kyliecosmetics.com/products/koko-k").getText('#AddToCartText').then(x => console.log(x))
