Ext.define('APP.store.part.Model', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Model',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/model',
    create: APP.globalConfig.restpath + '/part/model',
    update: APP.globalConfig.restpath + '/part/model',
    destroy: APP.globalConfig.restpath + '/part/model/index'
  }
});