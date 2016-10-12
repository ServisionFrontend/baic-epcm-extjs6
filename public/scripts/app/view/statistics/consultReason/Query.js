Ext.define('APP.view.statistics.consultReason.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsconsultreasonquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  items: [{
    items: [{
      xtype: 'groupdatepicker',
      fieldLabel: '起止期间',
      startName: 'startDate',
      endName: 'endDate',
      allowBlank: true
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '问题原因',
      name: 'reasonCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/reason/select',
      value: ''
    }]
  }]
});