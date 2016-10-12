Ext.define('APP.store.statistics.Legend', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.Legend',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/legend'
  }
});