Ext.define('APP.view.part.group.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.group.Query',
    'APP.view.part.group.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'groupquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'groupgrid',
    region: 'center'
  }]
});