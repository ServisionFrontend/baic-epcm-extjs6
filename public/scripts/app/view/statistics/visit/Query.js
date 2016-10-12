Ext.define('APP.view.statistics.visit.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsvisitquery',
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
      fieldLabel: '企业编码',
      name: 'enterpriseCode',
      toUppercase: true
    }, {
      fieldLabel: '企业名称',
      name: 'enterpriseName'
    }, {
      xtype: 'basecombo',
      fieldLabel: '企业类型',
      name: 'enterpriseType',
      storeAutoLoad: true,
      withAll: true,
      value: '',
      localData: [
        {code: '', name: '全部'},
        {code: 1, name: '北汽外部企业'},
        {code: 0, name: '北汽内部企业'},
        {code: 2, name: 'DMS管理企业'}
      ]
    }]
  }, {
    items: [{
      fieldLabel: '省份',
      name: 'enterpriseProvinceName'
    }, {
      fieldLabel: '登录账户',
      name: 'account'
    }]
  }]
});