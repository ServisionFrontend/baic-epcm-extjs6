var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var partSeriesController = new gu.controller.inherit(masterController);

partSeriesController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;

      var options = {
        path: '/report/part-series/list',
        method: 'POST',
        data: queryObj
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }    
  }
};

module.exports = partSeriesController;