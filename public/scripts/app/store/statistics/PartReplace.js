Ext.define('APP.store.statistics.PartReplace', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.statistics.PartReplace',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/statistics/partReplace'
  }
});