const http = require('http')

const server = http.createServer((req,res) => {
res.write('Welcome Ram')
res.end()
})

server.listen(5000)