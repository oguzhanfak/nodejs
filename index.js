// console.log("first")

var http = require("http")

var server = http.createServer((req, res) => {
    console.log(req.url)

    res.end()
})

server.listen(3000, ()=> {
    console.log("nodejs server at port 3000")
})