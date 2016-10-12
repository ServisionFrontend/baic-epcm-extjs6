var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var partReplaceController = new gu.controller.inherit(masterController);

partReplaceController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;

      var options = {
        path: '/report/brand-substitute/list',
        method: 'POST',
        data: queryObj
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }    
  },
  exportDetail: {
    GET: function(req, res) {
      var queryObj = {
        filters: req.query
      };

      var options = {
        path: '/report/brand-substitute/export',
        method: 'POST',
        data: queryObj,
        res: res
      };

      this.callParentRequest(options);
    }
  }
};

module.exports = partReplaceController;