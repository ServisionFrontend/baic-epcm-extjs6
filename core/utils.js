"use strict";

var fs = require('fs');
var os = require('os');
var interfaces = os.networkInterfaces();
var path = require('path');
var util = require('util');
var formidable = require('formidable');
var serverConfig = require('../config');
var utils = {};

/**
 * 映射数据
 *
 * @param {Object} source
 * @param {Array} mapModel
 * mapModel = [['a', 'b'], ['abc.a', 'www.b']];
 * mapModel数组中每个数组项的第一个值为原对象的属性，第二个值是目标对象的属性
 * @return {Object} target
 */
utils.mappingData = function(source, mapModel) {
    var target = {};

    if (mapModel && mapModel.forEach) {
        for (var i = 0; i < mapModel.length; i++) {
            var tempModel = mapModel[i];
            var value = eval('source.' + tempModel[0]);
            var props = tempModel[1].split('.');

            createObj(target, 0, props, value);
        }

        return target;
    } else {
        return source;
    }

    function createObj(obj, index, arr, value) {
        if (index === arr.length - 1) {
            return obj[arr[index]] = value;
        } else {
            if (!obj[arr[index]]) {
                obj[arr[index]] = {};
            }

            return createObj(obj[arr[index]], index + 1, arr, value);
        }
    }
};

/**
 * 删除文件
 *
 * @param {Array | String} arr
 */
utils.removeFile = function(arr) {
    if (util.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            fs.unlink(arr[i], function(err) {
                err && err.publish();
            });
        }
    } else {
        fs.unlink(arr, function(err) {
            err && err.publish();
        });
    }
};

/**
 * 删除使用formidable模块上传的文件
 *
 * @param {Object} files
 */
utils.removeUploadFile = function(files) {
    var props = Object.keys(files);

    props.forEach(function(prop) {
        console.log(files[prop].path)
        files[prop].path && utils.removeFile(files[prop].path);
    });
};

/**
 * 转换查询对象格式为新定义的后端查询接口
 *
 * @param {String} data
 * {
 *   filters: { "name": "test", "age": 16 },
 *   sorts: [{ "filed": "name", "asc": true }, { "field": "age", "asc": false }],
 *   paging: { "page": 3, "size": 10 }
 * }
 * @param {Object} opts
 * {
 *   name1: {opt: 'eq', type: 'string'},
 *   name2: {opt: 'neq', type: 'date'}
 * }
 *
 * @returns {Object}
 */
utils.toServerQueryObject = function(queryString, opts) {
    var data = JSON.parse(queryString);
    var obj = {};
    var filterObj = data.filters;

    obj.page = data.paging && data.paging.page;
    obj.limit = data.paging && data.paging.size;
    obj.sort = data.sorts;
    obj.filters = [];

    var propList = Object.keys(filterObj);

    propList.forEach(function(prop) {
        var temp = {};

        temp.left = prop;
        temp.right = filterObj[prop];
        temp.opt = 'eq';
        temp.type = '';

        if (opts && opts[prop]) {
            temp.opt = opts[prop].opt || 'eq';
            temp.type = opts[prop].type || '';
        }

        obj.filters.push(temp);
    });

    return obj;
};

/**
 * 得到要删除项的code集合
 *
 * @param {String} arrStr
 */
utils.getCodeList = function(arrStr) {
    var list = [];
    var arr = typeof arrStr === 'object' ? arrStr : JSON.parse(arrStr);

    arr.forEach(function(item) {
        if (item.code) {
            list.push(item.code);
        }
    });

    return list;
};

/**
 * 判断对象是否为空
 *
 * @param {Object} obj
 */
utils.isEmptyObject = function(obj) {
    for (var prop in obj) {
        return false;
    }

    return true;
};

/**
 * 向token中掺入字符串
 *
 * @param {String} token
 * @return {String}
 */
utils.inflateToken = function(token) {
    if (token && typeof token === 'string') {

        if (token.length > 10) {

            return token.replace(/(.{10})/, '$1' + utils.getTokenSalt());

        } else { //原始token不合法
            return token;
        }

    } else {
        return '';
    }
};

/**
 * 从token中清除掺入的字符串
 *
 * @param {String} token
 * @return {String}
 */
utils.deflateToken = function(token) {
    return token.replace(/(.{10}).{6}/, '$1');
};

/**
 * 获取需要掺入的字符串
 *
 * @return {String}
 */
utils.getTokenSalt = function() {
    return serverConfig.tokenSaltList[Math.floor(Math.random() * serverConfig.tokenSaltList.length)];
};

/**
 * 验证token合法性
 *
 * @param {String} token
 * @return {Boolean}
 */
utils.isRightToken = function(token) {
    if (token && typeof token === 'string' && token.length > 10) {

        return serverConfig.tokenSaltList.indexOf(token.slice(10, 16)) !== -1;

    } else {
        return false;
    }
};


/**
 * 检查上传文件的类型
 *
 * @param {String} fileType 上传文件的类型
 * @param {String} type 约定的文件类型
 * @return {Boolean}
 */
utils.checkUploadFileType = function(fileType, type) {
    var types = {
        PNG: ['image/png', 'image/x-png'],
        SVG: ['image/svg+xml'],
        GIF: ['image/gif'],
        EXCEL: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    };

    return (types[type] || []).indexOf(fileType) > -1;
};


/**
 * 检查上传文件大小与类型
 *
 * @param {Object} files
 * @param {Object} options
 * @param {Object} res
 * @return {Boolean}
 */
utils.checkUploadFile = function(files, options, res) {
    var name = options.name;
    var type = files[name].type;
    var size = files[name].size;

    if (size) {
        if (options.maxSize && size >= options.maxSize) {
            utils.removeUploadFile(files);
            res.send(JSON.stringify({
                success: false,
                message: options.sizeMessage
            }));

            return false;
        }
        if (options.type && !utils.checkUploadFileType(type, options.type)) {
            utils.removeUploadFile(files);

            res.send(JSON.stringify({
                success: false,
                message: options.typeMessage
            }));

            return false;
        }
    }

    return true;
};


utils.checkLogin = function(req, callback) {

    if (req.session.id) {
        return callback(req, true);
    }

    var redisSessions = req.session.getRedisSessionsModule();
    var token = req.cookies[serverConfig.redisSession.app];

    if (token) {
        redisSessions.get({
            app: serverConfig.redisSession.app,
            token: token
        }, function(err, data) {
            return data.id ? callback(req, true, data) : callback(req, false);
        });
    } else {
        callback(req, false);
    }
};


/**
 *替换url的协议 域名 端口号
 *
 *@param {String}
 *@return {String}
 */
utils.getReplaceUrl = function(url, protocal, host, port) {
    var pattern = new RegExp('^(.*:)//([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$'),
        urlPiece = url.split(pattern),
        protocal = protocal ? protocal + '://' : urlPiece[1] + '//' || '',
        host = host ? host : urlPiece[2] || '',
        port = port ? ':' + port : urlPiece[3] || '',
        path = urlPiece[4] || '';

    return protocal + host + port + path;
};

/**
 *设置cookie与会话的期限
 *@param {Object}
 *@param {Object}
 */
utils.parseBody = function(req) {
    var body = req.body;
    var files = {};
    var fields = {};

    Object.keys(body).forEach(function(key) {
        var field = body[key];

        if (field.path) {
            files[key] = field;
        } else {
            fields[key] = field;
        }
    });

    return {
        files: files,
        fields: fields
    };
};

module.exports = utils;