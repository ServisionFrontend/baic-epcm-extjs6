Ext.define('APP.view.language.data.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '品牌',
  updateDisableItems: ['code'],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '品牌编码',
      name: 'code'
    }, {
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});