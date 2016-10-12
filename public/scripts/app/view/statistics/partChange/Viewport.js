Ext.define('APP.view.statistics.partChange.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.partChange.Query',
    'APP.view.statistics.partChange.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticspartchangequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticspartchangegrid',
    region: 'center'
  }]
});