Ext.define('APP.store.dictionary.PartStatus', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.dictionary.PartStatus',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/dictionary/partStatus',
    create: APP.globalConfig.restpath + '/dictionary/partStatus',
    update: APP.globalConfig.restpath + '/dictionary/partStatus',
    destroy: APP.globalConfig.restpath + '/dictionary/partStatus/index'
  }
});