var config = {
  db: {
    connectStringList: [
      'mongodb://baic-epc:baic-epc@127.0.0.1:27017/baic-epc'
    ]
  },
  serverMap: {
    epcmServer: {
      host: '10.20.253.171',
      port:'8080',
      requestPrefix: '/baic-epcm'
    },
    coreServer: {
      host: '10.20.253.171',
      port:'8080',
      requestPrefix:'/baic-core'
    }
  },
  devServerMap: {},
  localServerUrlMap: {
    index: 'https://demoepcm.epc.baicmotor.com'
  },
  partnerApp: {
    epcServer: {
      host: '127.0.0.1',
      port:'8010'
    },
    fileServer: {
      protocol:'http',
      host: '127.0.0.1',
      port: 80
    }
  },
  redisSession: {
    app: 'baic', //所属总作用域
    cookie: {
      maxAge: 1000 * 60 * 300,
      path: '/', //cookie路径
      httpOnly: true
    },
    host: '127.0.0.1',
    port: 6379,
    options: {
      password: 'baic-epc'
    },
    namespace: '', //redis key前缀
    ttl: 60 * 60, //过期时间，单位s，默认7200
    wipe: 60 * 10, //定期清除超时session间隔时间，单位s，默认600
    trustProxy: false //只接受https cookies
  },
  redisCache: {
    host: '127.0.0.1',
    port: 6379,
    password: 'baic-epc',
    prefix: 'EPC:',
    expireTime: (60 * 60 * 24) * 7 // 单位s
  },
  tokenSaltList: [
    'M3kReE',
    '7EwVBP',
    'ri4AcK',
    'Ted2OC',
    'PqxIUl',
    'oIJsTN'
  ],
  helpDocUrl: 'https://demores.epc.baicmotor.com/baic/manual/epc/',
  epcLoginUrl: 'https://demoepc.epc.baicmotor.com/login',
  epcIndexUrl: 'https://demoepc.epc.baicmotor.com/epc/catalog',
  epcSessionLocked: 'https://demoepc.epc.baicmotor.com/error/sessionLocked'
};

module.exports = config;
