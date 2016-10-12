Ext.define('APP.store.system.AreaInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.system.AreaInfo',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/system/areaInfo',
    create: APP.globalConfig.restpath + '/system/areaInfo',
    update: APP.globalConfig.restpath + '/system/areaInfo',
    destroy: APP.globalConfig.restpath + '/system/areaInfo/index'
  }
});