Ext.define('APP.view.dictionary.notice.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.dictionary.notice.Query',
    'APP.view.dictionary.notice.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dnoticequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'dnoticegrid',
    region: 'center'
  }]
});