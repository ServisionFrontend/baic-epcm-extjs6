Ext.define('APP.view.language.interface.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.language.interface.Query',
    'APP.view.language.interface.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'interfacequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'interfacegrid',
    region: 'center'
  }]
});