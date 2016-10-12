Ext.define('APP.store.part.Supplier', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Supplier',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/supplier',
    create: APP.globalConfig.restpath + '/part/supplier',
    update: APP.globalConfig.restpath + '/part/supplier',
    destroy: APP.globalConfig.restpath + '/part/supplier/index'
  }
});