Ext.define('APP.view.dictionary.notice.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.dnoticegrid',
  store: 'APP.store.dictionary.Notice',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add'
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit'
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该通知类型？'
  }, '-', {
    xtype: 'button',
    text: '调整排序号',
    iconCls: 'icon-sort',
    action: 'sort'
  }],
  columns: [{
    text: '通知类型编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '通知类型名称',
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