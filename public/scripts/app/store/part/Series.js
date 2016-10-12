Ext.define('APP.store.part.Series', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Series',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/series',
    create: APP.globalConfig.restpath + '/part/series',
    update: APP.globalConfig.restpath + '/part/series',
    destroy: APP.globalConfig.restpath + '/part/series/index'
  }
});