Ext.define('APP.view.business.consult.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.combo.TreeCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  alias: 'widget.consultquery',
  items: [{
    items: [{
      fieldLabel: '问题编码',
      name: 'numbering'
    }, {
      fieldLabel: '问题主题',
      name: 'subject'
    }, {
      xtype: 'treecombo',
      fieldLabel: '问题分类',
      rootVisible: false,
      name: 'classificationCode',
      canSelectFolders: false,
      isAllExpand: true,
      store: Ext.create('APP.store.common.QuestionTypes')
    }, {
      xtype: 'groupdatepicker',
      fieldLabel: '递交时间',
      startName: 'dateAfter',
      endName: 'dateBefore',
      allowBlank: true
    }, {
      xtype: 'basecombo',
      fieldLabel: '服务质量',
      name: 'quality',
      displayFormat: '',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '满意',
        code: 1
      }, {
        name: '不满意',
        code: 0
      }]
    }, {
      xtype: 'basecombo',
      fieldLabel: '省',
      name: 'provinceCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/coreList/district?grade=2&sort=name',
      value: ''
    }]
  }, {
    items: [{
      xtype: 'basecombo',
      fieldLabel: '问题状态',
      name: 'status',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/status/list',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/business/survey/brandList',
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
    }, {
      fieldLabel: '配件编码',
      name: 'partCode'
    }, {
      fieldLabel: '配件名称',
      name: 'partName'
    }]
  }, {
    items: [{
      xtype: 'basecombo',
      fieldLabel: '问题原因',
      name: 'reasonCode',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/reason/select',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否公开',
      name: 'isPublic',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/public/list',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否重点',
      name: 'isSerious',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/important/list',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否屏蔽',
      name: 'blocked',
      storeAutoLoad: true,
      withAll: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/block/list',
      value: ''
    }, {
      fieldLabel: '企业编码',
      name: 'enterpriseCode'
    }, {
      fieldLabel: '提问人',
      name: 'questioner'
    }]
  }]
});