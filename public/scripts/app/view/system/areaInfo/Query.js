Ext.define('APP.view.system.areaInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.areainfoquery',
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '区域级别',
      name: 'grade',
      storeAutoLoad: true,
      withAll: true,
      value: '',
      localData: [
        {code: '', name: '全部'},
        {code: 2, name: '省级'},
        {code: 3, name: '市级'}
      ]
    }, {
      fieldLabel: '区域名称',
      name: 'name'
    }]
  }]
});