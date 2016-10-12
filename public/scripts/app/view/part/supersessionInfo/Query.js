Ext.define('APP.view.part.supersessionInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.supersessioninfoquery',
  items: [{
    items: [{
      fieldLabel: '配件编码/替换组编码',
      name: 'code',
      toUppercase: true
    }, {
      fieldLabel: '配件名称/替换组描述',
      name: 'note'
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否替换组',
      displayFormat: '',
      name: 'isGroup',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '是',
        code: 1
      }, {
        name: '否',
        code: 0
      }]
    }]
  }]
});