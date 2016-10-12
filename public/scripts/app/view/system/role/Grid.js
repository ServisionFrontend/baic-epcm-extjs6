Ext.define('APP.view.system.role.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.rolegrid',
  store: 'APP.store.system.Role',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:role:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:role:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该角色？',
    hidden: !APP.permissionConfig.hasOperation('epcm:role:delete')
  }],
  columns: [{
    text: '角色编码',
    dataIndex: 'code',
    width: 140
  }, {
    text: '品牌',
    dataIndex: 'brandName',
    width: 140
  }, {
    text: '角色名称',
    dataIndex: 'name',
    width: 140
  }, {
    text: '对应DMS角色编码',
    dataIndex: 'dmsCode',
    width: 140
  }, {
    text: '对应DMS品牌编码',
    dataIndex: 'dmsBrandCode',
    width: 140
  }, {
    text: '功能权限包',
    dataIndex: 'funcAuthPkgs',
    width:240,
    sortable: false,
    renderer: function (val) {
      var temp = [];
      if (val) {
        for (var i = 0; i < val.length; i++) {
          temp.push(val[i].name);
        }
      }
      return temp.join(',');
    }
  }, {
    text: '数据权限包',
    dataIndex: 'dataAuthPkgs',
    width: 240,
    sortable: false,
    renderer: function (val) {
      var temp = [];
      if (val) {
        for (var i = 0; i < val.length; i++) {
          temp.push(val[i].name);
        }
      }
      return temp.join(',');
    }
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 120
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 140
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 120
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 140
  }]
});