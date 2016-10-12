Ext.define('APP.view.language.data.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.language.data.Query',
    'APP.view.language.data.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dataquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'datagrid',
    region: 'center'
  }]
});