Ext.define('APP.view.statistics.visit.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.statisticsvisitgrid',
  store: 'APP.store.statistics.Visit',
  rownumberer: true,
  controlButtons: [],
  tbar: [{
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/multiPathCoreExport',
    exportPath: 'report/login-info/download',
    hidden: !APP.permissionConfig.hasOperation('epcm:report:login-info:download')
  }],
  columns: [{
    text: '企业编码',
    dataIndex: 'enterpriseCode',
    width: 180
  }, {
    text: '企业品牌编码',
    dataIndex: 'enterpriseBrandCode',
    width: 180
  }, {
    text: '企业名称',
    dataIndex: 'enterpriseName',
    width: 180
  }, {
    text: '企业类型',
    dataIndex: 'enterpriseType',
    width: 180,
    renderer: function (val) {
      if (val == '0') {
        return '北汽内部企业';
      } else if (val == '1') {
        return '北汽外部企业';
      } else if (val == '2') {
        return 'DMS管理企业';
      } else {
        return '';
      }
    }
  }, {
    text: '省份',
    dataIndex: 'enterpriseProvinceName',
    width: 100
  }, {
    text: '登录账户',
    dataIndex: 'account',
    width: 180
  }, {
    text: '登录IP',
    dataIndex: 'ip',
    width: 180
  }, {
    text: '日期',
    dataIndex: 'actionOn',
    width: 160
  }, {
    text: '登录结果',
    dataIndex: 'success',
    width: 180,
    renderer: function (val) {
      if (val == true) {
        return '成功';
      } else if (val == false) {
        return '失败';
      } else {
        return '';
      }
    }
  }, {
    text: '计数',
    dataIndex: 'num',
    width: 140
  }]
});