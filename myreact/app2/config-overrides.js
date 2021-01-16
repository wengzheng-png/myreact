//antd-mobile实现按需引入
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile", 
        libraryDirectory: "es", 
        style: 'css' // change importing css to less
    })
)


