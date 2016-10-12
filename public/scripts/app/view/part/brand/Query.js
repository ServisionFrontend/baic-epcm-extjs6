Ext.define('APP.view.part.brand.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.brandquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});