Ext.define('APP.view.system.role.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.rolequery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      fieldLabel: '角色名称',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }]
  }]
});