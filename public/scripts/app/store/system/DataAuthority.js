Ext.define('APP.store.system.DataAuthority', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.system.DataAuthority',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/system/dataAuthority',
    create: APP.globalConfig.restpath + '/system/dataAuthority',
    update: APP.globalConfig.restpath + '/system/dataAuthority',
    destroy: APP.globalConfig.restpath + '/system/dataAuthority/index'
  }
});