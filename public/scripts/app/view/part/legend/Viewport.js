Ext.define('APP.view.part.legend.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.legend.Query',
    'APP.view.part.legend.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'legendquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'legendgrid',
    region: 'center'
  }]
});