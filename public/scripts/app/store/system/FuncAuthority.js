Ext.define('APP.store.system.FuncAuthority', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.system.FuncAuthority',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/system/funcAuthority',
    create: APP.globalConfig.restpath + '/system/funcAuthority',
    update: APP.globalConfig.restpath + '/system/funcAuthority',
    destroy: APP.globalConfig.restpath + '/system/funcAuthority/index'
  }
});