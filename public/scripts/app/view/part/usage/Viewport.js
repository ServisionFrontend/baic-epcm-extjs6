Ext.define('APP.view.part.usage.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.usage.Query',
    'APP.view.part.usage.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'usagequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'usagegrid',
    region: 'center'
  }]
});