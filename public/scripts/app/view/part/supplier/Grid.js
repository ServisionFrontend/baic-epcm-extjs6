Ext.define('APP.view.part.supplier.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.suppliergrid',
  store: 'APP.store.part.Supplier',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:supplier:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:supplier:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该供应商信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:supplier:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/supplier',
    tplUrl: '/template/download/supplier',
    pageName: '供应商',
    introText: '说明：\n\n' +
      '新增导入按照供应商编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
      '更新导入按照供应商编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:supplier:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/supplier',
    tplUrl: '/template/download/supplier',
    pageName: '供应商',
    introText: '说明：\n\n' +
      '新增导入按照供应商编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
      '更新导入按照供应商编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:supplier:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/export/supplier',
    hidden: !APP.permissionConfig.hasOperation('epcm:supplier:export')
  }],
  columns: [{
    text: '供应商编码',
    dataIndex: 'code',
    width: 120
  }, {
    text: '供应商名称',
    dataIndex: 'name',
    flex: 1
  }, {
    text: '供应商联系方式',
    dataIndex: 'phone',
    flex: 1
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    flex: 1
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    flex: 1
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    flex: 1
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    flex: 1
  }]
});