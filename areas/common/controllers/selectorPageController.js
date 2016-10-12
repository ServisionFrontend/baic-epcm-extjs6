var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var selectorPageController = new gu.controller.inherit(masterController);

var defaultOpts = {
  server: serverConfig.serverMap.coreServer
};

selectorPageController.actions = {
  list: {
    GET: function(req, res) {
      var options = {
        path: '/'+ req.params.id +'/select',
        method: 'POST',
        data: req.query.args
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  coreList: {
    GET: function(req, res) {
    }
  },
  multiPath: {
    GET: function(req, res) {
    }
  }
};

module.exports = selectorPageController;