Ext.define('APP.view.part.partPhoto.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  formSubmit: true,
  title: '配件照片',
  updateDisableItems: ['partCode', 'partName'],
  constructor: function(config) {
    var me = this;

    if (config.editMode === 'update') {
      me.items[0].items[3].hidden = false;
      me.items[0].items[2].allowBlank = false;
    } else {
      me.items[0].items[3].hidden = true;
      me.items[0].items[2].allowBlank = false;

    }
    this.callParent(arguments);
  },
  items: [{
    items: [{
      allowBlank: false,
      xtype: 'selectorfield',
      fieldLabel: '配件编码',
      itemId: 'partCode',
      name: 'partCode',
      editable: false,
      windowTitle: '选择配件',
      searchInputConfig: {
        width: 275,
        labelPad: 10,
        labelWidth: 90,
        fieldLabel: '配件编码',
        toUppercase: true
      },
      readUrl: APP.globalConfig.restpath + '/part/partStatus',
      fields: [{
        name: 'code',
        mapping: 'partCode'
      }, {
        name: 'name',
        mapping: 'partName'
      }],
      paramFields: ['code'],
      columns: [{
        text: "序号",
        xtype: 'rownumberer',
        width: 35
      }, {
        text: '配件编码',
        dataIndex: 'code',
        flex: 1
      }, {
        text: '配件名称',
        dataIndex: 'name',
        flex: 1
      }]
    }, {
      xtype: 'displayfield',
      fieldLabel: '配件名称',
      name: 'partName',
      allowBlank: true
    }, {
      xtype: 'filefield',
      fieldLabel: '上传配件照片',
      name: 'filename',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(png)$|\.(jpg)$|\.(jpeg)$|\.(bmp)$/i,
      regexText: '上传文件后缀必须是(png、jpg、jpeg、bmp)'
    }, {
      xtype: 'displayfield',
      fieldLabel: '当前文件',
      name: 'originFilename',
      allowBlank: true,
      value: '',
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '（提示：图文件大小：400*400  <2M、格式：png、jpg、jpeg、bmp）'
    }, {
      xtype: 'hidden',
      name: 'code',
      itemId: 'code'
    }]
  }]
});