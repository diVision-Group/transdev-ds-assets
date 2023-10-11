const fs = require('fs');
const assetModuleFOlder = ['icons', 'brand'];
const { svgToJS } = require('./utils/svgToJS');

assetModuleFOlder.forEach(asset => {
    const options = {
        inputDir: `src/assets/${asset}`,
        outputDir: `dist/assets/${asset}`
    }

    svgToJS(options);
})