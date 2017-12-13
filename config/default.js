module.exports = {
  port: 3000,
  session: {
    secret: 'wechat',
    key: 'wechat',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/wechat',
  staticUrl: 'http://localhost:3000'
}
