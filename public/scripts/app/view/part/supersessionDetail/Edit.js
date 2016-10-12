Ext.define('APP.view.part.supersessionDetail.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  title: '替换组详情',
  updateDisableItems: ['groupCode'],
  items: [{
    items: [{
      allowBlank: false,
      xtype: 'selectorfield',
      fieldLabel: '替换组编码',
      itemId: 'groupCode',
      name: 'groupCode',
      editable: false,
      windowTitle: '选择替换组编码',
      searchInputConfig: {
        width: 275,
        labelPad: 10,
        labelWidth: 90,
        fieldLabel: '替换组编码',
        toUppercase: true
      },
      readUrl: APP.globalConfig.restpath + '/selectorPage/list/substitute',
      fields: [{
        name: 'code',
        mapping: 'groupCode'
      }, {
        name: 'name',
        mapping: 'groupNote'
      }],
      paramFields: ['code'],
      columns: [{
        text: "序号",
        xtype: 'rownumberer',
        width: 35
      }, {
        text: '替换组编码',
        dataIndex: 'code',
        flex: 1
      }, {
        text: '替换组描述',
        dataIndex: 'name',
        flex: 1
      }]
    }, {
      allowBlank: false,
      xtype: 'displayfield',
      name: 'groupNote',
      fieldLabel: '替换组描述'
    }, {
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
      allowBlank: false,
      xtype: 'displayfield',
      name: 'partName',
      fieldLabel: '配件名称'
    }, {
      xtype: 'textarea',
      fieldLabel: '备注',
      name: 'note',
      allowBlank: true
    }, {
      xtype: 'hidden',
      name: 'code'
    }]
  }]
});