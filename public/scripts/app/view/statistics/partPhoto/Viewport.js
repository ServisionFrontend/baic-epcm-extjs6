Ext.define('APP.view.statistics.partPhoto.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.partPhoto.Query',
    'APP.view.statistics.partPhoto.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticspartphotoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticspartphotogrid',
    region: 'center'
  }]
});