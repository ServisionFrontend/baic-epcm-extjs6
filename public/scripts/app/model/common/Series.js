Ext.define('APP.model.common.Series', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id', mapping: 'code'},
    {name: 'text', mapping: 'name'},
    {name: 'children'},
    {name: 'checked', defaultValue: false}
  ]
});