Ext.define('APP.view.part.partPhoto.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.part.partPhoto.Query',
    'APP.view.part.partPhoto.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'partphotoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'partphotogrid',
    region: 'center'
  }]
});