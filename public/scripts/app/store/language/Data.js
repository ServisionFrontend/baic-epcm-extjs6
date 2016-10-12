Ext.define('APP.store.language.Data', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.language.Data',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/language/data',
    create: APP.globalConfig.restpath + '/language/data',
    update: APP.globalConfig.restpath + '/language/data',
    destroy: APP.globalConfig.restpath + '/language/data/index'
  }
});