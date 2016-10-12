var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var legendController = new gu.controller.inherit(masterController);
var request = require('request');


legendController.actions = {
  index: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var options = {
        path: '/image/list',
        method: 'POST',
        data: queryObj
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function(req, res) {
      var self = this;
      var body = utils.parseBody(req);

      var isAppend = req.query.append;
      var method = isAppend === 'true' ? 'POST' : 'PUT';
      var options = {
        path: '/image',
        method: method,
        data: body.fields,
        files: body.files
      };

      var verifyOptions1 = {
        name: 'svgFilename',
        maxSize: 1024 * 1024 * 2,
        sizeMessage: 'SVG图文件大小必须小于2M'
      };

      var verifyOptions2 = {
        name: 'gifFilename',
        maxSize: 1024 * 1024 * 2,
        sizeMessage: 'JPG图文件大小必须小于2M'
      };

      if (!utils.checkUploadFile(body.files, verifyOptions1, res)) {
        return;
      }

      if (!utils.checkUploadFile(body.files, verifyOptions2, res)) {
        return;
      }

      self.callParentRequest(options, function(data) {
        res.send(JSON.stringify(data));

        utils.removeUploadFile(body.files);
      });
    },
    DELETE: function(req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        path: '/image',
        method: 'DELETE',
        data: codeList
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  loadSvg: {
    GET: function(req, res) {
      var fileServer = serverConfig.partnerApp.fileServer;
      var url = utils.getReplaceUrl(req.query.path, fileServer.protocol, fileServer.host, fileServer.port);
      var filenameIdx = url.lastIndexOf("/") + 1;
      url = url.substring(0, filenameIdx) + encodeURIComponent(url.substring(filenameIdx));
      var options = {
        headers: {
          'Accept-Encoding': 'gzip'
        },
        server: {},
        url: url,
        contentType: 'text/xml'
      };

      request(options).pipe(res);
    }
  }
};

module.exports = legendController;