var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var funcAuthorityController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

funcAuthorityController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = Object.assign({}, defaultOpts, {
        path: '/func-auth-pkg/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/func-auth-pkg',
        method: 'POST',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/func-auth-pkg',
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
        path: '/func-auth-pkg',
        method: 'DELETE',
        data: codeList
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  list: {
    GET: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/func-auth/list-tree'
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = funcAuthorityController;