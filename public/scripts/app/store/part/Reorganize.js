Ext.define('APP.store.part.Reorganize', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.Reorganize',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/reorganize',
    create: APP.globalConfig.restpath + '/part/reorganize',
    update: APP.globalConfig.restpath + '/part/reorganize',
    destroy: APP.globalConfig.restpath + '/part/reorganize/index'
  }
});