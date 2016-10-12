Ext.define('APP.view.part.brand.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '品牌',
  formSubmit: true,
  updateDisableItems: ['code'],
  constructor: function (config) {
    var me = this;

    if (config.editMode === 'update') {
      me.items[0].items[3].hidden = false;
      me.items[0].items[2].allowBlank = true;
    } else {
      me.items[0].items[3].hidden = true;
      me.items[0].items[2].allowBlank = false;
    }
    this.callParent(arguments);
  },
  items: [{
    items: [{
      fieldLabel: '品牌编码',
      name: 'code'
    }, {
      fieldLabel: '品牌名称',
      name: 'name'
    }, {
      xtype: 'filefield',
      fieldLabel: '上传logo图文件',
      name: 'logoFilename',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(png)$/i,
      regexText: '上传文件后缀必须是(png)',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      fieldLabel: '当前文件',
      name: 'originLogoFilename',
      allowBlank: true,
      value: '',
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '注：(图文件大小：254 * 65  < 2M、格式：PNG)'
    }]
  }]
});