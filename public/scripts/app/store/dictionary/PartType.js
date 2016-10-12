Ext.define('APP.store.dictionary.PartType', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.dictionary.PartType',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/dictionary/partType',
    create: APP.globalConfig.restpath + '/dictionary/partType',
    update: APP.globalConfig.restpath + '/dictionary/partType',
    destroy: APP.globalConfig.restpath + '/dictionary/partType/index'
  }
});