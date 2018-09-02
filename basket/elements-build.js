const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/basket/runtime.js',
    './dist/basket/polyfills.js',
    './dist/basket/scripts.js',
    './dist/basket/main.js',
  ]
  // await fs.ensureDir('elements')
  await concat(files, 'dist/basket/bundle.js');
  // await fs.copyFile('./dist/basket/styles.css', 'elements/styles.css')
  // await fs.copy('./dist/basket/assets/', 'elements/assets/' )
})()
