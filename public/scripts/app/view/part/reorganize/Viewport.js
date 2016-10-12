Ext.define('APP.view.part.reorganize.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.reorganize.Query',
    'APP.view.part.reorganize.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'reorganizequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'reorganizegrid',
    region: 'center'
  }]
});