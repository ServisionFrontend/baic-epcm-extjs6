Ext.define('APP.view.dictionary.partType.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '配件类型',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '配件类型编码',
      name: 'code'
    }, {
      fieldLabel: '配件类型名称',
      name: 'name'
    }]
  }]
});