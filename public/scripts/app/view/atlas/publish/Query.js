Ext.define('APP.view.atlas.publish.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.publishquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '数据包分类（角色）',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '数据包状态',
      name: 'seriesCode',
      withAll: true,
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '未发布',
        code: 0
      }, {
        name: '已发布',
        code: 1
      }, {
        name: '已过期',
        code: 2
      }
      ]
    }, {
      fieldLabel: '数据包名称',
      name: 'name'
    }]
  }]
});