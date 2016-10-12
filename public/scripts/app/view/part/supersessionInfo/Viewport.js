Ext.define('APP.view.part.supersessionInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.supersessionInfo.Query',
    'APP.view.part.supersessionInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supersessioninfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'supersessioninfogrid',
    region: 'center'
  }]
});