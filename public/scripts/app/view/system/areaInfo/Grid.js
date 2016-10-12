Ext.define('APP.view.system.areaInfo.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.areainfogrid',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  store: 'APP.store.system.AreaInfo',
  rownumberer: true,
  tbar: false,
  columns: [{
    text: '区域级别',
    dataIndex: 'gradeText',
    sortable: false,
    flex: 1
  }, {
    text: '区域代码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '区域名称',
    dataIndex: 'name',
    flex: 1
  }]
});