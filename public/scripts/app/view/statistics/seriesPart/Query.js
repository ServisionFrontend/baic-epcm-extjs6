Ext.define('APP.view.statistics.seriesPart.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsseriespartquery',
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
      clearFields: ['seriesCode'],
      allowBlank: false
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      withAll: true,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      value: ''
    }]
  }]
});