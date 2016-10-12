Ext.define('APP.view.part.reorganizeModel.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.reorganizemodelquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: '',
      clearFields: ['seriesCode', 'modelGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
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
      value: ''
    }, {
      fieldLabel: '12位整车编码',
      name: 'code',
      toUppercase: true
    }, {
      fieldLabel: '12位整车编码描述',
      name: 'name'
    }]
  }]
});