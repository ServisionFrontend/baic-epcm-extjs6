var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var masterController = require('../../../common/masterController');
var selectorController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

selectorController.actions = {
  list: {
    GET: function(req, res) {
      var queryStr = '';

      if (req.query && req.query._dc) {
        delete req.query._dc;
      }

      if (req.query && !utils.isEmptyObject(req.query)) {
        queryStr = '?args=' + JSON.stringify(req.query);
      }

      var options = {
        path: '/' + req.params.id + '/select' + queryStr
      };

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },
  coreList: {
    GET: function(req, res) {
      var queryStr = '';

      if (req.query && req.query._dc) {
        delete req.query._dc;
      }

      if (req.query && !utils.isEmptyObject(req.query)) {
        queryStr = '?args=' + JSON.stringify(req.query);
      }

      var options = Object.assign({}, defaultOpts, {
        path: '/' + req.params.id + '/select' + queryStr
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  multiPath: {
    GET: function(req, res) {
      var queryStr = '';
      var path = '';

      if (req.query && req.query._dc) {
        delete req.query._dc;
      }

      if (req.query && req.query.path) {
        path = req.query.path;

        delete req.query.path;
      }

      if (req.query && !utils.isEmptyObject(req.query)) {
        queryStr = '?args=' + JSON.stringify(req.query);
      }

      var options = Object.assign({}, defaultOpts, {
        path: '/' + path + '/select' + queryStr
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  options: {
    GET: function(req, res) {
      var path = req.query.args;

      var options = Object.assign({}, defaultOpts, {
        path: path
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = selectorController;