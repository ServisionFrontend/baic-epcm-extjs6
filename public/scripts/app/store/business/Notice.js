Ext.define('APP.store.business.Notice', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.business.Notice',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/business/notice',
    create: APP.globalConfig.restpath + '/business/notice',
    update: APP.globalConfig.restpath + '/business/notice',
    destroy: APP.globalConfig.restpath + '/business/notice/index'
  }
});