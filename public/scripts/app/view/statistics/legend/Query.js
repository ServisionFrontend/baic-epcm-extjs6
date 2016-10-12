Ext.define('APP.view.statistics.legend.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticslegendquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker',
    'Ext.ux.plugin.LabelRequired'
  ],
  plugins: ['formlabelrequired'],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      clearFields: ['seriesCode', 'modelGroupCode'],
      allowBlank: false
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      allowBlank: false
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
    }, {
      fieldLabel: 'SVG文件名',
      name: 'svgFilename'
    }]
  }]
});