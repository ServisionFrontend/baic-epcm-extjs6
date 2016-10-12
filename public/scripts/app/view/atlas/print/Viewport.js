Ext.define('APP.view.atlas.print.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.atlas.print.Query',
    'APP.view.atlas.print.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'printquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'printgrid',
    region: 'center'
  }]
});