Ext.define('APP.view.part.keyPart.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '关重件清单',
  updateDisableItems: ['vin', 'productionPartCode'],
  items: [{
    items: [{
      fieldLabel: 'VIN码',
      name: 'vin'
    }, {
      fieldLabel: '生产件号',
      name: 'productionPartCode'
    }, {
      fieldLabel: '用量',
      name: 'qty'
    }, {
      xtype: 'textarea',
      fieldLabel: '用法备注',
      name: 'note',
      allowBlank: true
    }]
  }]
});