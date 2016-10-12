Ext.define('APP.view.business.notice.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  alias: 'widget.noticequery',
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
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/message/type/select',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '通知状态',
      name: 'status',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/option/status.message',
      value: ''
    }, {
      xtype: 'groupdatepicker',
      fieldLabel: '发布时间',
      startName: 'issueAfter',
      endName: 'issueBefore',
      allowBlank: true
    }]
  }]
});