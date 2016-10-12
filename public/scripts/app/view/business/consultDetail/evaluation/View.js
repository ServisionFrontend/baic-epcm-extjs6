Ext.define('APP.view.business.consultDetail.evaluation.View', {
	extend: 'Ext.form.Panel',
	alias: 'widget.evaluationview',
	requires: [
		'Ext.ux.component.combo.BaseCombo'
	],
	title: '问题评价',
	mixins: {
		viewBase: 'APP.view.common.class.Base'
	},
	width: 1024,
	layout: {
		type: 'vbox'
	},
	defaults: {
		margin: 'auto auto 5 auto',
		border: false,
		width: '100%',
		layout: {
			type: 'hbox'
		},
		defaults: {
			xtype: 'displayfield',
			layout: {
				type: 'hbox'
			},
			width: 250,
			labelPad: 10,
			labelWidth: 55,
			margin: 'auto 15 auto auto'
		}
	},
	bodyPadding: 5,
	bindFormData: function(result) {
		var me = this,
			form = me.getForm();

		form.setValues(result);
	},
	items: [{
		items: [{
			fieldLabel: '问题状态',
			name: 'statusName'
		}, {
			width: 340,
			fieldLabel: '服务质量',
			name: 'quality'
		}]
	}, {
		defaults: {
			xtype: 'displayfield',
			layout: {
				type: 'hbox'
			}
		},
		items: [{
			labelPad: 10,
			labelWidth: 90,
			fieldLabel: '服务质量评语',
			name: 'qualityComment'
		}]
	}]
});