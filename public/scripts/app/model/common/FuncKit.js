Ext.define('APP.model.common.FuncKit', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id', mapping: 'code'},
    {name: 'text', mapping: 'name'},
    {name: 'children'},
    {name: 'checked', defaultValue: false}
  ]
});