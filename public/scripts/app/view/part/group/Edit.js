Ext.define('APP.view.part.group.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '主组',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      xtype: 'numberfield',
      fieldLabel: '主组编码',
      name: 'code',
      minValue: 0,
      maxLength: 8
    }, {
      fieldLabel: '主组名称',
      name: 'name'
    }]
  }]
});