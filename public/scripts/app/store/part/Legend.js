Ext.define('APP.store.part.Legend', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Legend',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/legend',
    create: APP.globalConfig.restpath + '/part/legend',
    update: APP.globalConfig.restpath + '/part/legend',
    destroy: APP.globalConfig.restpath + '/part/legend/index'
  }
});