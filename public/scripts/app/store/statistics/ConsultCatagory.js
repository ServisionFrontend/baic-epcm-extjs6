Ext.define('APP.store.statistics.ConsultCatagory', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ConsultCatagory',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/consultCatagory'
  }
});