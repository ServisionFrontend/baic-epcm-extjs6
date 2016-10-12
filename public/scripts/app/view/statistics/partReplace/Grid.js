Ext.define('APP.view.statistics.partReplace.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.statisticspartreplacegrid',
  store: 'APP.store.statistics.PartReplace',
  rownumberer: true,
  controlButtons: [],
  tbar: null,
  columns: [{
    text: '用法品牌编码',
    dataIndex: 'brandCode',
    width: 180
  }, {
    text: '用法品牌名称',
    dataIndex: 'brandName',
    width: 180
  }, {
    text: '系统配件总量',
    dataIndex: 'totalPartAmount',
    width: 180
  }, {
    text: '同期配件增量',
    dataIndex: 'newPartAmount',
    width: 180
  }, {
    text: '系统替换配件总量',
    dataIndex: 'totalSubstitutePartAmount',
    width: 180
  }, {
    text: '新增替换配件总量',
    dataIndex: 'newSubstitutePartAmount',
    width: 180
  }, {
    text: '操作',
    dataIndex: 'action',
    width: 80,
    sortable: false,
    hidden: !APP.permissionConfig.hasOperation('epcm:report:brand-substitute:export'),
    renderer: function (val, metaData, record) {
      var startDate = record.get('startDate') ? ('startDate=' + record.get('startDate') + '&') : '';
      var endDate = record.get('endDate') ? ('endDate=' + record.get('endDate') + '&') : '';
      var brandCode  = record.get('brandCode') ? ('brandCode=' + record.get('brandCode') + '&') : '';

      var query = '?' + startDate + endDate + brandCode;

      return '<a target="_blank" href="/statistics/partReplace/exportDetail'+ query+'">导出明细</a>';
    }
  }]
});