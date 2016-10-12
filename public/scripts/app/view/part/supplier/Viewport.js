Ext.define('APP.view.part.supplier.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.supplier.Query',
    'APP.view.part.supplier.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supplierquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'suppliergrid',
    region: 'center'
  }]
});