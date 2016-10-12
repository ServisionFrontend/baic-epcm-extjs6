Ext.define('APP.view.part.repairDetail.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.repairDetail.Query',
    'APP.view.part.repairDetail.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'repairdetailquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'repairdetailgrid',
    region: 'center'
  }]
});