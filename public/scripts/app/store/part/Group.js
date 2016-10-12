Ext.define('APP.store.part.Group', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Group',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/group',
    create: APP.globalConfig.restpath + '/part/group',
    update: APP.globalConfig.restpath + '/part/group',
    destroy: APP.globalConfig.restpath + '/part/group/index'
  }
});