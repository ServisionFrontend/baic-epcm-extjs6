Ext.define('APP.view.business.survey.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.surveyquery',
  items: [{
    items: [{
      fieldLabel: '问卷编号',
      name: 'numbering'
    }, {
      fieldLabel: '问卷主题',
      name: 'subject'
    }, {
      xtype: 'basecombo',
      fieldLabel: '适用品牌',
      name: 'brandCodes',
      storeAutoLoad: true,
      multiSelect: true,
      withAll: true,
      value: '',
      url: APP.globalConfig.restpath + '/business/survey/brandList'
    }, {
      xtype: 'basecombo',
      fieldLabel: '状态',
      name: 'status',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/option/status.questionnaire',
      value: ''
    }]
  }]
});