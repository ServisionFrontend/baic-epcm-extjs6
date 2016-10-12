Ext.define('APP.view.part.group.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.groupquery',
  items: [{
    items: [{
      fieldLabel: '主组名称',
      name: 'name'
    }]
  }]
});