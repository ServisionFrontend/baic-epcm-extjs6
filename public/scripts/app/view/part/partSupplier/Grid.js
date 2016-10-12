Ext.define('APP.view.part.partSupplier.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.partsuppliergrid',
  store: 'APP.store.part.PartSupplier',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-supplier-rel:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-supplier-rel:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该配件供应商？',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-supplier-rel:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/part-supplier-rel',
    tplUrl: '/template/download/part-supplier-rel',
    pageName: '配件与供应商关系',
    introText: '说明：\n\n' +
    '新增导入按照配件编码和供应商编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照配件编码和供应商编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-supplier-rel:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/part-supplier-rel',
    tplUrl: '/template/download/part-supplier-rel',
    pageName: '配件与供应商关系',
    introText: '说明：\n\n' +
    '新增导入按照配件编码和供应商编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照配件编码和供应商编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-supplier-rel:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/part-supplier-rel',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-supplier-rel:export')
  }],
  columns: [{
    text: '配件编码',
    dataIndex: 'partCode',
    width: 140
  }, {
    text: '配件名称',
    dataIndex: 'partName',
    flex: 1
  }, {
    text: '供应商编码',
    dataIndex: 'supplierCode',
    width: 140
  }, {
    text: '供应商名称',
    dataIndex: 'supplierName',
    flex: 1
  }, {
    text: '供应商备注',
    dataIndex: 'note',
    width: 280
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 120
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    flex: 1
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 120
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    flex: 1
  }]
});