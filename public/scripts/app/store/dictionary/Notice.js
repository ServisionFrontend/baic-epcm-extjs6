Ext.define('APP.store.dictionary.Notice', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.dictionary.Notice',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/dictionary/notice',
    create: APP.globalConfig.restpath + '/dictionary/notice',
    update: APP.globalConfig.restpath + '/dictionary/notice',
    destroy: APP.globalConfig.restpath + '/dictionary/notice/index'
  }
});