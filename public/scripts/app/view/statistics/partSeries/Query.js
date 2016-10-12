Ext.define('APP.view.statistics.partSeries.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticspartseriesquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  items: [{
    items: [{
      fieldLabel: '配件编码',
      name: 'partCode',
      toUppercase: true
    }, {
      fieldLabel: '配件名称',
      name: 'partName'
    }, {
      xtype: 'basecombo',
      fieldLabel: '配件状态',
      name: 'partStatusCode',
      value: '',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/part-status'
    }, {
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/group',
      value: '',
      clearFields: ['subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '分组',
      name: 'subGroupCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'groupCode',
      url: APP.globalConfig.restpath + '/selector/list/sub-group?groupCode={id}',
      value: ''
    }]
  }]
});