Ext.define('APP.view.statistics.consultCatagory.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsconsultcatagoryquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.combo.TreeCombo',
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
      value: ''
    }, {
      xtype: 'treecombo',
      fieldLabel: '问题分类',
      rootVisible: false,
      name: 'questionTypeCode',
      canSelectFolders: false,
      isAllExpand: true,
      store: Ext.create('APP.store.common.QuestionTypes'),
      value: ''
    }]
  }]
});