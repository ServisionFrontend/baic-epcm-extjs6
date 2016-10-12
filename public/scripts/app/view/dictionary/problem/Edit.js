Ext.define('APP.view.dictionary.problem.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '问题原因',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '问题原因编码',
      name: 'code'
    }, {
      fieldLabel: '问题原因名称',
      name: 'name'
    }]
  }]
});