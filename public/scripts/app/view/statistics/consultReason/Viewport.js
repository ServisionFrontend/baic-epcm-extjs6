Ext.define('APP.view.statistics.consultReason.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.consultReason.Query',
    'APP.view.statistics.consultReason.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsconsultreasonquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsconsultreasongrid',
    region: 'center'
  }]
});