var redis = require('redis');
var util = require('util');
var crypto = require('crypto');
var redisCacheConfig = require('../config').redisCache;
var redisClient = redis.createClient({
  host: redisCacheConfig.host,
  port: redisCacheConfig.port,
  password: redisCacheConfig.password
});
var redisHandler = {};
var schemaPrefix = redisCacheConfig.prefix;
var defaultExpireTime = redisCacheConfig.expireTime;

redisHandler.set = function(req, data, expireTime, callback) {
  var key = generateKey(req);

  try {
    data = typeof data === 'string' ? data : JSON.stringify(data);
  } catch (e) {
    e.publish();
  }

  setKey(key, data, expireTime, callback);
};

redisHandler.get = function(req, callback) {
  var key = generateKey(req);

  getKey(key, callback);
};

redisHandler.del = function(req, callback) {
  var key = generateKey(req);

  delKey(key, callback);
};

redisHandler.exists = function(req, callback) {
  var key = generateKey(req);

  exists(key, callback);
};

redisHandler.expire = function(req, expireTime) {
  var key = generateKey(req);

  redisClient.expire(key, expireTime);
};

redisHandler.delByPattern = function(pattern, callback) {

  redisClient.keys(pattern, function(err, keys) {
    if (err) {
      err.publish();
    }

    redisClient.del(keys, function(err, result) {
      if (err) {
        err.publish();
      }

      callback && callback(typeof result === 'number' ? result : 0);
    });
  })
};

redisHandler.getKey = function(key, callback) {
  getKey(key, callback)
};

redisHandler.setKey = function(key, data, expireTime, callback) {
  setKey(key, data, expireTime, callback);
};

redisHandler.delKey = function(key, callback) {
  delKey(key, callback);
};

redisHandler.isExistKey = function(key, callback) {
  exists(key, callback);
};

redisHandler.hashKey = function(str) {
  return createHash(str);
}

// private methods
function getKey(key, callback) {
  redisClient.get(key, function(err, data) {

    if (err) {
      err.publish();
    }

    try {
      data = JSON.parse(data);
    } catch (e) {
      e.publish();
    }

    callback && callback(data);
  });
}

function setKey(key, data, expireTime, callback) {
  redisClient.set(key, data, function(err, reply) {

    if (err) {
      err.publish();
    }

    if (!expireTime) {

      redisClient.expire(key, defaultExpireTime);

      return;
    }

    if (typeof expireTime === 'function') {

      redisClient.expire(key, defaultExpireTime);

      expireTime(reply);

      return;
    }

    redisClient.expire(key, expireTime);

    callback && callback(reply);
  });
}

function delKey(key, callback) {
  redisClient.del(key, function(err, reply) {

    if (err) {
      err.publish();
    }

    callback && callback(reply);
  });
}

function exists(key, callback) {
  redisClient.exists(key, function(err, reply) { // reply = 1, 存在

    if (err) {
      err.publish();
    }

    callback && callback(reply);
  });
}

function generateKey(req) {
  var str = req.session.usercode + ':' + req.session.database + ':' + req.session.lang + ':' + req.url.replace(/_=\d*$/, '');
  var hash = createHash(str);

  return schemaPrefix + hash;
}

function createHash(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

module.exports = redisHandler;