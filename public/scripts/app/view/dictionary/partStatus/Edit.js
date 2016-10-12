Ext.define('APP.view.dictionary.partStatus.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '配件状态',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '配件状态编码',
      name: 'code'
    }, {
      fieldLabel: '配件状态名称',
      name: 'name'
    }]
  }]
});