var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var loginController = new gu.controller.inherit(masterController);

loginController.actions = {
  index: {
    POST: function (req, res) {
      var token = req.body.token;

      if (token && utils.isRightToken(token)) {

        var redisSessions = req.session.getRedisSessionsModule();
        var deflatedToken = utils.deflateToken(token);

        redisSessions.get({
          app: serverConfig.redisSession.app,
          token: deflatedToken
        }, function (err, data) {

          if (err) {
            err.publish();
          }

          if (data.id) {

            res.status(200);

            res.send({
              result: serverConfig.localServerUrlMap.index + '?token=' + token
            });

          } else {

            res.status(401);
            res.send({message: '未授权，EPCM登录失败！'});

          }
        });
      } else {
        res.status(403);
        res.send({message: ' 禁止访问！'});
      }

    }
  }
};

module.exports = loginController;