Ext.define('APP.store.dictionary.Problem', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.dictionary.Problem',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/dictionary/problem',
    create: APP.globalConfig.restpath + '/dictionary/problem',
    update: APP.globalConfig.restpath + '/dictionary/problem',
    destroy: APP.globalConfig.restpath + '/dictionary/problem/index'
  }
});