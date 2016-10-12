Ext.define('APP.view.part.supplier.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.supplierquery',
  items: [{
    items: [{
      fieldLabel: '供应商编码',
      name: 'code',
      toUppercase: true
    }, {
      fieldLabel: '供应商名称',
      name: 'name'
    }]
  }]
});