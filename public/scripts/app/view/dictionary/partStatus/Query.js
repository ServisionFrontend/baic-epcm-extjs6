Ext.define('APP.view.dictionary.partStatus.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dpartstatusquery',
  items: [{
    items: [{
      fieldLabel: '配件状态名称',
      name: 'name'
    }]
  }]
});