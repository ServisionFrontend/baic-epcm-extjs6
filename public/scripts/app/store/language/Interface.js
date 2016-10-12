Ext.define('APP.store.language.Interface', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.language.Interface',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/language/interface',
    create: APP.globalConfig.restpath + '/language/interface',
    update: APP.globalConfig.restpath + '/language/interface',
    destroy: APP.globalConfig.restpath + '/language/interface/index'
  }
});