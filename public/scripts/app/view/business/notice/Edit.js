Ext.define('APP.view.business.notice.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '通知',
  updateDisableItems: ['code'],
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.combo.GroupCombo'
  ],
  formSubmit: true,
  constructor: function(config) {
    var me = this;

    if (config.editMode === 'update') {
      me.items[0].items[5].hidden = false;
      me.items[0].items[4].allowBlank = true;
    } else {
      me.items[0].items[5].hidden = true;
      me.items[0].items[4].allowBlank = false;
    }

    me.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '通知编码',
      name: 'code'
    }, {
      fieldLabel: '通知主题',
      name: 'subject'
    }, {
      xtype: 'basecombo',
      fieldLabel: '通知类型',
      name: 'typeCode',
      storeAutoLoad: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/message/type/select',
      value: ''
    }, {
      xtype: 'groupcombo',
      fieldLabel: '适用车系',
      name: 'applySeries',
      storeAutoLoad: true,
      groupCode: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/options?args=/catelog/series',
      getValue: function() {
        return Ext.isArray(this.value) && this.value.length ? this.value.join(',') : [];
      }
    }, {
      xtype: 'filefield',
      fieldLabel: '附件',
      name: 'file',
      buttonText: '浏览',
      anchor: '100%',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      fieldLabel: '已经上传文件',
      name: 'filename',
      allowBlank: true,
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '注: (上传单个文件必须<=4MB)'
    }]
  }]
});