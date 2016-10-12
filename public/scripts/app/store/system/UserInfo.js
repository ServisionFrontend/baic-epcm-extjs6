Ext.define('APP.store.system.UserInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.system.UserInfo',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/system/userInfo/index',
    create: APP.globalConfig.restpath + '/system/userInfo/index',
    update: APP.globalConfig.restpath + '/system/userInfo/index',
    destroy: APP.globalConfig.restpath + '/system/userInfo/index'
  }
});