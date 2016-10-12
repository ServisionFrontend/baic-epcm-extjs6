var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterCoreController = require('../../../common/masterController');
var masterController = new gu.controller.inherit(masterCoreController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

masterController.actions = {
  index: {
    GET: function (req, res) {
      var userInfo = JSON.parse(req.session.userInfo);
      this.viewBag().pageCode = 'master';
      this.viewBag().username = userInfo.realName;
      this.viewBag().logoImgUrl = userInfo.logoImgUrl;
      this.viewBag().authCodeList = JSON.stringify(userInfo.authCodes);
      this.viewBag().helpDocUrl = serverConfig.helpDocUrl;
      this.viewBag().epcIndexUrl = serverConfig.epcIndexUrl + '?token=' + utils.inflateToken(req.session.id);

      res.render('master/index');
    }
  },
  menu: {
    GET: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/menu/list-tree'
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = masterController;
