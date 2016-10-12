Ext.define('APP.view.part.repairDetail.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.repairdetailquery',
  items: [{
    items: [{
      fieldLabel: '维修包件号',
      name: 'kitCode',
      toUppercase: true
    }, {
      fieldLabel: '维修包名称',
      name: 'kitName'
    }, {
      fieldLabel: '配件编码',
      name: 'partCode',
      toUppercase: true
    }, {
      fieldLabel: '配件名称',
      name: 'partName'
    }]
  }]
});