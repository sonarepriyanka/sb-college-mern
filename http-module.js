var http = require("http")
//module not found -> npm i -g module-name

http.createServer((req, res) => {
res.writeHead(200, {'Content-Type' : 'text/html'});
res.write("this is line 1….");
console.log(req.url);

if(req.url == "/") {
    res.write("Home changed req hit</br>")
} else if(req.url == "/teacher") {
    res.write("Teacher req hit</br>")
} else if(req.url == "/student") {
res.write("Student req hit</br>")
} else {
res.end("Page Not Found....");
}

res.end("hello world....");
}).listen(8989, () => {
console.log("listening at port 8989…")
});