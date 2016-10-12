﻿Ext.define('APP.view.language.data.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dataquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '数据类型',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '外国语言',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '有无翻译',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }]
  }]
});