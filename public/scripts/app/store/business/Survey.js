Ext.define('APP.store.business.Survey', {
	extend: 'Ext.ux.store.Base',
	model: 'APP.model.business.Survey',
	proxyAPI: {
		read: APP.globalConfig.restpath + '/business/survey',
		create: APP.globalConfig.restpath + '/business/survey',
		update: APP.globalConfig.restpath + '/business/survey',
		destroy: APP.globalConfig.restpath + '/business/survey'
	}
});