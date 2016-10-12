Ext.define('APP.view.dictionary.notice.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '通知类型',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '通知类型编码',
      name: 'code'
    }, {
      fieldLabel: '通知类型名称',
      name: 'name'
    }]
  }]
});