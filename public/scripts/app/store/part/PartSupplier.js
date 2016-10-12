Ext.define('APP.store.part.PartSupplier', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.PartSupplier',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/partSupplier',
    create: APP.globalConfig.restpath + '/part/partSupplier',
    update: APP.globalConfig.restpath + '/part/partSupplier',
    destroy: APP.globalConfig.restpath + '/part/partSupplier/index'
  }
});