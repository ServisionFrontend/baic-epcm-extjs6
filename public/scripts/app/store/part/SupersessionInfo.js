Ext.define('APP.store.part.SupersessionInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.SupersessionInfo',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/supersessionInfo',
    create: APP.globalConfig.restpath + '/part/supersessionInfo',
    update: APP.globalConfig.restpath + '/part/supersessionInfo',
    destroy: APP.globalConfig.restpath + '/part/supersessionInfo/index'
  }
});