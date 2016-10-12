Ext.define('APP.view.part.brand.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.brand.Query',
    'APP.view.part.brand.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'brandquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'brandgrid',
    region: 'center'
  }]
});