Ext.define('APP.view.part.series.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.series.Query',
    'APP.view.part.series.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'seriesquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'seriesgrid',
    region: 'center'
  }]
});