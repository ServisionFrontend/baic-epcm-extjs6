Ext.define('APP.view.part.repairDetail.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.repairdetailgrid',
  store: 'APP.store.part.RepairDetail',
  rownumberer: true,
  controlButtons: ['update', 'delete'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit-detail:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit-detail:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'delete',
    disabled: true,
    deleteText: '请确认删除该维修包信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit-detail:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/repairkit-detail',
    tplUrl: '/template/download/repairkit-detail',
    pageName: '维修包详情',
    introText: '说明：\n\n' +
    '新增导入按照维修包件号和配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照维修包件号和配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit-detail:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/repairkit-detail',
    tplUrl: '/template/download/repairkit-detail',
    pageName: '维修包详情',
    introText: '说明：\n\n' +
    '新增导入按照维修包件号和配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照维修包件号和配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit-detail:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/repairkit-detail',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit-detail:export')
  }],
  columns: [{
    text: '维修包件号',
    dataIndex: 'kitCode',
    width: 140
  }, {
    text: '维修包名称',
    dataIndex: 'kitName',
    width: 180
  }, {
    text: '配件编码',
    dataIndex: 'partCode',
    width: 140
  }, {
    text: '配件名称',
    dataIndex: 'partName',
    width: 180
  }, {
    text: '设计编码',
    dataIndex: 'designCode',
    width: 140
  }, {
    text: '生产编码',
    dataIndex: 'productionCode',
    width: 140
  }, {
    text: '用量',
    dataIndex: 'qty',
    width: 100
  }, {
    text: '供应商编码',
    dataIndex: 'supplierCode',
    width: 180
  }, {
    text: '供应商名称',
    dataIndex: 'supplierName',
    width: 180
  }, {
    text: '描述',
    dataIndex: 'note',
    width: 220
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 120
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 160
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 120
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 160
  }]
});