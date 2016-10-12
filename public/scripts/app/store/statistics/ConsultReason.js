Ext.define('APP.store.statistics.ConsultReason', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ConsultReason',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/consultReason'
  }
});