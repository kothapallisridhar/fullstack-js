const http = require("node:http"); // core/native module

const server = http.createServer(function(req, res) {
    if(req.url === "/getSomeData") {
        res.end("I am Rich");
    }
    res.end("Hello Universe!!!");
});

server.listen(7777);

