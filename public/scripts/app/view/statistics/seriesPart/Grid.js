Ext.define('APP.view.statistics.seriesPart.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.statisticsseriespartgrid',
  store: 'APP.store.statistics.SeriesPart',
  rownumberer: true,
  controlButtons: [],
  tbar: [{
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/multiPathExport',
    exportPath: 'report/series-part/download',
    hidden: !APP.permissionConfig.hasOperation('epcm:report:series-part:download')
  }],
  columns: [{
    text: '品牌编码',
    dataIndex: 'brandCode',
    width: 180
  }, {
    text: '品牌名称',
    dataIndex: 'brandName',
    width: 180
  }, {
    text: '车系编码',
    dataIndex: 'seriesCode',
    width: 180
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    width: 180
  }, {
    text: '配件种类',
    dataIndex: 'partAmount',
    width: 220
  }, {
    text: '操作',
    dataIndex: 'action',
    width: 80,
    sortable: false,
    hidden: !APP.permissionConfig.hasOperation('epcm:report:series-part:export'),
    renderer: function (val, metaData, record) {
      var startDate = record.get('startDate') ? ('startDate=' + record.get('startDate') + '&') : '';
      var endDate = record.get('endDate') ? ('endDate=' + record.get('endDate') + '&') : '';
      var brandCode  = record.get('brandCode') ? ('brandCode=' + record.get('brandCode') + '&') : '';
      var seriesCode = record.get('seriesCode') ? ('seriesCode=' + record.get('seriesCode') + '&') : '';
      var query = '?' + startDate + endDate + brandCode + seriesCode;


      return '<a target="_blank" href="/statistics/seriesPart/exportDetail'+ query+'">导出明细</a>';
    }
  }]
});