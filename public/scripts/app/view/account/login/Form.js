Ext.define('APP.view.account.login.Form', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.loginform',
	requires: ['Ext.ux.plugin.VerifyCodeField'],
	title : '用户登录',
	frame : true,
	width : 420,
	bodyPadding : 2,
	defaults:{
		border:0
	},
	items : [ {
		xtype : 'panel',
		height: 30,
		margin: '0 0 15 0',
		bodyStyle : "background-color:#F1F1F1;",
		layout : {
			align : 'middle',
			pack : 'center',
			type : 'hbox'
		},
		items: [{
			xtype:'panel',
			border : 0,
			bodyStyle : "background-color:#F1F1F1;",
			html:'<h2 style="padding:0;margin:0;font-family:Microsoft Yahei;font-size:16pt;">电子配件目录epc系统管理中心</h2>'
		}]
	}, {
		xtype : 'form',
		id: "login-form",
		defaultType : 'textfield',
		bodyStyle : "background-color:#F1F1F1;",
		defaults : {
			width : 280,
			margin : '5 0 5 40',
			labelWidth : 50,
			labelPad : 10,
			enableKeyEvents:true
		},
		items : [ {
			allowBlank : false,
			fieldLabel : '账 &nbsp;&nbsp;号',
			id: 'tb-name',
			name : 'name',
			regex: /[a-zA-Z0-9]+/,
			blankText : '账号不能为空'
		}, {
			allowBlank : false,
			fieldLabel : '密 &nbsp;&nbsp;码',
			id: 'tb-password',
			name : 'password',
			blankText : '密码不能为空',
			inputType : 'password'
		}, {
			xtype : 'checkbox',
			fieldLabel : '记住我',
			inputValue: "true",
			name : 'rememberMe'
		} ]
	} ],

	
	dockedItems : [ {
		xtype : 'toolbar',
		ui : "footer",
		dock : 'bottom',
		defaults : {
			width : 70,
			height : 22,
			margin: '0 10 15 0'
		},
		
		layout : {
			align : 'middle',
			pack : 'center',
			type : 'hbox'
		},
		items : [ {
			xtype : 'button',
			id: "btn-login",
			text : "登录"
		}, { 
			xtype : 'button',
			id : "btn-reset",
			text : "重置"
		} ]
	} ]
});
