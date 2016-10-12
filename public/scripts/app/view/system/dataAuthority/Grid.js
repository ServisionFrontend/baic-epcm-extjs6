Ext.define('APP.view.system.dataAuthority.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.dataauthoritygrid',
  store: 'APP.store.system.DataAuthority',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:data-auth-pkg:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:data-auth-pkg:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该数据权限？',
    hidden: !APP.permissionConfig.hasOperation('epcm:data-auth-pkg:delete')
  }],
  columns: [{
    text: '权限包编码',
    dataIndex: 'code',
    width: 200
  }, {
    text: '品牌',
    dataIndex: 'brandName',
    width: 140
  }, {
    text: '权限包描述',
    dataIndex: 'name',
    width: 200
  }, {
    text: '权限包备注',
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