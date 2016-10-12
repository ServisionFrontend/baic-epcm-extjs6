var gu = require('guthrie-js');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var brandController = new gu.controller.inherit(masterController);

brandController.actions = {
  index: {
    GET: function(req, res) {
      var options = {
        path: '/brand/list',
        method: 'POST',
        data: req.query.args
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
        path: '/brand',
        method: method,
        data: body.fields,
        files: body.files
      };

      var verifyOptions = {
        name: 'logoFilename',
        maxSize: 1024 * 1024 * 2,
        sizeMessage: '图文件大小必须小于2M'
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
      var codeList = utils.getCodeList(req.body);

      var options = {
        path: '/brand',
        method: 'DELETE',
        data: codeList
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = brandController;