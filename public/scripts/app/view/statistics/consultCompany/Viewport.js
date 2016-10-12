Ext.define('APP.view.statistics.consultCompany.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.consultCompany.Query',
    'APP.view.statistics.consultCompany.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsconsultcompanyquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsconsultcompanygrid',
    region: 'center'
  }]
});