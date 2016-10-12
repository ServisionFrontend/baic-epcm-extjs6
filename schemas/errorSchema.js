var mongoose = require('mongoose');
var errorSchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: false
  },
  message: {
    type: 'String',
    required: false
  },
  stack: {
    type: 'String',
    required: false
  },
  serverName: {
    type: 'String',
    required: false
  },
  createTime: {
    type: 'String',
    required: false
  }
}, {
  capped: {
    size: 1024 * 100,
    max: 10000,
    autoIndexId: true
  }
});

module.exports = errorSchema;