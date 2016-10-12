Ext.define('APP.store.atlas.Print', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.atlas.Print',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/atlas/print',
    create: APP.globalConfig.restpath + '/atlas/print',
    update: APP.globalConfig.restpath + '/atlas/print',
    destroy: APP.globalConfig.restpath + '/atlas/print/index'
  }
});