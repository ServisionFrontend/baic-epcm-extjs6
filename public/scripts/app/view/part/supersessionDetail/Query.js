Ext.define('APP.view.part.supersessionDetail.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.supersessiondetailquery',
  items: [{
    items: [{
      fieldLabel: '替换组编码',
      name: 'groupCode',
      toUppercase: true
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