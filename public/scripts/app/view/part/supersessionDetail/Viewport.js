Ext.define('APP.view.part.supersessionDetail.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.supersessionDetail.Query',
    'APP.view.part.supersessionDetail.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supersessiondetailquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'supersessiondetailgrid',
    region: 'center'
  }]
});