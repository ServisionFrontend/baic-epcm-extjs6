var moment = require('moment');
var config = require('../config');
var connectString = config.db.connectStringList[0];
var connectDb = require('./connectDb');
var db = connectDb(connectString);
var errorSchema = require('../schemas/errorSchema');
var errorModel = db && db.model('error', errorSchema, 'exception');
var env = process.env.NODE_ENV || 'development';

var extendError = function () {
  if (env !== 'development') {
    Error.prototype.publish = function () {};
  } else {
    Error.prototype.publish = function () {
      var errorInfo = {
        name: this.name,
        message: this.message,
        stack: this.stack,
        serverName: config.curServerName || '',
        createTime: moment().format('YYYY-MM-DD HH:mm:ss')
      };

      if (errorModel) {
        var errorEntity = new errorModel(errorInfo);

        errorEntity.save();
      }
    };
  }
};

module.exports = extendError;