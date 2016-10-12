Ext.define('APP.view.statistics.reorganizeCode.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.statisticsreorganizecodegrid',
  store: 'APP.store.statistics.ReorganizeCode',
  rownumberer: true,
  controlButtons: [],
  tbar: [{
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/multiPathExport',
    exportPath: 'report/vehicle-usage/download',
    hidden: !APP.permissionConfig.hasOperation('epcm:report:vehicle-usage:download')
  }],
  columns: [{
    text: '品牌',
    dataIndex: 'brandName',
    width: 180
  }, {
    text: '车系',
    dataIndex: 'seriesName',
    width: 180
  }, {
    text: '整编记录',
    dataIndex: 'vehicleAmount',
    width: 180
  }, {
    text: '用法记录',
    dataIndex: 'usageAmount',
    width: 180
  }, {
    text: '状态',
    dataIndex: 'status',
    width: 120,
    renderer: function (val) {
      if (val == '1') {
        return '可发布';
      } else if (val == '2') {
        return '已归档';
      } else if (val == '0') {
        return '不可发布';
      }
      return '';
    }
  }, {
    text: '操作',
    dataIndex: 'action',
    width: 80,
    sortable: false,
    hidden: !APP.permissionConfig.hasOperation('epcm:report:vehicle-usage:export'),
    renderer: function (val, metaData, record) {
      var startDate = record.get('startDate') ? ('startDate=' + record.get('startDate') + '&') : '';
      var endDate = record.get('endDate') ? ('endDate=' + record.get('endDate') + '&') : '';
      var brandCode  = record.get('brandCode') ? ('brandCode=' + record.get('brandCode') + '&') : '';
      var seriesCode = record.get('seriesCode') ? ('seriesCode=' + record.get('seriesCode') + '&') : '';
      var status  = (record.get('status') || record.get('status') == '0') ? ('status=' + record.get('status') + '&') : '';
      var query = '?' + startDate + endDate + brandCode + seriesCode + status ;

      return '<a target="_blank" href="/statistics/reorganizeCode/exportDetail'+ query+'">导出明细</a>';
    }
  }]
});