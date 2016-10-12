Ext.define('APP.view.system.userInfo.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.userinfogrid',
  store: 'APP.store.system.UserInfo',
  rownumberer: true,
  controlButtons: ['update', 'forbid-user', 'reset-password'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:user:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:user:update')
  }, '-', {
    xtype: 'button',
    text: '停用',
    iconCls: 'icon-user-stop',
    action: 'forbid-user',
    singleSelectEnable: true,
    disabled: true,
    hidden: !APP.permissionConfig.hasOperation('epcm:user:forbid')
  }, '-', {
    xtype: 'button',
    text: '重置密码',
    iconCls: 'icon-key-reset',
    action: 'reset-password',
    singleSelectEnable: true,
    disabled: true,
    hidden: !APP.permissionConfig.hasOperation('epcm:user:resetpwd')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/coreExport/user',
    hidden: !APP.permissionConfig.hasOperation('epcm:user:export')
  }],
  columns: [{
    text: '用户名',
    dataIndex: 'username',
    width: 120
  }, {
    text: '品牌',
    dataIndex: 'logoBrandName',
    width: 120
  }, {
    text: '用户角色',
    dataIndex: 'roles',
    width: 140,
    renderer: function (val) {
      var temp = [];
      if (val) {
        for (var i = 0; i < val.length; i++) {
          temp.push(val[i].name);
        }
      }
      return temp.join(',');
    },
    sortable: false
  }, {
    text: '用户姓名',
    dataIndex: 'realName',
    width: 100
  }, {
    text: '用户类型',
    dataIndex: 'userType',
    renderer: function (val, obj, construct) {
      return construct.data.userTypeName;
    },
    width: 120
  }, {
    text: '企业编码',
    dataIndex: 'enterpriseCode',
    width: 100
  }, {
    text: '企业类型',
    dataIndex: 'enterpriseTypeName',
    width: 140
  }, {
    text: '企业名称',
    dataIndex: 'enterpriseName',
    width: 220
  }, {
    text: '电话',
    dataIndex: 'telephone',
    width: 120
  }, {
    text: '可选数据库',
    dataIndex: 'dbs',
    width: 200,
    renderer: function (val) {
      var temp = [];
      if (val) {
        for (var i = 0; i < val.length; i++) {
          val[i].name && temp.push(val[i].name);
        }
      }
      return temp.join(',');
    },
    sortable: false
  }, {
    text: 'Mail',
    dataIndex: 'mail',
    width: 140
  }, {
    text: '状态',
    dataIndex: 'status',
    width: 80,
    renderer: function (val) {
      if (val || val == 0) {
        return val == 0 ? '停用' : val == 1 ? '正常' : '已到期'
      }
    }
  }, {
    text: '到期时间',
    dataIndex: 'expirationTime',
    width: 120
  }, {
    text: '功能权限包',
    dataIndex: 'funcAuthPkgs',
    width: 150,
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
    width: 150,
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