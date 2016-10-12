Ext.define('APP.view.part.reorganizeModel.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '整编车型',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: '',
      clearFields: ['seriesCode', 'modelGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: false,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      value: '',
      clearFields: ['modelGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型组',
      name: 'modelGroupCode',
      storeAutoLoad: true,
      withAll: false,
      dependField: 'seriesCode',
      url: APP.globalConfig.restpath + '/selector/list/model-group?seriesCode={id}',
      value: ''
    }, {
      fieldLabel: '12位整车编码',
      name: 'code',
      minLength: 12,
      maxLength: 12
    }, {
      fieldLabel: '12位整车编码描述',
      name: 'name'
    }]
  }]
});