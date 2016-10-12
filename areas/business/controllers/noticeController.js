var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var noticeController = new gu.controller.inherit(masterController);

var defaultOpts = {
  server: serverConfig.serverMap.coreServer
};

noticeController.actions = {
  index: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function(req, res) {
      var self = this;
      var body = utils.parseBody(req);

      var isAppend = req.query.append;
      var method = isAppend === 'true' ? 'POST' : 'PUT';
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message',
        method: method,
        data: body.fields,
        files: body.files
      });

      if (body.fields.applySeries.length > 0) {
        body.fields.applySeries = body.fields.applySeries.split(',');
      } else {
        delete body.fields.applySeries;
      }

      var verifyOptions = {
        name: 'file',
        maxSize: 1024 * 1024 * 4,
        sizeMessage: '附件大小必须小于4M'
      };

      if (!utils.checkUploadFile(body.files, verifyOptions, res)) {
        return;
      }

      self.callParentRequest(options, function(data) {
        res.send(JSON.stringify(data));
        utils.removeUploadFile(body.files);
      });
    },
    PUT: function(req, res) {},
    DELETE: function(req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message',
        method: 'DELETE',
        data: codeList
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  invalid: {
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/abandon',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  publish: {
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/issue',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  deleteAttachment: {
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/delete-attach',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  downloadDetail: {
    GET: function (req, res) {
      var code = req.params.id;
      var queryObj = '{"filters":{"messageCode":"' + code +'"}}';

      var options = Object.assign({}, defaultOpts, {
        path: '/admin/message/export',
        method: 'POST',
        data: queryObj,
        res: res
      });

      this.callParentRequest(options);
    }
  }
};

module.exports = noticeController;