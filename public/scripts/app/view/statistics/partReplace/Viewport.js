Ext.define('APP.view.statistics.partReplace.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.partReplace.Query',
    'APP.view.statistics.partReplace.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticspartreplacequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticspartreplacegrid',
    region: 'center'
  }]
});