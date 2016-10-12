Ext.define('APP.store.statistics.ConsultArea', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ConsultArea',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/consultArea'
  }
});