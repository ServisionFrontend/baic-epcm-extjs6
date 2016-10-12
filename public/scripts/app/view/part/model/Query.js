Ext.define('APP.view.part.model.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.modelquery',
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
      clearFields: ['seriesCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      withAll: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      value: ''
    }, {
      fieldLabel: '车型组名称',
      name: 'name'
    }]
  }]
});