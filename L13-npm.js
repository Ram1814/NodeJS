// npm - global command, comes with node
// npm -- version

// local dependency - use is only in this perticular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everthing default)

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems);

//git init -b main
// git add .
// git commit -m "mess"
// git remote add origin 'url'
// git remote -v(optional)
// git push origin main

//// npm install to redownload the dependencies

// Nodemon package is used to watch our files and automatically restart the app for us.
//// npm i nodemon -D
// ? -D or --save-dev to install the dependency as the dev dependency

//npm uninstall "packageName", to uninstall the dependencies

// npx "toolName" "folderName" (Package runner) //? Alternative to install packages globally