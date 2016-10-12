Ext.define('APP.view.part.reorganizeModel.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.reorganizeModel.Query',
    'APP.view.part.reorganizeModel.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'reorganizemodelquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'reorganizemodelgrid',
    region: 'center'
  }]
});