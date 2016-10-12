Ext.define('APP.view.part.repairDetail.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  title: '维修包详情',
  updateDisableItems: ['kitCode'],
  items: [{
    items: [{
      fieldLabel: '维修包件号',
      name: 'kitCode',
      itemId: 'kitCode',
      isNotSubmit: false,
      allowBlank: false,
      xtype: 'selectorfield',
      editable: false,
      windowTitle: '选择维修包',
      searchInputConfig: {
        width: 275,
        labelPad: 10,
        labelWidth: 90,
        fieldLabel: '维修包件号',
        toUppercase: true
      },
      readUrl: APP.globalConfig.restpath + '/part/repair',
      fields: [{
        name: 'code',
        mapping: 'kitCode'
      }, {
        name: 'name',
        mapping: 'kitName'
      }],
      paramFields: ['code'],
      columns: [{
        text: "序号",
        xtype: 'rownumberer',
        width: 35
      }, {
        text: '维修包件号',
        dataIndex: 'code',
        flex: 1
      }, {
        text: '维修包名称',
        dataIndex: 'name',
        flex: 1
      }]
    }, {
      fieldLabel: '设计编码',
      name: 'designCode',
      allowBlank: true
    },{
      fieldLabel: '配件编码',
      name: 'partCode',
      itemId: 'partCode',
      isNotSubmit: false,
      allowBlank: true,
      xtype: 'selectorfield',
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
      fieldLabel: '生产编码',
      name: 'productionCode',
      allowBlank: true
    }, {
      fieldLabel: '用量',
      name: 'qty',
      xtype: 'numberfield',
      minValue: 0,
      allowBlank: true
    }, {
      fieldLabel: '供应商编码',
      name: 'supplierCode',
      allowBlank: true
    }, {
      xtype: 'textarea',
      fieldLabel: '维修包描述',
      name: 'note',
      maxLength: 100,
      allowBlank: false
    }, {
      xtype: 'hidden',
      name: 'code'
    }]
  }]
});