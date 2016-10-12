Ext.define('APP.store.part.Usage', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Usage',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/usage/index',
    create: APP.globalConfig.restpath + '/part/usage/index',
    update: APP.globalConfig.restpath + '/part/usage/index',
    destroy: APP.globalConfig.restpath + '/part/usage/index'
  }
});