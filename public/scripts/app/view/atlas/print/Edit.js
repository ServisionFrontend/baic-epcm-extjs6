Ext.define('APP.view.atlas.print.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '配件图册打印',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: []
  }]
});