Ext.define('APP.view.part.repair.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.repairgrid',
  store: 'APP.store.part.Repair',
  rownumberer: true,
  controlButtons: ['update', 'destroy', 'detail'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该维修包信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/repairkit',
    tplUrl: '/template/download/repairkit',
    pageName: '维修包',
    introText: '说明：\n\n' +
    '新增导入按照隶属总成件号和维修包件号为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照隶属总成件号和维修包件号为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/repairkit',
    tplUrl: '/template/download/repairkit',
    pageName: '维修包',
    introText: '说明：\n\n' +
    '新增导入按照隶属总成件号和维修包件号为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照隶属总成件号和维修包件号为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/repairkit',
    hidden: !APP.permissionConfig.hasOperation('epcm:repair-kit:export')
  }, '-', {
    xtype: 'button',
    text: '详情',
    iconCls: 'icon-view-detail',
    action: 'detail',
    singleSelectEnable: true,
    disabled: true
  }],
  columns: [{
    text: '隶属总成件号',
    dataIndex: 'partCode',
    width: 140
  }, {
    text: '隶属总成名称',
    dataIndex: 'partName',
    width: 180
  }, {
    text: '维修包件号',
    dataIndex: 'code',
    width: 140
  }, {
    text: '维修包名称',
    dataIndex: 'name',
    width: 180
  }, {
    text: '维修包备注',
    dataIndex: 'note',
    width: 200
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