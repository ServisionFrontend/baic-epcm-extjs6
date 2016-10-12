Ext.define('APP.view.part.usage.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.usagequery',
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
      url: APP.globalConfig.restpath + '/selector/list/series?sort=code',
      value: '',
      clearFields: ['modelGroupCode', 'modelCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型组',
      name: 'modelGroupCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'seriesCode',
      url: APP.globalConfig.restpath + '/selector/list/model-group?seriesCode={id}&sort=code',
      value: '',
      clearFields: ['modelCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '整编车型',
      name: 'modelCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'modelGroupCode',
      url: APP.globalConfig.restpath + '/selector/list/model?modelGroupCode={id}&sort=code',
      value: ''
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
  }, {
    items: [{
      fieldLabel: '图例编码',
      name: 'imageCode',
      toUppercase: true
    }, {
      fieldLabel: '图例名称',
      name: 'imageName'
    }, {
      fieldLabel: '配件编码',
      name: 'partCode',
      toUppercase: true
    }, {
      fieldLabel: '配件名称',
      name: 'partName'
    }]
  }]
});