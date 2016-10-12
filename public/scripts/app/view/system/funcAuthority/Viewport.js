Ext.define('APP.view.system.funcAuthority.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.system.funcAuthority.Query',
    'APP.view.system.funcAuthority.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'funcauthorityquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'funcauthoritygrid',
    region: 'center'
  }]
});