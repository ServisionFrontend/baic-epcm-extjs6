Ext.define('APP.store.common.QuestionTypes', {
	extend: 'Ext.data.TreeStore',
	model: 'APP.model.common.QuestionTypes',
	proxy: {
		type: 'ajax',
		url: APP.globalConfig.restpath + '/selector/options?args=/question/type/list',
		reader: {
			type: 'json'
		}
	}
});