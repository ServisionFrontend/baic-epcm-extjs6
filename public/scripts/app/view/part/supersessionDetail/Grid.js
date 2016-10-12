Ext.define('APP.view.part.supersessionDetail.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.supersessiondetailgrid',
  store: 'APP.store.part.SupersessionDetail',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-group:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-group:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该替换组信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-group:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/substitute-group-detail',
    tplUrl: '/template/download/substitute-group-detail',
    pageName: '替换组详情',
    introText: '说明：\n\n' +
    '新增导入按照替换组编码和配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照替换组编码和配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-group:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/substitute-group-detail',
    tplUrl: '/template/download/substitute-group-detail',
    pageName: '替换组详情',
    introText: '说明：\n\n' +
    '新增导入按照替换组编码和配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照替换组编码和配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-group:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/substitute-group-detail',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-group:export')
  }],
  columns: [{
    text: '替换组编码',
    dataIndex: 'groupCode',
    width: 140
  }, {
    text: '配件编码',
    dataIndex: 'partCode',
    width: 140
  }, {
    text: '配件名称',
    dataIndex: 'partName',
    flex: 1
  }, {
    text: '备注',
    dataIndex: 'note',
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