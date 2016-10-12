Ext.define('APP.store.statistics.ConsultCompany', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ConsultCompany',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/consultCompany'
  }
});