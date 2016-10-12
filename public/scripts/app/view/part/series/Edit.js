Ext.define('APP.view.part.series.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '车系',
  formSubmit: true,
  updateDisableItems: ['code'],
  constructor: function (config) {
    var me = this;

    if (config.editMode === 'update') {
      me.items[0].items[4].hidden = false;
      me.items[0].items[3].allowBlank = true;
    } else {
      me.items[0].items[4].hidden = true;
      me.items[0].items[3].allowBlank = false;
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
      value: ''
    }, {
      fieldLabel: '车系编码',
      name: 'code'
    }, {
      fieldLabel: '车系名称',
      name: 'name'
    }, {
      xtype: 'filefield',
      fieldLabel: '上传车系示意图',
      name: 'imageFilename',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(png)$/i,
      regexText: '上传文件后缀必须是(png)',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      fieldLabel: '当前文件',
      name: 'originImageFilename',
      allowBlank: true,
      value: '',
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '注：(图文件大小：130*95  < 2M、格式：PNG)'
    }]
  }]
});
