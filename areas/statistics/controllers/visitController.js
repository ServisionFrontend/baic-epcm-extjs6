var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var visitController = new gu.controller.inherit(masterController);
var defaultOpts = {
  server: serverConfig.serverMap.coreServer
};

visitController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = Object.assign({}, defaultOpts, {
        path: '/report/login-info/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }    
  }
};

module.exports = visitController;