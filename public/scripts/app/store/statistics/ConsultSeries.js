Ext.define('APP.store.statistics.ConsultSeries', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ConsultSeries',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/consultSeries'
  }
});