Ext.define('APP.view.part.partStatus.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.partStatus.Query',
    'APP.view.part.partStatus.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'partstatusquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'partstatusgrid',
    region: 'center'
  }]
});