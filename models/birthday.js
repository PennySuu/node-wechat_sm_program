const Birthday = require('../lib/mongo').Birthday
module.exports = {
  getBirthday: function getBirthday() {
    return Birthday.find().exec()
  }
}
