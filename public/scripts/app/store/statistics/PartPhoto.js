Ext.define('APP.store.statistics.PartPhoto', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.PartPhoto',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/partPhoto'
  }
});