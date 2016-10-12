Ext.define('APP.view.dictionary.supersession.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.supersessiongrid',
  store: 'APP.store.dictionary.Supersession',
  rownumberer: true,
  allowRowDrag: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-type:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-type:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该替换类型？',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-type:delete')
  }, '-', {
    xtype: 'button',
    text: '调整排序号',
    iconCls: 'icon-sort',
    action: 'sort',
    hidden: !APP.permissionConfig.hasOperation('epcm:substitute-type:sort')
  }],
  columns: [{
    text: '替换类型编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '替换类型名称',
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