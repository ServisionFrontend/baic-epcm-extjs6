Ext.define('APP.store.part.SubGroup', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.SubGroup',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/subGroup',
    create: APP.globalConfig.restpath + '/part/subGroup',
    update: APP.globalConfig.restpath + '/part/subGroup',
    destroy: APP.globalConfig.restpath + '/part/subGroup/index'
  }
});