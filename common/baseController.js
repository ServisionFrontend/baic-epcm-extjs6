"use strict";

var gu = require('guthrie-js');
var serverConfig = require('../config');
var utils = require('../core/utils');
var baseController = new gu.controller.create();
var epcServer = serverConfig.partnerApp.epcServer;
var redisHandler = require('../core/redisHandler');

baseController.on('actionExecuting', function(req, res, next) {

  if (req.url === '/login') {

    next();

    return;
  }

  utils.checkLogin(req, handler);

  function handler(req, isLogined, data) {

    if (isLogined) {

      // 检查当前用户是否在其他地方登录
      hasOtherUserLogin(req.session.id, function(isHas) {

        // 确认用户在其他地方登录
        if (isHas) {
          req.session.destroy(function(err) {
            if (err) {
              err.publish();
            }
            if (req.xhr) {
              res.status(611);
              res.send({
                message: serverConfig.epcSessionLocked
              });
            } else {
              res.redirect(serverConfig.epcSessionLocked);
            }
          });

          return;
        }

        if (req.url.startsWith('/?token=') && utils.isRightToken(req.query.token)) {
          res.redirect('/');
        } else {
          if (data && data.d) {
            Object.assign(req.session, data.d);
          }
          next();
        }
      });

      return;
    }

    if (req.url.startsWith('/?token=') && utils.isRightToken(req.query.token)) {

      var redisSessions = req.session.getRedisSessionsModule();
      var deflatedToken = utils.deflateToken(req.query.token);

      redisSessions.get({
        app: serverConfig.redisSession.app,
        token: deflatedToken
      }, function(err, data) {

        if (err) {
          err.publish();
        }

        if (data.id) {

          res.cookie(serverConfig.redisSession.app, deflatedToken, serverConfig.redisSession.cookie);

          res.redirect('/');
        } else {
          res.status(401);
          res.send({
            message: '未授权，EPCM登录失败！'
          });
        }
      });

      return;
    }

    if (req.xhr) {

      res.status(401);
      res.send({
        message: '未授权，EPCM登录失败！'
      });

    } else {

      res.redirect(serverConfig.epcLoginUrl);

    }
  }
});

function hasOtherUserLogin(sid, callback) {
  var key = "EU:" + sid;

  (function(key, callback) {
    redisHandler.getKey(key, function(data) {
      var isHas = data ? true : false;

      redisHandler.delKey(key, function() {
        callback && callback.apply(null, [isHas]);
      });
    });
  })(key, callback);
}

module.exports = baseController;