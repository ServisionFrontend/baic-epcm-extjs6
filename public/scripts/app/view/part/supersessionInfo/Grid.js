Ext.define('APP.view.part.supersessionInfo.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.supersessioninfogrid',
  store: 'APP.store.part.SupersessionInfo',
  rownumberer: true,
  controlButtons: ['update', 'destroy', 'detail'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该替换信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/substitute',
    tplUrl: '/template/download/substitute',
    pageName: '替换信息',
    introText: '说明：\n\n' +
    '新增导入按照新配件号和旧配件号为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照新配件号和旧配件号为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/substitute',
    tplUrl: '/template/download/substitute',
    pageName: '替换信息',
    introText: '说明：\n\n' +
    '新增导入按照新配件号和旧配件号为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照新配件号和旧配件号为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/substitute',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute:export')
  }, '-', {
    xtype: 'button',
    text: '替换组详情',
    singleSelectEnable: true,
    iconCls: 'icon-view-detail',
    action: 'detail',
    disabled: true
  }],
  columns: [{
    text: '旧件号/旧替换组编码',
    dataIndex: 'oldCode',
    width: 160
  }, {
    text: '旧件名称/旧替换组描述',
    dataIndex: 'oldNote',
    width: 160
  }, {
    text: '新件号/新替换组编码',
    dataIndex: 'newCode',
    width: 160
  }, {
    text: '新件名称/新替换组描述',
    dataIndex: 'newNote',
    width: 160
  }, {
    text: '是否替换组',
    dataIndex: 'isGroup',
    width: 120,
    renderer:function(val){
        return val == '1' ? '是' : '否';
    }
  }, {
    text: '替换类型编码',
    dataIndex: 'typeCode',
    width: 120
  }, {
    text: '替换类型',
    dataIndex: 'typeName',
    width: 140
  }, {
    text: '断点时间',
    dataIndex: 'replaceTime',
    width: 140
  }, {
    text: '断点信息',
    dataIndex: 'breakPointNote',
    width: 180
  }, {
    text: '备注',
    dataIndex: 'note',
    width: 180
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