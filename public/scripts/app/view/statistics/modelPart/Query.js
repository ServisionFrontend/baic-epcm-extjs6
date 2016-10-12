Ext.define('APP.view.statistics.modelPart.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsmodelpartquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker',
    'Ext.ux.plugin.LabelRequired'
  ],
  plugins: ['formlabelrequired'],
  items: [{
    items: [{
      xtype: 'groupdatepicker',
      fieldLabel: '起止期间',
      startName: 'startDate',
      endName: 'endDate',
      allowBlank: false
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      clearFields: ['seriesCode', 'modelGroupCode'],
      allowBlank: false
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      clearFields: ['modelGroupCode'],
      allowBlank: false
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型组',
      name: 'modelGroupCode',
      storeAutoLoad: true,
      withAll: true,
      dependField: 'seriesCode',
      url: APP.globalConfig.restpath + '/selector/list/model-group?seriesCode={id}',
      value: ''
    }]
  }]
});