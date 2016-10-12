Ext.define('APP.view.dictionary.problem.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.problemquery',
  items: [{
    items: [{
      fieldLabel: '问题原因名称',
      name: 'name'
    }]
  }]
});