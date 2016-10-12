var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var serverConfig = require('../../../config');
var masterController = require('../../../common/masterController');
var noticeController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
}

noticeController.actions = {
  index: {
    GET: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/type/list',
        method: 'POST',
        data: req.query.args
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/type',
        method: 'POST',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/type',
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
        path: '/admin/message/type',
        method: 'DELETE',
        data: codeList
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = noticeController;