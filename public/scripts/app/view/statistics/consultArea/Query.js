Ext.define('APP.view.statistics.consultArea.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsconsultareaquery',
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
      fieldLabel: '区域省份',
      name: 'provinceCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/coreList/district?grade=2&sort=name',
      value: ''
    }]
  }]
});