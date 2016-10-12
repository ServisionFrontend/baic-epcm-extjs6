Ext.define('APP.view.statistics.consultSeries.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsconsultseriesquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  items: [{
    items: [{
      xtype: 'groupdatepicker',
      fieldLabel: '起止期间',
      startName: 'startDate',
      endName: 'endDate',
      allowBlank: true
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: '',
      clearFields: ['seriesCode']
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