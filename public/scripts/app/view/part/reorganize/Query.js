Ext.define('APP.view.part.reorganize.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.reorganizequery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      fieldLabel: '整车编码',
      name: 'vehicleCode',
      toUppercase: true
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/series',
      value: '',
      clearFields: ['modelGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型组',
      name: 'modelGroupCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'seriesCode',
      url: APP.globalConfig.restpath + '/selector/list/model-group?seriesCode={id}',
      value: '',
      clearFields: ['']
    }, {
      xtype: 'basecombo',
      fieldLabel: '发布标识',
      name: 'isRelease',
      displayFormat: '',
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
    }, {
      xtype: 'basecombo',
      fieldLabel: '校验状态',
      name: 'isVerify',
      displayFormat: '',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '已通过',
        code: true
      }, {
        name: '未通过',
        code: false
      }]
    }]
  }]
});