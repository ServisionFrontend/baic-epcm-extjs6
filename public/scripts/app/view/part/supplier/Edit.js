Ext.define('APP.view.part.supplier.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '供应商',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '供应商编码',
      name: 'code'
    }, {
      fieldLabel: '供应商名称',
      name: 'name'
    }, {
      fieldLabel: '供应商联系方式',
      name: 'phone',
      allowBlank: true
    }]
  }]
});