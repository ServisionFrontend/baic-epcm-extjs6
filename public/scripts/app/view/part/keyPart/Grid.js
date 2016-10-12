Ext.define('APP.view.part.keyPart.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.keypartgrid',
  store: 'APP.store.part.KeyPart',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:vin-key-part:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:vin-key-part:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该关重件信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:vin-key-part:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/vin-keypart',
    tplUrl: '/template/download/vin-keypart',
    pageName: '关重件清单',
    introText: '说明：\n\n' +
    '新增导入按照VIN编码和生产件号为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照VIN编码和生产件号为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:vin-key-part:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/vin-keypart',
    tplUrl: '/template/download/vin-keypart',
    pageName: '关重件清单',
    introText: '说明：\n\n' +
    '新增导入按照VIN编码和生产件号为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照VIN编码和生产件号为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:vin-key-part:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/vin-keypart',
    hidden: !APP.permissionConfig.hasOperation('epcm:vin-key-part:export')
  }],
  columns: [{
    text: 'VIN码',
    dataIndex: 'vin',
    width: 180
  }, {
    text: '生产件号',
    dataIndex: 'productionPartCode',
    width: 160
  }, {
    text: '用量',
    dataIndex: 'qty',
    width: 100
  }, {
    text: '用法备注',
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