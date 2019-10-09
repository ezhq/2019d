/******** 依赖区 ********/
let express = require('express')
let quote = require('./lib/quote.js')

/******** 扩展工具区 ********/
const log = console.log.bind(console)

/******** 数据区 ********/
// let words = [
//     'Alice line.',
//     'Bob line.',
//     'Charry line.',
//     'Docker line.',
// ]


/******** 函数区 ********/
let app = express()

// 设置-HandleBar视图引擎
let handlebars = require('express3-handlebars').create({ defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

// 端口-配置
app.set('port', process.env.PORT || 4000)

/**** 路由配置 ****/
// 中间件-默认路径设置（static）
app.use(express.static(__dirname + '/public'))

// 中间件-字符串查询
app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'
    next()
})


// 路由-主页
app.get('/', (req, res) => {
    res.render('home')
})

// 路由-关于
app.get('/about', (req, res) => {
    // let randowmWord = words[Math.floor(Math.random() * words.length)]

    res.render('about', {
        quote: quote.getQuote(),
        pageTestScript: '/qa/tests-about.js'
    })
})


// 路由-404: catch-all处理器(中间件)
app.use((req, res, next) => {
    res.status(404)
    res.render('404')
})

// 路由-500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500)
    res.render('500')
})

/**** 端口 ****/
// 端口-监听
app.listen(app.get('port'), () => {
    log(`===>Express start on http:/localhost:${app.get('port')}
    press Ctrl + C to STOP.`)
})


