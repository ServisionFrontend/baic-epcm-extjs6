Ext.define('APP.view.part.series.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.seriesquery',
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
      value: ''
    }, {
      fieldLabel: '车系名称',
      name: 'name'
    }]
  }]
});