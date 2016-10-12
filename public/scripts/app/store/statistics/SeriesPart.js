Ext.define('APP.store.statistics.SeriesPart', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.SeriesPart',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/seriesPart'
  }
});