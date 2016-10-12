Ext.define('APP.view.part.usage.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker',
    'Ext.ux.component.field.SelectorField'

  ],
  title: '整编用法',
  updateDisableItems: ['vehicleCode'],
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
        labelWidth: 85,
        labelPad: 10,
        flex: 1,
        allowBlank: false,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        xtype: 'hidden',
        name: 'id'
      }, {
        xtype: 'basecombo',
        fieldLabel: '车系',
        name: 'seriesCode',
        storeAutoLoad: true,
        withAll: false,
        url: APP.globalConfig.restpath + '/selector/list/series',
        value: '',
        clearFields: ['modelGroupCode']
      }, {
        xtype: 'basecombo',
        fieldLabel: '车型组',
        name: 'modelGroupCode',
        storeAutoLoad: true,
        withAll: false,
        dependField: 'seriesCode',
        url: APP.globalConfig.restpath + '/selector/list/model-group?seriesCode={id}',
        value: ''
      }]
    }, {
      items: [{
        fieldLabel: '整车编码',
        name: 'vehicleCode',
        minLength: 18,
        maxLength: 18
      }, {
        xtype: 'basecombo',
        fieldLabel: '主组',
        name: 'groupCode',
        storeAutoLoad: true,
        withAll: false,
        url: APP.globalConfig.restpath + '/selector/list/group',
        clearFields: ['subGroupCode']
      }]
    }, {
      items: [{
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
        name: 'imageCode'
      }]
    }, {
      items: [{
        fieldLabel: '标号',
        name: 'callout'
      }, {
        fieldLabel: '用量',
        name: 'qty'
      }]
    }, {
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
        fieldLabel: '配件用法名称',
        name: 'partUsageName',
        allowBlank: true
      }]
    }, {
      items: [{
        xtype: 'datefield',
        fieldLabel: '开始时间',
        name: 'startDate',
        vtype: 'daterange',
        allowBlank: true,
        endDateField: 'endDate',
        format: 'Y-m-d'
      }, {
        xtype: 'datefield',
        fieldLabel: '结束时间',
        name: 'endDate',
        vtype: 'daterange',
        startDateField: 'startDate',
        allowBlank: true,
        format: 'Y-m-d'
      }]
    }, {
      items: [{
        xtype: 'textarea',
        fieldLabel: '用法备注',
        name: 'note',
        allowBlank: true
      }]
    }, {
      items: [{
        xtype: 'textarea',
        fieldLabel: '工程师备注',
        name: 'engineerNote',
        allowBlank: true
      }]
    }]
  }]
});