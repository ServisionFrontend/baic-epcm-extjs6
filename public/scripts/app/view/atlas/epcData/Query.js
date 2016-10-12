Ext.define('APP.view.atlas.epcData.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.epcdataquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '发布服务器',
      name: 'dbCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/coreList/db-config',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '发布状态',
      name: 'status',
      withAll: true,
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '发布中',
        code: 0
      }, {
        name: '已发布',
        code: 1
      }, {
        name: '发布失败',
        code: 2
      }]
    }, {
      fieldLabel: '任务名称',
      name: 'taskName'
    }, {
      xtype: 'groupdatepicker',
      fieldLabel: '创建日期',
      startName: 'startDate',
      endName: 'endDate',
      allowBlank: true
    }]
  }]
});