Ext.define('APP.view.part.subGroup.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '分组',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/list/group',
      value: ''
    }, {
      xtype: 'numberfield',
      fieldLabel: '分组编码',
      name: 'code',
      minValue: 0
    }, {
      fieldLabel: '分组名称',
      name: 'name'
    }]
  }]
});