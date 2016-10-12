Ext.define('APP.store.business.Consult', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.business.Consult',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/business/consult',
    create: APP.globalConfig.restpath + '/business/consult',
    update: APP.globalConfig.restpath + '/business/consult',
    destroy: APP.globalConfig.restpath + '/business/consult/index'
  }
});