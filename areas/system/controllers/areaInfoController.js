var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var areaInfoController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

areaInfoController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = Object.assign({}, defaultOpts, {
        path: '/district/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = areaInfoController;