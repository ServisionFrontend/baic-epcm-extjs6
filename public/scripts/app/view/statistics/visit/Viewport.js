Ext.define('APP.view.statistics.visit.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.visit.Query',
    'APP.view.statistics.visit.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsvisitquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsvisitgrid',
    region: 'center'
  }]
});