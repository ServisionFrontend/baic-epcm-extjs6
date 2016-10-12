Ext.define('APP.view.dictionary.partType.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dparttypequery',
  items: [{
    items: [{
      fieldLabel: '配件类型名称',
      name: 'name'
    }]
  }]
});