Ext.define('APP.view.atlas.epcData.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.atlas.epcData.Query',
    'APP.view.atlas.epcData.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'epcdataquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'epcdatagrid',
    region: 'center'
  }]
});