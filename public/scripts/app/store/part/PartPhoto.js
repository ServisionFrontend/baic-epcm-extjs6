Ext.define('APP.store.part.PartPhoto', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.PartPhoto',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/partPhoto',
    create: APP.globalConfig.restpath + '/part/partPhoto',
    update: APP.globalConfig.restpath + '/part/partPhoto',
    destroy: APP.globalConfig.restpath + '/part/partPhoto/index'
  }
});