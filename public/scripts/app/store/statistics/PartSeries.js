Ext.define('APP.store.statistics.PartSeries', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.PartSeries',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/partSeries'
  }
});