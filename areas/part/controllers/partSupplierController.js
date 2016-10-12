var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var partSupplierController = new gu.controller.inherit(masterController);

partSupplierController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = {
        path: '/part-supplier-rel/list',
        method: 'POST',
        data: queryObj
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = {
        path: '/part-supplier-rel',
        method: 'POST',
        data: req.body
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function (req, res) {
      var options = {
        path: '/part-supplier-rel',
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
        path: '/part-supplier-rel',
        method: 'DELETE',
        data: codeList
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = partSupplierController;