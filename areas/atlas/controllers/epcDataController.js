var gu = require('guthrie-js');
var masterController = require('../../../common/masterController');
var epcDataController = new gu.controller.inherit(masterController);

epcDataController.actions = {
  index: {
    GET: function (req, res) {
      var options = {
        path: '/release-record/list',
        method: 'POST',
        data: req.query.args
      };

      this.callParentRequest(options, function(data, response) {
        res.send(data);
      });
    },
    POST: function (req, res) {
      var options = {
        path: '/release-record',
        method: 'POST',
        data: req.body
      };

      this.callParentRequest(options, function(data, response) {
        res.send(data);
      });
    }
  },
  export: {
    GET: function (req, res) {
      var options = {
        path: '/release-record/export-detail?code=' + req.query.code,
        data: null,
        res: res
      };

      this.callParentRequest(options, function(response) {
        return response;
      });
    }
  }
};

module.exports = epcDataController;