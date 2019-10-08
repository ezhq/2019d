// 引入库
let http = require('http')
let fs = require('fs')

// 自定义函数
const log = console.log.bind(console)

// 主函数
function serveStaticFile(res, path, type, code) {
    if (!code) {
        code = 200
    }
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('500: Internal Error')
        } else {
            res.writeHead(code, { 'Content-Type': type })
            res.end(data)
        }
    })
}

http.createServer(function (req, res) {
    let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html')
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html')
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png')
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html')
            break;
    }
}).listen(4000)

log('===>Server is work on: localhost:4000')
log('===>Press Ctrl + C to stop.')