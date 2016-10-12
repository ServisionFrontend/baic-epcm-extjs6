Ext.define('APP.view.part.model.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.model.Query',
    'APP.view.part.model.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'modelquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'modelgrid',
    region: 'center'
  }]
});