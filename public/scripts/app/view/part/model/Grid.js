Ext.define('APP.view.part.model.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.modelgrid',
  store: 'APP.store.part.Model',
  rownumberer: true,
  allowRowDrag: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该车型？',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/model-group',
    tplUrl: '/template/download/model-group',
    pageName: '车型组',
    introText: '说明：\n\n' +
    '新增导入按照车型组编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照车型组编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/model-group',
    tplUrl: '/template/download/model-group',
    pageName: '车型组',
    introText: '说明：\n\n' +
    '新增导入按照车型组编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照车型组编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/model-group',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:export')
  }, '-', {
    xtype: 'button',
    text: '调整排序号',
    iconCls: 'icon-sort',
    action: 'sort',
    hidden: !APP.permissionConfig.hasOperation('epcm:model-group:sort')
  }],
  columns: [{
    text: '品牌名称',
    dataIndex: 'brandName',
    flex: 1
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    flex: 1
  }, {
    text: '车型组编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '车型组名称',
    dataIndex: 'name',
    flex: 1
  }, {
    text: '排序号',
    dataIndex: 'sort',
    width: 120
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