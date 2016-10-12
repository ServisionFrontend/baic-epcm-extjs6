"use strict";

var fs = require('fs');
var request = require('request');
var urlencode = require('urlencode');
var env = process.env.NODE_ENV || 'development';

if (env === 'test' || env === 'development') {
  request = request.defaults({'proxy': 'http://navigator.servision.com.cn:8888'});
}

function doRequest(opts, callback) {

  if (!opts.server && !opts.url) {
    return;
  }

  var req = opts.req;
  var options = {
    host: opts.server && opts.server.host,
    port: opts.server && opts.server.port,
    requestPrefix: (opts.server && opts.server.requestPrefix) || '',
    path: opts.path,
    method: opts.method || 'GET'
  };

  var protocol = opts.server && opts.server.protocol ? opts.server.protocol : 'http';

  var url = opts.url || protocol + '://' + options.host + (options.port ? ':' + options.port : '') + options.requestPrefix + options.path;

  if (opts.headers) {
    options.headers = opts.headers;
    options.headers['X-USERNAME'] = opts.username || req.session.usercode || '';
    options.headers['x-forwarded-for'] = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    options.headers['user-agent'] = req.headers['user-agent'];
  } else {
    options.headers = {
      'content-type': opts.contentType || 'application/json',
      'X-USERNAME': opts.username || req.session.usercode || '',
      'X-DATA': opts.database || req.session.database || '',
      'X-LOCALE': opts.lang || req.session.lang || 'zh',
      'x-forwarded-for': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      'user-agent': req.headers['user-agent']
    };
  }

  if (opts.files) {

    var multipart = [];
    var props = Object.keys(opts.files);

    if (opts.data) {
      multipart.push({
        'content-type': 'application/json',
        'body': typeof opts.data === 'string' ? opts.data : JSON.stringify(opts.data)
      });
    }

    props.forEach(function(prop) {
      if (opts.files[prop].name) {
        var filename = urlencode(opts.files[prop].name);
        var obj = {
          'content-type': opts.files[prop].type,
          'content-disposition': 'attachment; filename=' + filename,
          'body': fs.createReadStream(opts.files[prop].path)
        };

        multipart.push(obj);
      }
    });

    var multipartOptions = {
      uri: encodeURI(url),
      method: options.method,
      headers: {
        'X-USERNAME': options.headers['X-USERNAME']
      },
      multipart: multipart
    };

    if (opts.res) {

      request(multipartOptions)
        .on('error', function(err) {
          err.publish();
          return opts.res.send({
            success: false,
            message: '后端服务连接错误！'
          });
        })
        .pipe(createResponseObj(opts.res, callback) || opts.res);

    } else {

      request(multipartOptions, createResponseHandle(callback));

    }
  } else {

    var data = null;

    if (opts.data) {
      data = typeof opts.data === 'string' ? opts.data : JSON.stringify(opts.data);
    }

    var normalOptions = {
      url: encodeURI(url),
      method: options.method,
      headers: options.headers,
      body: data
    };

    if (opts.res) {

      request(normalOptions)
        .on('error', function(err) {
          err.publish();
          return opts.res.send({
            success: false,
            message: '后端服务连接错误！'
          });
        })
        .pipe(createResponseObj(opts.res, callback) || opts.res);

    } else {

      request(normalOptions, createResponseHandle(callback));

    }
  }
}

function createResponseObj(res, callback) {

  return callback && typeof callback === 'function' ? callback(res) : res;

}

function createResponseHandle(callback) {

  return function(err, res, body) {

    if (err) {
      err.publish();
      return callback(res, {
        success: false,
        message: '后端服务错误！'
      });
    }

    if (res.statusCode === 404) {
      return callback(res, {
        success: false,
        message: '后端服务404错误！'
      });
    }

    if (res && res.headers && res.headers['content-disposition']) {
      return callback(res, body);
    }

    if (body) {
      try {
        body = typeof body === 'string' ? JSON.parse(body) : body;
      } catch (e) {
        var temp = body;
        body = {};
        body.result = temp;
      }

      body.success = (res && res.statusCode <= 299) ? true : false;
    } else {
      body = {};
      body.success = (res && res.statusCode <= 299) ? true : false;
    }
    callback(res, body);
  };
}

module.exports = doRequest;