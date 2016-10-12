Ext.define('APP.view.statistics.consultArea.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.statistics.consultArea.Query',
    'APP.view.statistics.consultArea.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsconsultareaquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsconsultareagrid',
    region: 'center'
  }]
});