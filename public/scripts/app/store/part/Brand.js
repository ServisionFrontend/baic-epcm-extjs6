Ext.define('APP.store.part.Brand', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Brand',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/brand',
    create: APP.globalConfig.restpath + '/part/brand',
    update: APP.globalConfig.restpath + '/part/brand',
    destroy: APP.globalConfig.restpath + '/part/brand/index'
  }
});