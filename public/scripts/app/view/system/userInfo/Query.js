Ext.define('APP.view.system.userInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.userinfoquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '用户类型',
      name: 'userType',
      storeAutoLoad: true,
      withAll: true,
      value: '',
      localData: [
        {code: '', name: '全部'},
        {code: 0, name: 'EPC管理用户'},
        {code: 1, name: 'DMS管理用户'}
      ]
    }, {
      fieldLabel: '用户名',
      name: 'username'
    }, {
      fieldLabel: '用户姓名',
      name: 'realName'
    }, {
      xtype: 'basecombo',
      fieldLabel: '用户状态',
      name: 'status',
      storeAutoLoad: true,
      withAll: true,
      value: '',
      localData: [
        {code: '', name: '全部'},
        {code: 0, name: '停用'},
        {code: 1, name: '正常'},
        {code: 2, name: '已到期'}
      ]
    }, {
      xtype:'numberfield',
      fieldLabel: '账户有效日',
      name: 'expiredDaySub',
      value: '',
      minValue: 0
    }]
  }, {
    items: [{
      fieldLabel: '企业编码',
      name: 'enterpriseCode'
    }, {
      xtype: 'basecombo',
      fieldLabel: '企业类型',
      name: 'enterpriseType',
      storeAutoLoad: true,
      withAll: true,
      value: '',
      localData: [
        {code: '', name: '全部'},
        {code: 1, name: '北汽外部企业'},
        {code: 0, name: '北汽内部企业'},
        {code: 2, name: 'DMS管理企业'}
      ]
    }, {
      fieldLabel: '企业名称',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '可选数据库',
      name: 'dbCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/coreList/db-config',
      value: ''
    }]
  }]
});