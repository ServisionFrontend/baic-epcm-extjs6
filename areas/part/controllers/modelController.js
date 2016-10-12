var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var modelController = new gu.controller.inherit(masterController);

modelController.actions = {
  index: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var options = {
        path: '/model-group/list',
        method: 'POST',
        data: queryObj
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function(req, res) {
      var options = {
        path: '/model-group',
        method: 'POST',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function(req, res) {
      var options = {
        path: '/model-group',
        method: 'PUT',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    DELETE: function(req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        path: '/model-group',
        method: 'DELETE',
        data: codeList
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = modelController;