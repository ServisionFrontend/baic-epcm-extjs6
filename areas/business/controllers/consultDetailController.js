var gu = require('guthrie-js');
var urlencode = require('urlencode');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var consultDetailController = new gu.controller.inherit(masterController);

var defaultOpts = {
  server: serverConfig.serverMap.coreServer
}

consultDetailController.actions = {
  index: {
    GET: function(req, res) {
      this.viewBag().pageCode = 'consult-detail';
      this.viewBag().authCodeList = JSON.stringify(JSON.parse(req.session.userInfo).authCodes);

      res.render('business/consult/detail');
    }
  },
  questions: {
    GET: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/get?questionCode=' + req.query.code
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/question/attach',
        method: 'PUT',
        contentType: 'application/json',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  reply: {
    GET: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/answer/get?questionCode=' + req.query.questionCode
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function(req, res) {
      var self = this;
      var body = utils.parseBody(req);

      var options = Object.assign({}, defaultOpts, {
        path: '/admin/answer',
        method: 'POST',
        contentType: 'application/json',
        data: body.fields,
        files: body.files
      });

      var verifyOptions = {
        name: 'filename',
        maxSize: 1024 * 1024 * 10,
        sizeMessage: '附件大小必须小于10M'
      };

      if (!utils.checkUploadFile(body.files, verifyOptions, res)) {
        return;
      }

      self.callParentRequest(options, function(data) {
        res.send(JSON.stringify(data));
        utils.removeUploadFile(body.files);
      });

    },
    DELETE: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/answer',
        method: 'DELETE',
        contentType: 'application/json',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  download: {
    GET: function(req, res) {
      var arg = req.query.arg,
        filename = req.query.filename;

      var options = Object.assign({}, defaultOpts, {
        url: arg,
        res: res
      });

      this.callParentRequest(options, function(response) {
        var tempFileName = urlencode(filename ? filename : 'temp.txt');

        response.set('content-disposition', 'attachment; filename=' + tempFileName);

        return response;
      });
    }
  }
};

module.exports = consultDetailController;