Ext.define('APP.view.part.repair.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  title: '维修包',
  updateDisableItems: ['isPart', 'code'],
  constructor: function (config) {
    var me = this;

    me.callParent(arguments);
    me.initEvent();
  },
  initEvent: function () {
    var me = this;
    var isPart = me.down('[itemId=isPart]');
    var partCode1 = me.down('[itemId=partCode1]');
    var partCode2 = me.down('[itemId=partCode2]');

    isPart.on('change', function (that) {
      var value = that.getValue();

      if (value) {
        partCode2.hide();
        partCode2.isNotSubmit = true;
        partCode2.allowBlank = true;
        partCode1.show();
        partCode1.isNotSubmit = false;
        partCode1.allowBlank = false;
      } else {
        partCode1.hide();
        partCode1.isNotSubmit = true;
        partCode1.allowBlank = true;
        partCode2.show();
        partCode2.isNotSubmit = false;
        partCode2.allowBlank = false;
      }
    });

    setTimeout(function () {
      partCode2.allowBlank = true;
    }, 0);
  },

  setRecord: function (params) {
    var me = this;
    var formPanel = me.down("form");
    var fields = formPanel.getForm().getFields();
    var partCode1 = formPanel.down('[itemId=partCode1]');
    var partCode2 = formPanel.down('[itemId=partCode2]');

    if (params.data.isPart) {
      fields.remove(partCode2);
    } else {
      fields.remove(partCode1);
    }

    formPanel.loadRecord(params);
  },

  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '配件',
      name: 'isPart',
      itemId: 'isPart',
      allowBlank: true,
      displayFormat: '',
      value: 1,
      localData: [{
        name: '是',
        code: 1
      }, {
        name: '否',
        code: 0
      }]
    }, {
      fieldLabel: '隶属总成件号',
      name: 'partCode',
      itemId: 'partCode1',
      isNotSubmit: false,
      allowBlank: false,
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
      fieldLabel: '隶属总成件号',
      name: 'partCode',
      itemId: 'partCode2',
      hidden: true,
      allowBlank: false,
      isNotSubmit: true
    }, {
      fieldLabel: '隶属总成名称',
      name: 'partName',
      allowBlank: true
    }, {
      fieldLabel: '维修包件号',
      name: 'code',
      itemId: 'code',
      isNotSubmit: false,
      allowBlank: false,
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
        mapping: 'code'
      }, {
        name: 'name',
        mapping: 'name'
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
      fieldLabel: '维修包名称',
      name: 'name',
      allowBlank: true
    }, {
      xtype: 'textarea',
      fieldLabel: '维修包备注',
      name: 'note',
      maxLength: 100,
      allowBlank: true
    }]
  }]
});