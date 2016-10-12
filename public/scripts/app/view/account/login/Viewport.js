Ext.define('APP.view.account.login.Viewport', {
	extend : 'Ext.container.Viewport',
	requires : [ 'APP.view.account.login.Form', 'Ext.util.MD5'],
	width : "100%",
	layout : "fit",
	items : [ {
		layout : {
			type : 'vbox',
			align : 'center',
			pack : 'center'
		},
		bodyStyle : 'background-color:#F1F1F1;',
		xtype : "panel",
		items : [{
			id: "login-form-panel",
			xtype : 'loginform'
		} ]
	} ]
});