Ext.define('APP.view.statistics.modelPart.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.statisticsmodelpartgrid',
  store: 'APP.store.statistics.ModelPart',
  rownumberer: true,
  controlButtons: [],
  tbar: [{
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/multiPathExport',
    exportPath: 'report/model-group-part/download',
    hidden: !APP.permissionConfig.hasOperation('epcm:report:model-group-part:download')
  }],
  columns: [{
    text: '车系编码',
    dataIndex: 'seriesCode',
    width: 180
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    width: 180
  }, {
    text: '车系组编码',
    dataIndex: 'modelGroupCode',
    width: 180
  }, {
    text: '车系组名称',
    dataIndex: 'modelGroupName',
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
    hidden: !APP.permissionConfig.hasOperation('epcm:report:model-group-part:export'),
    renderer: function (val, metaData, record) {
      var startDate = record.get('startDate') ? ('startDate=' + record.get('startDate') + '&') : '';
      var endDate = record.get('endDate') ? ('endDate=' + record.get('endDate') + '&') : '';
      var brandCode  = record.get('brandCode') ? ('brandCode=' + record.get('brandCode') + '&') : '';
      var seriesCode = record.get('seriesCode') ? ('seriesCode=' + record.get('seriesCode') + '&') : '';
      var modelGroupCode  = record.get('modelGroupCode') ? ('modelGroupCode=' + record.get('modelGroupCode') + '&') : '';
      var query = '?' + startDate + endDate + brandCode + seriesCode + modelGroupCode ;

      return '<a target="_blank" href="/statistics/modelPart/exportDetail'+ query+'">导出明细</a>';
    }
  }]
});