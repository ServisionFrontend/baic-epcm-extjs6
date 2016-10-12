Ext.define('APP.store.atlas.Publish', {
  extend: 'Ext.ux.store.Base',
  model: 'APP.model.atlas.Publish',
  proxyAPI: {
    read: APP.globalConfig.restpath + '/atlas/publish',
    create: APP.globalConfig.restpath + '/atlas/publish',
    update: APP.globalConfig.restpath + '/atlas/publish',
    destroy: APP.globalConfig.restpath + '/atlas/publish/index'
  }
});