var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var partStatusController = new gu.controller.inherit(masterController);

partStatusController.actions = {
  index: {
    GET: function (req, res) {
      var options = {
        path: '/part-status/list',
        method: 'POST',
        data: req.query.args
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = {
        path: '/part-status',
        method: 'POST',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function (req, res) {
      var options = {
        path: '/part-status',
        method: 'PUT',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    DELETE: function (req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        path: '/part-status',
        method: 'DELETE',
        data: codeList
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = partStatusController;