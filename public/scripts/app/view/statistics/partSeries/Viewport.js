Ext.define('APP.view.statistics.partSeries.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.partSeries.Query',
    'APP.view.statistics.partSeries.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticspartseriesquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticspartseriesgrid',
    region: 'center'
  }]
});