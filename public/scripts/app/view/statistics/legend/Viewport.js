Ext.define('APP.view.statistics.legend.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.legend.Query',
    'APP.view.statistics.legend.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticslegendquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticslegendgrid',
    region: 'center'
  }]
});