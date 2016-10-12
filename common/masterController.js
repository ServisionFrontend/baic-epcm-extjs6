var gu = require('guthrie-js');
var serverConfig = require('../config');
var doRequest = require('../core/doRequest');
var baseController = require('./baseController');
var masterController = new gu.controller.inherit(baseController);
var defaultOpts = {
  server: serverConfig.serverMap.epcmServer,
  method: 'GET',
  contentType: 'application/json'
};

masterController.on('actionExecuting', function (req, res, next) {

  this.callParentRequest = function (options, callback) {
    var opts = Object.assign({
      req: req
    }, defaultOpts, options);

    doRequest(opts, function (response, body) {
      if (typeof callback === 'function') {
        if (opts.res) {
          return callback && callback(response);
        } else {
          res.status(response && response.statusCode || 200);
          callback(body, response)
        }
      }
    });
  };

  next();
});


module.exports = masterController;