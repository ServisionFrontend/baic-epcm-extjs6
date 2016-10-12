Ext.define('APP.view.part.reorganizeModel.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.reorganizemodelgrid',
  store: 'APP.store.part.ReorganizeModel',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该整编车型？',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/model',
    tplUrl: '/template/download/model',
    pageName: '整编车型',
    introText: '说明：\n\n' +
    '新增导入按照车系编码和整车车型编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照车系编码和整车车型编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/model',
    tplUrl: '/template/download/model',
    pageName: '整编车型',
    introText: '说明：\n\n' +
    '新增导入按照车系编码和整车车型编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照车系编码和整车车型编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/model',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:export')
  }, '-', {
    xtype: 'button',
    text: '调整排序号',
    iconCls: 'icon-sort',
    action: 'sort',
    hidden: !APP.permissionConfig.hasOperation('epcm:model:sort')
  }],
  columns: [{
    text: '品牌名称',
    dataIndex: 'brandName',
    width: 140
  }, {
    text: '车系编码',
    dataIndex: 'seriesCode',
    width: 130
  }, {
    text: '车型组编码',
    dataIndex: 'modelGroupCode',
    width: 130
  }, {
    text: '车型组名称',
    dataIndex: 'modelGroupName',
    width: 160
  }, {
    text: '12位整车编码',
    dataIndex: 'code',
    width: 130
  }, {
    text: '12位整车编码描述',
    dataIndex: 'name',
    width: 300
  }, {
    text: '排序号',
    dataIndex: 'sort',
    width: 120
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