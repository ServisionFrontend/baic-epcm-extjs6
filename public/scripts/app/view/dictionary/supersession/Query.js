Ext.define('APP.view.dictionary.supersession.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.supersessionquery',
  items: [{
    items: [{
      fieldLabel: '替换类型名称',
      name: 'name'
    }]
  }]
});