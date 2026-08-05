import http from "http";

http.createServer((req, res)=>{
    const url = req.url
    const method =req.method

    if (url == "/users") {
        if (method == "POST") {
            let data ="";
            req.on("data", (chunks)=>{
                data += chunks
            })
            req.on("end", ()=>{
                data = JSON.parse(data) 
                res.write(JSON.stringify(data))
                res.end()
            }) 
        }else{
            res.writeHead(404)
            res.write("not found")
        }
    } else {
        res.writeHead(404)
        res.write("not found")
    }
}).listen(3000,()=>{
    console.log("running on port 3000");  
})