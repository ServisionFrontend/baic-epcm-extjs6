Ext.define('APP.store.statistics.PartChange', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.PartChange',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/partChange'
  }
});