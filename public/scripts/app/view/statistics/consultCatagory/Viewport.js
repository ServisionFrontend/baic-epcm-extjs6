Ext.define('APP.view.statistics.consultCatagory.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.consultCatagory.Query',
    'APP.view.statistics.consultCatagory.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsconsultcatagoryquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsconsultcatagorygrid',
    region: 'center'
  }]
});