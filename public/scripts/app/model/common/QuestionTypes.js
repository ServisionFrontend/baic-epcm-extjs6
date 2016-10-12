Ext.define('APP.model.common.QuestionTypes', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
		mapping: 'code'
	}, {
		name: 'text',
		mapping: 'name'
	}, {
		name: 'children'
	}]
});