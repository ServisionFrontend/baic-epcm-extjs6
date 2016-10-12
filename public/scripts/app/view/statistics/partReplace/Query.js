Ext.define('APP.view.statistics.partReplace.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticspartreplacequery',
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
      fieldLabel: '用法品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      allowBlank: false
    }]
  }]
});