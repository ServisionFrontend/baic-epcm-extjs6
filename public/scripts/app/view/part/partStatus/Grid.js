Ext.define('APP.view.part.partStatus.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.partstatusgrid',
  store: 'APP.store.part.PartStatus',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:part:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:part:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该配件信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:part:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/part',
    tplUrl: '/template/download/part',
    pageName: '配件信息',
    introText: '说明：\n\n' +
    '新增导入按照配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:part:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/part',
    tplUrl: '/template/download/part',
    pageName: '配件信息',
    introText: '说明：\n\n' +
    '新增导入按照配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:part:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/part',
    hidden: !APP.permissionConfig.hasOperation('epcm:part:export')
  }],
  columns: [{
    text: '配件编码',
    dataIndex: 'code',
    width: 140
  }, {
    text: '配件名称',
    dataIndex: 'name',
    width: 240
  }, {
    text: '生产件号',
    dataIndex: 'productionPartCode',
    width: 140
  }, {
    text: '照片数量',
    dataIndex: 'photoCount',
    width: 80
  }, {
    text: '配件备注',
    dataIndex: 'note',
    width: 200
  }, {
    text: '配件状态',
    dataIndex: 'statusName',
    width: 80
  }, {
    text: '配件类型编码',
    dataIndex: 'typeCode',
    width: 100
  }, {
    text: '配件类型名称',
    dataIndex: 'typeName',
    width: 180
  }, {
    text: '特殊采购标识',
    dataIndex: 'specialPurchaseTag',
    width: 120
  }, {
    text: '特殊采购备注',
    dataIndex: 'specialPurchaseNote',
    width: 180
  }, {
    text: '重量',
    dataIndex: 'weight',
    width: 100
  }, {
    text: '长',
    dataIndex: 'length',
    width: 100
  }, {
    text: '宽',
    dataIndex: 'width',
    width: 100
  }, {
    text: '高',
    dataIndex: 'height',
    width: 100
  }, {
    text: '规格型号',
    dataIndex: 'dimensionNo',
    width: 100
  }, {
    text: '价格',
    dataIndex: 'price',
    width: 100
  }, {
    text: '最小包装数',
    dataIndex: 'moq',
    width: 100
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