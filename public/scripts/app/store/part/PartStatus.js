Ext.define('APP.store.part.PartStatus', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.PartStatus',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/partStatus',
    create: APP.globalConfig.restpath + '/part/partStatus',
    update: APP.globalConfig.restpath + '/part/partStatus',
    destroy: APP.globalConfig.restpath + '/part/partStatus/index'
  }
});