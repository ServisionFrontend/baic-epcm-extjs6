Ext.define('APP.store.statistics.ReorganizeCode', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ReorganizeCode',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/reorganizeCode'
  }
});