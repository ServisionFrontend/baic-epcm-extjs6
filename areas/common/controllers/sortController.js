var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var masterController = require('../../../common/masterController');
var sortController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

sortController.actions = {
  index: {
    PUT: function (req, res) {
      var options = {
        path: '/' + req.params.id + '/sort',
        method: 'PUT',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  multiPath: {
    PUT: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/' + req.query.path + '/sort',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = sortController;