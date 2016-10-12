Ext.onReady(function() {
	var extjsConfig = APP.extjsConfig;
	var namespace = APP.globalConfig.namespace;
	var startPage = extjsConfig.pages[extjsConfig.pageCode];

	Ext.QuickTips.init();

	Ext.Loader.setConfig({
		enabled: true,
		paths: {
			'Ext.ux': extjsConfig.uxFolder
		}
	});

	Ext.application({
		name: APP.globalConfig.namespace,
		appFolder: extjsConfig.appFolder,
		controllers: [startPage.controller],
		launch: function() {
			Ext.create(namespace + ".view." + startPage.viewport);
		}
	});
});