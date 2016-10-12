Ext.define('APP.view.system.role.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.system.role.Query',
    'APP.view.system.role.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'rolequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'rolegrid',
    region: 'center'
  }]
});