var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var roleController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

roleController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = Object.assign({}, defaultOpts, {
        path: '/role/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/role',
        method: 'POST',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/role',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    DELETE: function (req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = Object.assign({}, defaultOpts, {
        path: '/role',
        method: 'DELETE',
        data: codeList
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = roleController;