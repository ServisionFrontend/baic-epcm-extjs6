var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var logoutController = new gu.controller.inherit(masterController);

logoutController.actions = {
  index: {
    POST: function(req, res) {
      req.session.destroyall(function(err, result) {
        var epcServer = serverConfig.partnerApp.epcServer;

        if (err) {
          err.publish();

          return res.send({
            success: false,
            result: '登出系统失败!'
          });
        }

        //var protocol = epcServer.protocol ? epcServer.protocol : 'http';
        //var url = protocol + '://' + epcServer.host + (epcServer.port ? ':' + epcServer.port : '') + '/login';

        res.send({
          success: true,
          result: serverConfig.epcLoginUrl
        });
      });
    }
  },

  toEpc: {
    POST: function(req, res) {
      var options = {
        server: serverConfig.partnerApp.epcServer,
        path: '/login/epcmLogin',
        method: 'POST',
        data: {
          token: utils.inflateToken(req.session.id)
        }
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = logoutController;