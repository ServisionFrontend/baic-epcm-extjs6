Ext.define('APP.view.part.partSupplier.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  title: '配件与供应商关系',
  updateDisableItems: ['partCode'],
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
      allowBlank: false,
      xtype: 'selectorfield',
      fieldLabel: '供应商',
      itemId: 'supplierCode',
      name: 'supplierCode',
      editable: false,
      windowTitle: '选择供应商',
      searchInputConfig: {
        width: 275,
        labelPad: 10,
        labelWidth: 100,
        fieldLabel: '供应商名称关键字'
      },
      readUrl: APP.globalConfig.restpath + '/part/supplier',
      fields: [{
        name: 'code',
        mapping: 'supplierCode'
      }, {
        name: 'name',
        mapping: 'supplierName'
      }],
      paramFields: ['name'],
      columns: [{
        text: "序号",
        xtype: 'rownumberer',
        width: 35
      }, {
        text: '供应商编码',
        dataIndex: 'code',
        flex: 1
      }, {
        text: '供应商名称',
        dataIndex: 'name',
        flex: 1
      }]
    }, {
      xtype: 'displayfield',
      fieldLabel: '供应商名称',
      name: 'supplierName',
      allowBlank: true
    }, {
      xtype: 'textarea',
      fieldLabel: '供应商备注',
      name: 'note',
      allowBlank: true
    }, {
      xtype: 'hidden',
      name: 'code'
    }]
  }]
});