const log = console.log.bind(console)

let http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hola!')
}).listen(4000)

log('===>Server is work on: localhost:4000')
log('===>Press Ctrl + C to stop.')