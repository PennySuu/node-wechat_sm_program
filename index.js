const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const router = require('./routes/index')
const lodash = require('lodash')
const app = express()

global._ = lodash

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', true) //可以带cookies
  if (req.method == 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(
  session({
    name: config.session.key,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: config.session.maxAge
    }
  })
)

app.use(flash())

app.get('/', function(req, res) {
  res.send('hello, express')
})
router(app)

app.listen(config.port, function() {
  console.log(` listening on port ${config.port}`)
})
