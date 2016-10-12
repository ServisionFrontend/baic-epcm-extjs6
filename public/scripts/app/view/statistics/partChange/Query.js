Ext.define('APP.view.statistics.partChange.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticspartchangequery',
  requires: [
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  items: [{
    items: [{
      xtype: 'groupdatepicker',
      fieldLabel: '起止期间',
      startName: 'startDate',
      endName: 'endDate',
      allowBlank: false
    }]
  }]
});