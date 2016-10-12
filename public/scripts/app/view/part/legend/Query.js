Ext.define('APP.view.part.legend.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.legendquery',
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: '',
      clearFields: ['seriesCode', 'groupCode', 'subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      value: '',
      clearFields: ['groupCode', 'subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/group',
      value: '',
      clearFields: ['subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '分组',
      name: 'subGroupCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'groupCode',
      url: APP.globalConfig.restpath + '/selector/list/sub-group?groupCode={id}',
      value: ''
    }]
  }, {
    items: [{
      fieldLabel: '图例编码',
      name: 'code',
      toUppercase: true
    }, {
      fieldLabel: '图例名称',
      name: 'name'
    }, {
      fieldLabel: 'SVG文件名',
      name: 'originSvgFilename'
    }, {
      xtype: 'basecombo',
      fieldLabel: 'SVG图',
      name: 'hasSvg',
      displayFormat: '',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '有',
        code: true
      }, {
        name: '无',
        code: false
      }]
    }, {
      xtype: 'basecombo',
      fieldLabel: 'JPG图',
      name: 'hasGif',
      displayFormat: '',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '有',
        code: true
      }, {
        name: '无',
        code: false
      }]
    }]
  }]
});