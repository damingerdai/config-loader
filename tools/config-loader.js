const loaderUtils =require('loader-utils');
const path = require("path");
const fs = require('fs');

module.exports = function(source) {
    console.log("start process code...");
    const resourcePath = this.resourcePath;
    const dirname = path.dirname(resourcePath);
    const filename = path.parse(resourcePath).name;
    const fileExtname = path.extname(resourcePath);
    if (process.env.NODE_ENV) {     
        const newFilename =  filename + '.' + process.env.NODE_ENV + fileExtname;
        const newResourcePath = path.join(dirname, newFilename);
        if (fs.existsSync(newResourcePath)) {
            const result = fs.readFileSync(newResourcePath, { encoding: 'utf8'});
            if (result) {
                return result;
            }
        }
    }
    return source;
}