//CommonJS
//const os = require("os");

// ESModules, since Node v12 we can use import/export syntax instead
// in order to do that:
//- we declare that our files are modules in the package.json "type":"module"
//- or make all our files have the extenson .mjs

//Node built-in operating system module
import os from "os";
import fs from "fs";
import http from "http";

//method of the os module that gives info about the total memory of the system
console.log(os.totalmem());
//method of the os module that gives info about the free memory of the system
console.log(os.freemem());

//method of the os module that gives info about the user
console.log(os.userInfo());

fs.writeFile("myTextFile.txt", "Hello World!", (err) => {
  if (err) {
    console.log("an error happened", err);
    return;
  }
  console.log("Successfully created a file!");
});

fs.readFile("myTextFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("an error happened", err);
    return;
  }
  console.log("this is the content of my file", data);
});

//create our basic server with http module and createServer method
const myServer = http.createServer((req, res) => {
  console.log(req.method);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
});

//our server to any requests made to localhost:8080
myServer.listen(8080);
