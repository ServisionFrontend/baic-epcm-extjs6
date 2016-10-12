Ext.define('APP.view.dictionary.partType.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.dictionary.partType.Query',
    'APP.view.dictionary.partType.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dparttypequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'dparttypegrid',
    region: 'center'
  }]
});