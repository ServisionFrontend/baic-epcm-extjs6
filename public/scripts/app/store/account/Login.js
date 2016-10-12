Ext.define('APP.store.account.Users', {
	extend: 'Ext.ux.store.Base',
	model: 'APP.model.account.Users',
	isUpload: true,
	proxyAPI: {
		read: 'account/user',
		create: 'account/user',
		update: 'account/user',
		destroy: 'account/user'
	}
});