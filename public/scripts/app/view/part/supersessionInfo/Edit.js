Ext.define('APP.view.part.supersessionInfo.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  title: '替换信息',
  updateDisableItems: [],
  width: 520,
  constructor: function (config) {
    var me = this;

    me.callParent(arguments);
    me.initEvent();
  },
  initEvent: function () {
    var me = this;
    var supersessionMode = me.down('[itemId=supersessionMode]');
    var formPanel = me.down("form");
    var newCode1 = me.down('[itemId=newCode1]');
    var newCode2 = me.down('[itemId=newCode2]');
    var oldCode1 = me.down('[itemId=oldCode1]');
    var oldCode2 = me.down('[itemId=oldCode2]');
    var newNote1 = me.down('[itemId=newNote1]');
    var newNote2 = me.down('[itemId=newNote2]');
    var oldNote1 = me.down('[itemId=oldNote1]');
    var oldNote2 = me.down('[itemId=oldNote2]');

    supersessionMode.on('change', function (that) {
      var value = that.getValue();

      if (value) {
        newCode1.hide();
        newCode1.isNotSubmit = true;
        newCode1.allowBlank = true;
        newCode2.show();
        newCode2.isNotSubmit = false;
        newCode2.allowBlank = false;
        oldCode1.hide();
        oldCode1.isNotSubmit = true;
        oldCode1.allowBlank = true;
        oldCode2.show();
        oldCode2.isNotSubmit = false;
        oldCode2.allowBlank = false;
        newNote1.hide();
        newNote1.isNotSubmit = true;
        newNote1.allowBlank = true;
        newNote2.show();
        newNote2.isNotSubmit = false;
        newNote2.allowBlank = false;
        oldNote1.hide();
        oldNote1.isNotSubmit = true;
        oldNote1.allowBlank = true;
        oldNote2.show();
        oldNote2.isNotSubmit = false;
        oldNote2.allowBlank = false;
      } else {
        newCode2.hide();
        newCode2.isNotSubmit = true;
        newCode2.allowBlank = true;
        newCode1.show();
        newCode1.isNotSubmit = false;
        newCode1.allowBlank = false;
        oldCode2.hide();
        oldCode2.isNotSubmit = true;
        oldCode2.allowBlank = true;
        oldCode1.show();
        oldCode1.isNotSubmit = false;
        oldCode1.allowBlank = false;
        newNote2.hide();
        newNote2.isNotSubmit = true;
        newNote2.allowBlank = true;
        newNote1.show();
        newNote1.isNotSubmit = false;
        newNote1.allowBlank = false;
        oldNote2.hide();
        oldNote2.isNotSubmit = true;
        oldNote2.allowBlank = true;
        oldNote1.show();
        oldNote1.isNotSubmit = false;
        oldNote1.allowBlank = false;
      }
    });

    setTimeout(function () {
      newCode2.allowBlank = true;
      oldCode2.allowBlank = true;
      newNote2.allowBlank = true;
      oldNote2.allowBlank = true;
    }, 0);
  },

  setRecord: function (params) {
    var me = this;
    var formPanel = me.down("form");
    var fields = formPanel.getForm().getFields();
    var newCode1 = formPanel.down('[itemId=newCode1]');
    var newCode2 = formPanel.down('[itemId=newCode2]');
    var oldCode1 = formPanel.down('[itemId=oldCode1]');
    var oldCode2 = formPanel.down('[itemId=oldCode2]');
    var newNote1 = formPanel.down('[itemId=newNote1]');
    var newNote2 = formPanel.down('[itemId=newNote2]');
    var oldNote1 = formPanel.down('[itemId=oldNote1]');
    var oldNote2 = formPanel.down('[itemId=oldNote2]');

    newCode2.setValue(params.data.newCode);
    oldCode2.setValue(params.data.oldCode);
    newNote2.setValue(params.data.newNote);
    oldNote2.setValue(params.data.oldNote);

    formPanel.loadRecord(params);
  },

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
        labelWidth: 70,
        labelPad: 10,
        flex: 1,
        allowBlank: false,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        xtype: 'basecombo',
        fieldLabel: '替换方式',
        itemId: 'supersessionMode',
        name: 'isGroup',
        value: 0,
        localData: [{
          name: '单件替换',
          code: 0
        }, {
          name: '组替换',
          code: 1
        }]
      }, {
        xtype: 'basecombo',
        fieldLabel: '替换类型',
        name: 'typeCode',
        storeAutoLoad: true,
        withAll: false,
        url: APP.globalConfig.restpath + '/selector/list/substitute-type',
        value: ''
      }]
    }, {
      items: [{
        fieldLabel: '新件号',
        name: 'newCode',
        itemId: 'newCode1',
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
          mapping: 'newCode'
        }, {
          name: 'name',
          mapping: 'newNote'
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
        fieldLabel: '新替换组编码',
        name: 'newCode',
        itemId: 'newCode2',
        hidden: true,
        isNotSubmit: true,
        allowBlank: false
      }, {
        xtype: 'displayfield',
        fieldLabel: '新件名称',
        name: 'newNote',
        itemId: 'newNote1',
        isNotSubmit: false,
        allowBlank: false
      }, {
        fieldLabel: '新替换组描述',
        name: 'newNote',
        itemId: 'newNote2',
        hidden: true,
        isNotSubmit: true,
        allowBlank: false
      }]
    }, {
      items: [{
        fieldLabel: '旧件号',
        name: 'oldCode',
        itemId: 'oldCode1',
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
          mapping: 'oldCode'
        }, {
          name: 'name',
          mapping: 'oldNote'
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
        fieldLabel: '旧替换组编码',
        name: 'oldCode',
        itemId: 'oldCode2',
        hidden: true,
        isNotSubmit: true,
        allowBlank: false
      }, {
        xtype: 'displayfield',
        fieldLabel: '旧件名称',
        name: 'oldNote',
        itemId: 'oldNote1',
        isNotSubmit: false,
        allowBlank: false
      }, {
        fieldLabel: '旧替换组描述',
        name: 'oldNote',
        itemId: 'oldNote2',
        hidden: true,
        isNotSubmit: true,
        allowBlank: false
      }]
    }, {
      items: [{
        xtype: 'datefield',
        fieldLabel: '断点时间',
        name: 'replaceTime',
        allowBlank: true
      }, {
        fieldLabel: '断点信息',
        name: 'breakPointNote',
        allowBlank: true
      }]
    }, {
      items: [{
        xtype: 'textarea',
        fieldLabel: '替换备注',
        name: 'note',
        allowBlank: true
      }, {
        xtype: 'hidden',
        name: 'code'
      }]
    }]
  }]
});