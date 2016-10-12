Ext.define('APP.store.part.ReorganizeModel', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.ReorganizeModel',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/reorganizeModel',
    create: APP.globalConfig.restpath + '/part/reorganizeModel',
    update: APP.globalConfig.restpath + '/part/reorganizeModel',
    destroy: APP.globalConfig.restpath + '/part/reorganizeModel/index'
  }
});