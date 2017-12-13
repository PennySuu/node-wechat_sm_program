const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.Star = mongolass.model('star', {
  name: { type: 'string' },
  job: { type: 'string' },
  head_picture: { type: 'string' },
  date: { type: 'string' }
})

exports.History = mongolass.model('history', {
  date: { type: 'string' },
  cover_url: { type: 'string' },
  description: { type: 'string' }
})

exports.Birthday = mongolass.model('birthday', {
  name: { type: 'string' },
  avatar: { type: 'string' },
  birth: { type: 'string' },
  leftDay: { type: 'number' },
  age: { type: 'number' }
})
