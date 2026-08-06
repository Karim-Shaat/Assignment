
/////////_____1
// const path = require("path");

// function getPath(fileName) {
//   const filePath = path.resolve(fileName);
//   console.log({
//     resolve : path.resolve(filePath),
//     dirname : path.dirname(filePath)
//   }); 
// }

// getPath("index5.js")



/////_____2

// const path = require("path");

// const getPath = (filePath) => path.basename(filePath);

// const name = getPath("/user/files/index5.js");

// console.log(name);



//////______3
// const path = require("path");

// const buildPath = (x) => path.join(x.dir, x.name + x.ext);

// const newPath = buildPath({
//   dir: "/folder",
//   name: "app",
//   ext: ".js"
// })
// console.log(newPath);


////______4

// const path = require("path");

// const ext = (filePath) => path.extname(filePath);

// const name = ext("/user/files/index5.js");

// console.log(name);



/////______5

// const path = require("path");

// function parse(filePath) {
//   const result = path.parse(filePath);
//   return {name : result.name , ext : result.ext}  
// }

// const name = parse("/user/files/index5.js");

// console.log(name);


////////______6

// const path = require("path");

// const check = (filePath) => path.isAbsolute(filePath);

// const name = check("/user/files/index5.js");

// console.log(name);


////////______7

// const path = require("path");

// const buildPath = (...x) => path.join(...x);

// const newPath = buildPath("src", "components", "App.js")
// console.log(newPath);

//////////______8

// const path = require("path");

// const buildPath = (x) => path.resolve(x);

// const newPath = buildPath("index5.js")
// console.log(newPath);

///////////_______9


// const path = require("path");

// const joinedPath = (path1, path2) => path.join(path1,path2);

// const newPath = joinedPath("/folder1", "folder2/file.txt" )
// console.log(newPath);


//////____10


// const fs = require("fs");

// const deleted = (path) =>{
//   fs.unlink(path,(err)=>{
//     if (err) {
//       console.log(err.message);
//       return
//     }
//     console.log(`${path} is deleted`);
//   })
// }

// deleted("/route/index3.js")



/////_____11

// const fs = require("fs");

// const createFolder = (folderPath) => {
//   fs.mkdirSync(folderPath);
//   console.log("Success");
// };

// createFolder("./hhhh");

///////____12

// const EventEmitter = require("events");
// const events = new EventEmitter();

// events.on("start",()=>{
//     console.log("welcome event target");
// })

// events.emit("start");


////_______13

// const EventEmitter = require("events");
// const events = new EventEmitter();

// events.on("login",(userName)=>{
//     console.log(`user logged in: ${userName}`);
// })

// events.emit("login","ahmed");


////_____14

// const fs = require("fs");

// const data = fs.readFileSync("./part 2.txt" , "utf-8")
// console.log(data);

/////____15
// const fs = require("fs");
// const data = "Async save";
// fs.writeFile("./text.txt", data, (err)=>{
//     if(err) console.log(err.message);
// })


///////_____16
// const fs = require('fs');
// const exists = fs.existsSync('./notes.txt');
// console.log(exists);

/////____17

// const os = require("os");

// function getSystemInfo() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch()
//   };
// }

// console.log(getSystemInfo());


/////_____18
// import fs from "fs";
// const readStream = fs.createReadStream("./text.txt","utf8")

// readStream.on("data",(chunk)=>{
//     console.log(chunk);
// })


////_____19

// import fs from "fs";
// const readStream = fs.createReadStream("./text.txt","utf8")
// const writeStream = fs.createWriteStream("./text2.txt")
// readStream.pipe(writeStream)


////_______20

// import zlib from "zlib";
// import fs from "fs";

// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream("./text.txt","utf8")
// const writeStream = fs.createWriteStream("./text2.txt.gz")

// readStream.pipe(gzip).pipe(writeStream)



//-------------------------------------------------------------------------------------------------
//=================================================================================================

//___part 2

//____1

// import fs from "fs";
// import http from "http";

// http.createServer((req ,res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url == "/user" && method == "POST") {
//         let data = ""
//         req.on("data",(chunks) => {
//             data += chunks;
//         })
//         req.on("end",() => {
//             data = JSON.parse(data)
//             fs.readFile("./users.json","utf-8",(err ,users) => {
//                 if(err){
//                     res.write(err.message)
//                     res.end()
//                     return
//                 }
//                 users = JSON.parse(users);
//                 const isExist = users.find(user => user.email === data.email)
//                 if (isExist) {
//                     res.write("Email already exists")
//                     res.end()
//                     return
//                 }else {
//                     users.push(data)
//                     fs.writeFile("./users.json",JSON.stringify(users,null,2) ,(err) => {
//                         if (err) {
//                             res.write(err.message)
//                             res.end()
//                             return
//                         }
//                         res.write("user add successfully")
//                         res.end()
//                     })
//                 }
//             })
//         })
//     }else{
//         res.writeHead(404);
//         res.write("not found")
//     }
// }).listen(3000,()=>{
//     console.log("running on port 3000");  
// })

//___________2



// import fs from "fs";
// import http from "http";

// http.createServer((req ,res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url.startsWith("/user/") && method == "PATCH") {
//         let data = ""
//         req.on("data",(chunks) => {
//             data += chunks;
//         })
//         req.on("end",() => {
//             data = JSON.parse(data)
//             fs.readFile("./users.json","utf-8",(err ,users) => {
//                 if(err){
//                     res.write(err.message)
//                     res.end()
//                     return
//                 }
//                 users = JSON.parse(users);
//                 const id = Number(url.split("/")[2])
//                 const isExist = users.find(user => user.id === id)
//                 if (isExist) {
//                     if (data.name) isExist.name = data.name;
//                     if (data.age) isExist.age = data.age;
//                     if (data.email) isExist.email = data.email;
//                     fs.writeFile("./users.json",JSON.stringify(users,null,2) ,(err) => {
//                         if (err) {
//                             res.write(err.message)
//                             res.end()
//                             return
//                         }
//                         res.write("modify is successfully")
//                         res.end()
//                     })  
//                 }else {
//                     res.write("id is not found")
//                     res.end()
//                     return
//                 }
//             })
//         })
//     }else{
//         res.writeHead(404);
//         res.write("not found")
//     }
// }).listen(3000,()=>{
//     console.log("running on port 3000");  
// })

//____3

// import fs from "fs";
// import http from "http";

// http.createServer((req ,res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url.startsWith("/user/") && method == "DELETE") {
//         fs.readFile("./users.json","utf-8",(err ,users) => {
//                 if(err){
//                     res.write(err.message)
//                     res.end()
//                     return
//                 }
//                 users = JSON.parse(users);
//                 const id = Number(url.split("/")[2])
//                 const isExist = users.find(user => user.id === id)
//                 if (isExist) {
//                     const newUsers = users.filter(user => user.id != id)
//                     fs.writeFile("./users.json",JSON.stringify(newUsers,null,2) ,(err) => {
//                         if (err) {
//                             res.write(err.message)
//                             res.end()
//                             return
//                         }
//                         res.write("deleted is successfully")
//                         res.end()
//                     })  
//                 }else {
//                     res.write("id is not found")
//                     res.end()
//                     return
//                 }
//             })
//     }else{
//         res.writeHead(404);
//         res.write("not found")
//     }
// }).listen(3000,()=>{
//     console.log("running on port 3000");  
// })


//______4


// import fs from "fs";
// import http from "http";

// http.createServer((req ,res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url == "/user" && method == "GET") {
//         fs.readFile("./users.json","utf-8",(err ,users) => {
//                 if(err){
//                     res.write(err.message)
//                     res.end()
//                     return
//                 }
//                 users = JSON.parse(users);
//                 res.write(JSON.stringify(users))
//                 res.end()
//             })
//     }else{
//         res.writeHead(404);
//         res.write("not found")
//     }
// }).listen(3000,()=>{
//     console.log("running on port 3000");  
// })

//________5


// import fs from "fs";
// import http from "http";

// http.createServer((req ,res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url.startsWith("/user/") && method == "GET") {
//         const id = Number(url.split("/")[2])
//         fs.readFile("./users.json","utf-8",(err ,users) => {
//                 if(err){
//                     res.write(err.message)
//                     res.end()
//                     return
//                 }
//                 users = JSON.parse(users);
//                 const isExist = users.find(user => user.id === id)
//                 if (isExist) {
//                     res.write(JSON.stringify(isExist))
//                     res.end()
//                 }else{
//                     res.write("user not found")
//                     res.end()
//                 }
                
//             })
//     }else{
//         res.writeHead(404);
//         res.write("not found")
//     }
// }).listen(3000,()=>{
//     console.log("running on port 3000");  
// })