Ext.define('APP.view.statistics.seriesPart.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.seriesPart.Query',
    'APP.view.statistics.seriesPart.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsseriespartquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsseriespartgrid',
    region: 'center'
  }]
});