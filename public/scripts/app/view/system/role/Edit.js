Ext.define('APP.view.system.role.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '角色',
  updateDisableItems: ['code'],
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      fieldLabel: '角色编码',
      name: 'code'
    }, {
      fieldLabel: '角色名称',
      name: 'name'
    }, {
      fieldLabel: '对应DMS角色编码',
      name: 'dmsCode',
      allowBlank: true
    }, {
      fieldLabel: '对应DMS品牌编码',
      name: 'dmsBrandCode',
      allowBlank: true
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      url: APP.globalConfig.restpath + '/selector/list/brand'
    }, {
      xtype: 'basecombo',
      fieldLabel: '功能权限包',
      name: 'funcAuthPkgCodes',
      storeAutoLoad: true,
      allowBlank: true,
      multiSelect: true,
      url: APP.globalConfig.restpath + '/selector/coreList/func-auth-pkg'
    }, {
      xtype: 'basecombo',
      fieldLabel: '数据权限包',
      name: 'dataAuthPkgCodes',
      storeAutoLoad: true,
      allowBlank: true,
      multiSelect: true,
      url: APP.globalConfig.restpath + '/selector/coreList/data-auth-pkg'
    }]
  }]
});