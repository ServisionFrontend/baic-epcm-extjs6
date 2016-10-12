Ext.define('APP.view.system.dataAuthority.Query', {
	extend: 'Ext.ux.component.filter.Query',
	alias: 'widget.dataauthorityquery',
	requires: [
		'Ext.ux.component.combo.BaseCombo'
	],
	items: [{
		items: [{
			fieldLabel: '权限包编码',
			name: 'code'
		}, {
			fieldLabel: '权限包名称',
			name: 'name'
		}, {
			xtype: 'basecombo',
			fieldLabel: '品牌',
			name: 'brandCode',
			storeAutoLoad: true,
			withAll: true,
			url: APP.globalConfig.restpath + '/selector/list/brand',
			value: ''
		}]
	}]
});