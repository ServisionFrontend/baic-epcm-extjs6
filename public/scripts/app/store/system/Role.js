Ext.define('APP.store.system.Role', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.system.Role',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/system/role',
    create: APP.globalConfig.restpath + '/system/role',
    update: APP.globalConfig.restpath + '/system/role',
    destroy: APP.globalConfig.restpath + '/system/role'
  }
});