var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var masterController = require('../../../common/masterController');
var consultController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

consultController.actions = {
  index: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  setBlock: {
    POST: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/block',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = consultController;