var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var dataController = new gu.controller.inherit(masterController);

var defaultOpts = {
  server: serverConfig.serverMap.coreServer
};

dataController.actions = {
  import: {
    POST: function(req, res) {
      var self = this;
      var body = utils.parseBody(req);

      var options = {
        path: '/' + req.params.id + '/import-data?append=' + req.query.append,
        method: 'POST',
        data: null,
        files: body.files
      };

      var verifyOptions = {
        name: 'excelFilename',
        type: 'EXCEL',
        typeMessage: '上传文件的必须是excel文件！'
      };

      if (!utils.checkUploadFile(body.files, verifyOptions, res)) {
        return;
      }

      self.callParentRequest(options, function(data, response) {
        if (response && response.statusCode) {
          if (response.statusCode < 299) {
            res.status(200);
          } else {
            res.status(response && response.statusCode || 200);
          }
        }
        res.send(JSON.stringify(data));

        utils.removeUploadFile(body.files);
      });
    }
  },
  export: {
    GET: function(req, res) {
      var queryObj = req.query.args;

      var options = {
        path: '/' + req.params.id + '/download',
        method: 'POST',
        data: queryObj,
        res: res
      };

      this.callParentRequest(options);
    }
  },
  coreExport: {
    GET: function(req, res) {
      var queryObj = req.query.args;

      var options = Object.assign({}, defaultOpts, {
        path: '/' + req.params.id + '/download',
        method: 'POST',
        data: queryObj,
        res: res
      });

      this.callParentRequest(options);
    }
  },
  multiPathExport: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var path = '';

      if (req.query && req.query.path) {
        path = req.query.path;

        delete req.query.path;
      }

      var options = {
        path: '/' + path,
        method: 'POST',
        data: queryObj,
        res: res
      };

      this.callParentRequest(options);
    }
  },
  multiPathCoreExport: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var path = '';

      if (req.query && req.query.path) {
        path = req.query.path;

        delete req.query.path;
      }

      var options = Object.assign({}, defaultOpts, {
        path: '/' + path,
        method: 'POST',
        data: queryObj,
        res: res
      });

      this.callParentRequest(options);
    }
  }
};

module.exports = dataController;