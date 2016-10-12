Ext.define('APP.view.atlas.print.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.printquery',
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
      clearFields: ['seriesCode', 'modelCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      withAll: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      value: '',
      clearFields: ['modelCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型',
      name: 'modelCode',
      withAll: true,
      dependField: 'seriesCode',
      url: APP.globalConfig.restpath + '/selector/list/model?seriesCode={id}',
      value: ''
    }]
  }]
});