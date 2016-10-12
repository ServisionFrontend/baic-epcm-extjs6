Ext.define('APP.view.part.partStatus.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '配件信息',
  updateDisableItems: ['code'],
  width: 520,
  items: [{
    xtype: 'form',
    layout: {
      type: 'vbox'
    },
    defaults: {
      width: '100%',
      layout: {
        type: 'hbox'
      },
      border: false,
      defaults: {
        xtype: "textfield",
        margin: '0 10 5 0',
        labelWidth: 80,
        labelPad: 10,
        flex: 1,
        allowBlank: false,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        fieldLabel: '配件编码',
        name: 'code'
      }, {
        fieldLabel: '生产件号',
        name: 'productionPartCode',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '配件名称',
        name: 'name'
      }, {
        xtype: 'basecombo',
        fieldLabel: '配件类型',
        name: 'typeCode',
        storeAutoLoad: true,
        withAll: false,
        url: APP.globalConfig.restpath + '/selector/list/part-type',
        value: ''
      }]
    }, {
      items: [{
        xtype: 'basecombo',
        fieldLabel: '配件状态',
        name: 'statusCode',
        storeAutoLoad: true,
        withAll: false,
        url: APP.globalConfig.restpath + '/selector/list/part-status',
        value: ''
      }, {
        fieldLabel: '规格型号',
        name: 'dimensionNo',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '重量',
        name: 'weight',
        allowBlank: true
      }, {
        fieldLabel: '长',
        name: 'length',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '宽',
        name: 'width',
        allowBlank: true
      }, {
        fieldLabel: '高',
        name: 'height',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '特殊采购标志',
        name: 'specialPurchaseTag',
        allowBlank: true
      }, {
        fieldLabel: '配件备注',
        name: 'note',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '特殊采购备注',
        name: 'specialPurchaseNote',
        allowBlank: true
      }]
    }]
  }]
});