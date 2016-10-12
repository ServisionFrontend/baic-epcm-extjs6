Ext.define('APP.view.system.enterpriseInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.enterpriseinfoquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '类型',
      name: 'type',
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
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      fieldLabel: '企业名称',
      name: 'name'
    }, {
      fieldLabel: '企业编码',
      name: 'code'
    }]
  }]
});