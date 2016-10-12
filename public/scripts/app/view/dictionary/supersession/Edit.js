Ext.define('APP.view.dictionary.supersession.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '替换类型',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '替换类型编码',
      name: 'code'
    }, {
      fieldLabel: '替换类型名称',
      name: 'name'
    }]
  }]
});