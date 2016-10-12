Ext.define('APP.view.statistics.partChange.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.statisticspartchangegrid',
  store: 'APP.store.statistics.PartChange',
  rownumberer: true,
  controlButtons: [],
  tbar: null,
  columns: [{
    text: '系统配件总量',
    dataIndex: 'totalPartAmount',
    width: 160
  }, {
    text: '当前新增件',
    dataIndex: 'newPartAmount',
    width: 160
  }, {
    text: '当前编辑停用件',
    dataIndex: 'suspendPartAmount',
    width: 160
  }, {
    text: '操作',
    dataIndex: 'action',
    width: 80,
    sortable: false,
    hidden: !APP.permissionConfig.hasOperation('epcm:report:part-change:export'),
    renderer: function (val, metaData, record) {
      var startDate = record.get('startDate') ? ('startDate=' + record.get('startDate') + '&') : '';
      var endDate = record.get('endDate') ? ('endDate=' + record.get('endDate') + '&') : '';
      var query = '?' + startDate + endDate;


      return '<a target="_blank" href="/statistics/partChange/exportDetail'+ query+'">导出明细</a>';
    }
  }]
});