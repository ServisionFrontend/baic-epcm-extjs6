var config = {
  db: {
    connectStringList: [
      'mongodb://10.0.0.80:27017/baic-epc'
    ]
  },
  serverMap: {
    epcmServer: {
      //host: '10.0.0.103',
      //port: '8080',
      host: 'baic.container.dev.servision.com.cn',
      requestPrefix: '/baic-epcm'
    },
    coreServer: {
      host: 'core.baic.dev.servision.com.cn'
    }
  },
  devServerMap: {},
  localServerUrlMap: {
    index: 'http://localhost:8001'
  },
  partnerApp: {
    epcServer: {
      host: 'localhost',
      port: 8000,
      requestPrefix: ''
    },
    fileServer: {
      protocol: 'http',
      host: 'res2.dev.servision.com.cn',
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
    host: '10.0.0.80',
    port: 6379,
    options: {
      password: '111111'
    },
    namespace: '', //redis key前缀
    ttl: 60 * 60, //过期时间，单位s，默认7200
    wipe: 60 * 10, //定期清除超时session间隔时间，单位s，默认600
    trustProxy: false //只接受https cookies
  },
  redisCache: {
    host: '10.0.0.80',
    port: 6379,
    password: '111111',
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
  helpDocUrl: 'http://res2.dev.servision.com.cn/baic/manual/epc/',
  epcLoginUrl: 'http://localhost:8000/login',
  epcIndexUrl: 'http://localhost:8000/epc/catalog',
  epcSessionLocked: 'http://localhost:8000/error/sessionLocked'
};

module.exports = config;