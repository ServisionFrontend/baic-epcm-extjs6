Ext.define('APP.view.system.dataAuthority.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.system.dataAuthority.Query',
    'APP.view.system.dataAuthority.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dataauthorityquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'dataauthoritygrid',
    region: 'center'
  }]
});