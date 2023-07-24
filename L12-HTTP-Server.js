const http = require('http')

const server = http.createServer((req,res) => {
 if(req.url==='/'){
    res.end('Welcome Ram')   
 }else if(req.url==='/about'){
    res.end('Tell me about you.')    
 }else{ 
res.end(`<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>`)}
})

server.listen(5000)