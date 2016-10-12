Ext.define('APP.view.business.notice.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.business.notice.Query',
    'APP.view.business.notice.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'noticequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'noticegrid',
    region: 'center'
  }]
});