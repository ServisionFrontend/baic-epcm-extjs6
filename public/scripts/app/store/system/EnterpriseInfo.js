Ext.define('APP.store.system.EnterpriseInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.system.EnterpriseInfo',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/system/enterpriseInfo',
    create: APP.globalConfig.restpath + '/system/enterpriseInfo',
    update: APP.globalConfig.restpath + '/system/enterpriseInfo',
    destroy: APP.globalConfig.restpath + '/system/enterpriseInfo/index'
  }
});