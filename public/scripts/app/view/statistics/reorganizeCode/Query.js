Ext.define('APP.view.statistics.reorganizeCode.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsreorganizecodequery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker',
    'Ext.ux.plugin.LabelRequired'
  ],
  items: [{
    items: [{
      xtype: 'groupdatepicker',
      fieldLabel: '起止期间',
      startName: 'startDate',
      endName: 'endDate',
      allowBlank: false
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
      fieldLabel: '状态',
      name: 'status',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '可发布',
        code: 1
      }, {
        name: '已归档',
        code: 2
      }, {
        name: '不可发布',
        code: 0
      }]
    }]
  }]
});