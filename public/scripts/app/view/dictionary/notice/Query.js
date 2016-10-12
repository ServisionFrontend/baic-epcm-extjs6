Ext.define('APP.view.dictionary.notice.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dnoticequery',
  items: [{
    items: [{
      fieldLabel: '通知类型名称',
      name: 'name'
    }]
  }]
});