Ext.define('APP.view.master.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: [
		'Ext.util.common',
		'Ext.util.pingyin',
		'Ext.ux.plugin.TabCloseMenu',
	],
	id: 'master-viewport',
	layout: 'border',
	border: true,
	items: [{
		id: 'header-panel',
		region: 'north',
		xtype: 'masterheader',
		bodyStyle: "background-color: #3E495E; color: #fff; ",
		height: 60
	}, {
		id: 'menu-panel',
		xtype: 'tabpanel',
		title: "功能菜单",
		iconCls: 'icon-navigation-menu',
		region: 'west',
		width: 220,
		collapsible: true,
		split: true,
		margins: '0 3 0 0',
		tabPosition: 'bottom',
		items: [{
			id: 'tree-menu',
			name: 'tree-menu',
			title: "树状菜单",
			height: 500,
			action: 'main-menu',
			xtype: "mastertreemenu"
		}, {
			id: 'cascading-menu',
			name: 'cascading-menu',
			title: '层叠菜单',
			xtype: "mastercascadingmenu"
		}]
	}, {
		id: "tabs",
		region: 'center',
		xtype: 'tabpanel',
		margins: '0 0 5 0',
		items: [],
		plugins: Ext.create('Ext.ux.plugin.TabCloseMenu')
	}]
});