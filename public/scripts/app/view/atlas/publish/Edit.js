Ext.define('APP.view.atlas.publish.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '数据包',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  updateDisableItems: [],
  constructor: function(config) {
    var me = this;

    this.callParent(arguments);
  },
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '数据包分类',
      name: 'package1',
      storeAutoLoad: true,
      allowBlank: true,
      multiSelect: true,
      forceSelection: true,
      url: APP.globalConfig.restpath + '/selector/list/brand'
    }, {
      xtype: 'datefield',
      fieldLabel: '到期期限',
      name: 'expirationTime',
      minValue: new Date()
    }, {
      xtype: 'basecombo',
      fieldLabel: '生成数据包同时发布',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: false,
      value: '',
      localData: [
        {code: 1, name: '是'},
        {code: 0, name: '否'}
      ]
    }]
  }]
});