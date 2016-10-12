Ext.define('APP.view.statistics.modelPart.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.modelPart.Query',
    'APP.view.statistics.modelPart.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsmodelpartquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsmodelpartgrid',
    region: 'center'
  }]
});