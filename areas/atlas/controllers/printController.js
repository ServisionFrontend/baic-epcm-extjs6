var gu = require('guthrie-js');
var masterController = require('../../../common/masterController');
var printController = new gu.controller.inherit(masterController);

printController.actions = {
  index: {
    GET: function (req, res) {
      var options = {
        path: '/image-print/list',
        method: 'POST',
        data: req.query.args
      };

      this.callParentRequest(options, function(data, response) {
        res.send(data);
      });
    }
  },
  download: {
    POST: function (req, res) {
      var options = {
        path: '/image-print/print',
        method: 'POST',
        data: req.body
      };

      this.callParentRequest(options, function(data, response) {
        res.send(data);
      });
    }
  },
  progress: {
    GET: function (req, res) {
      var id = req.params.id || '';

      var options = {
        path: '/progress/status/' + id,
        data: null
      };

      this.callParentRequest(options, function(data, response) {
        res.send(data);
      });
    }
  }
};

module.exports = printController;