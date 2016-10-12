var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var reorganizeController = new gu.controller.inherit(masterController);

reorganizeController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = {
        path: '/vehicle-release/list',
        method: 'POST',
        data: queryObj
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    DELETE: function (req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        path: '/vehicle-release',
        method: 'DELETE',
        data: codeList
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  publish: {
    POST: function (req, res) {
      var options = {
        path: '/vehicle-release/release',
        method: 'POST',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  unpublish: {
    DELETE: function (req, res) {
      var options = {
        path: '/vehicle-release/release',
        method: 'DELETE ',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = reorganizeController;