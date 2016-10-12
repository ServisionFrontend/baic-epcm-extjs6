Ext.define('APP.store.dictionary.Supersession', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.dictionary.Supersession',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/dictionary/supersession',
    create: APP.globalConfig.restpath + '/dictionary/supersession',
    update: APP.globalConfig.restpath + '/dictionary/supersession',
    destroy: APP.globalConfig.restpath + '/dictionary/supersession/index'
  }
});