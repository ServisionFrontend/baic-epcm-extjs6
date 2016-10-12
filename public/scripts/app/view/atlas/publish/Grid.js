Ext.define('APP.view.atlas.publish.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.publishgrid',
  store: 'APP.store.atlas.Publish',
  rownumberer: true,
  controlButtons: ['update', 'multi-update', 'destroy', 'multi-destroy', 'publish', 'multi-publish'],
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
    text: '批次修改',
    action: 'multi-update',
    disabled: true,
    iconCls: 'icon-min-edit'
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    singleSelectEnable: true,
    deleteText: '请确认删除该数据发布？'
  }, '-', {
    xtype: 'button',
    text: '批次删除',
    iconCls: 'icon-delete',
    action: 'multi-destroy',
    disabled: true,
    deleteText: '请确认批次删除该数据发布？'
  }, '-', {
    xtype: 'button',
    text: '发布',
    iconCls: 'icon-upload',
    action: 'publish',
    disabled: true,
    singleSelectEnable: true
  }, '-', {
    xtype: 'button',
    text: '批次发布',
    iconCls: 'icon-upload',
    action: 'multi-publish',
    disabled: true
  }],
  columns: [{
    text: '数据包分类',
    dataIndex: 'code',
    width: 140
  }, {
    text: '批次号',
    dataIndex: 'name',
    width: 140
  }, {
    text: '数据包名称',
    dataIndex: 'sort',
    width: 140
  }, {
    text: '数据包状态',
    dataIndex: 'createdBy',
    width: 140
  }, {
    text: '生成日期',
    dataIndex: 'createdBy',
    width: 140
  }, {
    text: '发布日期',
    dataIndex: 'publishDate',
    width: 140
  }, {
    text: '到期期限',
    dataIndex: 'createdBy',
    width: 140
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 140
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 140
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 140
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 140
  }]
});