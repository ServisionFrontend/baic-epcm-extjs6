var gu = require('guthrie-js');
var serverConfig = require('../../../config');
var utils = require('../../../core/utils');
var doRequest = require('../../../core/doRequest');
var masterController = require('../../../common/masterController');
var surveyController = new gu.controller.inherit(masterController);

var defaultOpts = {
    server: serverConfig.serverMap.coreServer
};

surveyController.actions = {
  index: {
    GET: function(req, res) {
      var queryObj = req.query.args;

      queryObj = JSON.parse(queryObj);

      if (queryObj.filters && queryObj.filters.brandCodes) {
        queryObj.filters.brandCodes = queryObj.filters.brandCodes.split(',');
      }

      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire/list',
        method: 'POST',
        data: queryObj
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    POST: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire',
        method: 'POST',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    },
    DELETE: function(req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire',
        method: 'DELETE',
        data: codeList
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  questions: {
    GET: function(req, res) {
      var code = req.query.questionnaireCode;
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire/get?questionnaireCode=' + code,
        method: 'GET'
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  publish: {
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire/issue',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  expired: {
    PUT: function(req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/admin/questionnaire/expired',
        method: 'PUT',
        data: req.body
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  answer: {
    GET: function(req, res) {
      var code = req.query.questionnaireCode;
      var options = Object.assign({}, defaultOpts, {
        path: '/questionnaire/answer/get?questionnaireCode=' + code,
        method: 'GET'
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  },

  downloadAnswer: {
    GET: function(req, res) {
      var code = req.query.questionnaireCode;
      var options = Object.assign({}, defaultOpts, {
        path: '/questionnaire/answer/download-answers?questionnaireCode=' + code,
        method: 'GET',
        req: req,
        res: res
      });

      doRequest(options);
    }
  },

  brandList: {
    GET: function (req, res) {
      var options = Object.assign({}, defaultOpts, {
        path: '/combo/brand/list',
        method: 'GET'
      });

      this.callParentRequest(options, function(data) {
        res.send(data);
      });
    }
  }
};

module.exports = surveyController;