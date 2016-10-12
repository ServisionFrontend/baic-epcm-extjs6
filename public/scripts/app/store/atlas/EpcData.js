Ext.define('APP.store.atlas.EpcData', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.atlas.EpcData',
  sorters: [
    {
      property: 'createdOn',
      direction: 'DESC'
    }
  ],
  proxyAPI: {
    read: APP.globalConfig.restpath + '/atlas/epcData',
    create: APP.globalConfig.restpath + '/atlas/epcData',
    update: APP.globalConfig.restpath + '/atlas/epcData',
    destroy: APP.globalConfig.restpath + '/atlas/epcData/index'
  }
});