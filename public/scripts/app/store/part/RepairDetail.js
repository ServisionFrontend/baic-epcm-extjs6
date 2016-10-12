Ext.define('APP.store.part.RepairDetail', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.part.RepairDetail',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/part/repairDetail',
    create: APP.globalConfig.restpath + '/part/repairDetail',
    update: APP.globalConfig.restpath + '/part/repairDetail',
    destroy: APP.globalConfig.restpath + '/part/repairDetail/index'
  }
});