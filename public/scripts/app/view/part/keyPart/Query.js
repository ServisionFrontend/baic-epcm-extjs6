Ext.define('APP.view.part.keyPart.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.keypartquery',
  items: [{
    items: [{
      fieldLabel: 'VIN码',
      name: 'vin',
      toUppercase: true
    }, {
      fieldLabel: '生产件号',
      name: 'productionPartCode',
      toUppercase: true
    }]
  }]
});