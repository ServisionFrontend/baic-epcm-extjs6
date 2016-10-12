Ext.define('APP.store.part.KeyPart', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.KeyPart',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/keyPart',
    create: APP.globalConfig.restpath + '/part/keyPart',
    update: APP.globalConfig.restpath + '/part/keyPart',
    destroy: APP.globalConfig.restpath + '/part/keyPart/index'
  }
});