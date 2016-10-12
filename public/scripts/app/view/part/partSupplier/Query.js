Ext.define('APP.view.part.partSupplier.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.partsupplierquery',
  items: [{
    items: [{
      fieldLabel: '配件编码',
      name: 'partCode',
      toUppercase: true
    }, {
      fieldLabel: '配件名称',
      name: 'partName'
    }, {
      fieldLabel: '供应商编码',
      name: 'supplierCode',
      toUppercase: true
    }, {
      fieldLabel: '供应商名称',
      name: 'supplierName'
    }]
  }]
});