Ext.define('APP.view.business.consult.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.business.consult.Query',
    'APP.view.business.consult.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'consultquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'consultgrid',
    region: 'center'
  }]
});