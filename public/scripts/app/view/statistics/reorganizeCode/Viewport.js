Ext.define('APP.view.statistics.reorganizeCode.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.reorganizeCode.Query',
    'APP.view.statistics.reorganizeCode.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsreorganizecodequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsreorganizecodegrid',
    region: 'center'
  }]
});