Ext.define('APP.view.part.partStatus.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.partstatusquery',
  items: [{
    items: [{
      fieldLabel: '配件编码',
      name: 'code',
      toUppercase: true
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }, {
      fieldLabel: '生产件号',
      name: 'productionPartCode',
      toUppercase: true
    }, {
      fieldLabel: '照片数量',
      name: 'photoCount'
    }]
  }]
});