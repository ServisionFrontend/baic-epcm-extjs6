var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var interfaceController = new gu.controller.inherit(masterController);

interfaceController.actions = {
  index: {
    GET: function (req, res) {
      var options = {
        path: '/brand/list',
        method: 'POST',
        data: req.query.args
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = interfaceController;