var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var problemController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
}

problemController.actions = {
  index: {
    GET: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/reason/list',
        method: 'POST',
        data: req.query.args
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/reason',
        method: 'POST',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/reason',
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
        path: '/admin/question/reason',
        method: 'DELETE',
        data: codeList
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = problemController;