var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var masterController = require('../../../common/masterController');
var templateController = new gu.controller.inherit(masterController);

templateController.actions = {
  download: {
    GET: function (req, res) {
      var options = {
        path: '/' + req.params.id + '/get-import-template-url'
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = templateController;