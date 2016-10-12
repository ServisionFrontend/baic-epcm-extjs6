Ext.define('APP.view.part.legend.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  formSubmit: true,
  title: '图例',
  defaults: {
    xtype: 'form',
    layout: {
      type: 'vbox'
    },
    autoScroll: true,
    defaults: {
      xtype: "textfield",
      margin: '0 0 5 0',
      labelWidth: 70,
      labelPad: 10,
      width: 415,
      allowBlank: false
    },
    border: false
  },
  updateDisableItems: ['code'],
  constructor: function (config) {
    var me = this;

    if (Ext.isIE6 || Ext.isIE7 || Ext.isIE8) {
      me.items[0].items[10].width = 377;
    }

    if (config.editMode === 'update') {
      me.items[0].items[8].hidden = false;
      me.items[0].items[11].hidden = false;
      me.items[0].items[7].allowBlank = true;
      me.items[0].items[10].allowBlank = true;
    } else {
      me.items[0].items[8].hidden = true;
      me.items[0].items[11].hidden = true;
      me.items[0].items[7].allowBlank = false;
      me.items[0].items[10].allowBlank = false;
    }

    this.callParent(arguments);
  },
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: '',
      clearFields: ['seriesCode', 'groupCode', 'subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: false,
      dependField: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}',
      value: '',
      clearFields: ['groupCode', 'subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/list/group',
      value: '',
      clearFields: ['subGroupCode']
    }, {
      xtype: 'basecombo',
      fieldLabel: '分组',
      name: 'subGroupCode',
      storeAutoLoad: true,
      withAll: false,
      dependField: 'groupCode',
      url: APP.globalConfig.restpath + '/selector/list/sub-group?groupCode={id}',
      value: ''
    }, {
      fieldLabel: '图例编码',
      name: 'code'
    }, {
      fieldLabel: '图例名称',
      name: 'name'
    }, {
      fieldLabel: '图例备注',
      name: 'note',
      allowBlank: true
    }, {
      xtype: 'filefield',
      fieldLabel: '上传SVG图文件',
      name: 'svgFilename',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(svg)$/i,
      regexText: '上传文件后缀必须是(svg)',
      itemId: 'svgFilename'
    }, {
      xtype: 'displayfield',
      fieldLabel: '当前SVG图',
      name: 'originSvgFilename',
      allowBlank: true,
      value: '',
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '（大小：<2M）'
    }, {
      xtype: 'filefield',
      fieldLabel: '上传JPG图文件',
      name: 'gifFilename',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(jpg)$/i,
      regexText: '上传文件后缀必须是(jpg)',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      fieldLabel: '当前JPG图',
      name: 'originGifFilename',
      allowBlank: true,
      value: '',
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '（大小：<2M）'
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '提示：JPG图文件是保障低于IE9以下浏览器查看图功能正常'
    }]
  }]
});