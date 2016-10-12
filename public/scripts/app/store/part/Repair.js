Ext.define('APP.store.part.Repair', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Repair',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/repair',
    create: APP.globalConfig.restpath + '/part/repair',
    update: APP.globalConfig.restpath + '/part/repair',
    destroy: APP.globalConfig.restpath + '/part/repair/index'
  }
});