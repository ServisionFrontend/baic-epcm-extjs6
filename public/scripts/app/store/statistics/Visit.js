Ext.define('APP.store.statistics.Visit', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.Visit',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/visit'
  }
});