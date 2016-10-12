Ext.define('APP.view.business.survey.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.business.survey.Query',
    'APP.view.business.survey.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'surveyquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'surveygrid',
    region: 'center'
  }]
});