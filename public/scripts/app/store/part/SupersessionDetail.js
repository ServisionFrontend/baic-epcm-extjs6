Ext.define('APP.store.part.SupersessionDetail', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.SupersessionDetail',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/supersessionDetail',
    create: APP.globalConfig.restpath + '/part/supersessionDetail',
    update: APP.globalConfig.restpath + '/part/supersessionDetail',
    destroy: APP.globalConfig.restpath + '/part/supersessionDetail/index'
  }
});