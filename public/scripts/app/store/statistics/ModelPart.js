Ext.define('APP.store.statistics.ModelPart', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.ModelPart',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/modelPart'
  }
});