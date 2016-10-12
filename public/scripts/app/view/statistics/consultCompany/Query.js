Ext.define('APP.view.statistics.consultCompany.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsconsultcompanyquery',
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
      fieldLabel: '企业编码',
      name: 'enterpriseCode',
      toUppercase: true
    }]
  }]
});