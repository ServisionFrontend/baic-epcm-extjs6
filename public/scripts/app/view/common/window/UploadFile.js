Ext.define('APP.view.common.window.UploadFile', {
	extend: 'Ext.window.Window',
	title: '上传文件',
	requires: [
		'Ext.ux.plugin.LabelRequired',
		'Ext.ux.component.combo.BaseCombo'
	],
	plugins: ['formlabelrequired'],
	closable: true,
	modal: true,
	resizable: false,
	constrainHeader: true,
	layout: 'fit',
	closeAction: 'destroy',
	width: 400,

	initComponent: function() {
		var me = this;

		me.callParent(arguments);
	},

	initEvents: function() {
		var me = this,
			btnUpload = me.down('[itemId=upload]'),
			btnCancel = me.down('[itemId=cancel]');

		btnUpload.on('click', function() {
			me.doUpload();
		});

		btnCancel.on('click', function() {
			me.doCancel();
		});
	},

	doUpload: function() {
		var me = this,
			form = me.down('form').getForm();

		if (form.isValid()) {
			form.submit({
				url: '/account/user/upload',
				params: me.params,
				method: 'POST',
				waitMsg: '正在上传，请稍候...',
				success: function(that, action) {
					var root = Ext.decode(action.response.responseText);

					me.uploadSuccess(root.result);
				},
				failure: function(that, action) {
					Ext.util.errorHandler(action.response);
				}
			});
		}
	},

	uploadSuccess: function(result) {
		var me = this;

		me.fireEvent('uploadsuccess', result);
		me.doCancel();
	},

	doCancel: function() {
		var me = this;

		me.close();
	},
	items: [{
		xtype: 'form',
		bodyPadding: 10,
		items: []
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		ui: 'footer',
		defaults: {
			margins: '0 10 0 10'
		},
		layout: {
			align: 'middle',
			pack: 'center',
			type: 'hbox'
		},
		items: [{
			xtype: 'button',
			itemId: 'upload',
			text: '上传',
			iconCls: 'icon-upload'
		}, {
			xtype: 'button',
			itemId: 'cancel',
			text: '取消',
			iconCls: 'icon-cancel'
		}]
	}]
});