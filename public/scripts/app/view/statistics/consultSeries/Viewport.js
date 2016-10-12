Ext.define('APP.view.statistics.consultSeries.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.consultSeries.Query',
    'APP.view.statistics.consultSeries.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsconsultseriesquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsconsultseriesgrid',
    region: 'center'
  }]
});