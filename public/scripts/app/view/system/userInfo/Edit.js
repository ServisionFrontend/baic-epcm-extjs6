Ext.define('APP.view.system.userInfo.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.field.SelectorField'
  ],
  title: '用户',
  createDisableItems: ['userType'],
  updateDisableItems: ['username', 'password', 'confirmPassword'],
  constructor: function (config) {
    var me = this;

    if (Ext.isIE6 || Ext.isIE7 || Ext.isIE8) {
      me.items[0].items[2].emptyText = '';
      me.items[0].items[3].emptyText = '';
    }

    this.callParent(arguments);

    if (this.editMode === 'update') {
      this.down('[itemId=password]').regex = /.*/;
      this.down('[itemId=confirmPassword]').regex = /.*/;
    } else {
      var now = new Date();
      now.setFullYear(now.getFullYear() + 1);
      this.down('[itemId=expirationTime]').setValue(now);
    }
  },
  getParams: function() {
    var me = this,
      params = {},
      items = me.getFormFields();

    Ext.each(items, function(item) {
      if (!item.isNotSubmit) {
        if (me.editMode === 'update') {
          if (item.name !== 'password' && item.name !== 'confirmPassword') {
            params[item.name] = item.getValue();
          }
        } else {
          params[item.name] = item.getValue();
        }
      }
    });

    return params;
  },
  items: [{
    items: [{
      fieldLabel: '用户名',
      name: 'username',
      regex: /^[a-zA-Z0-9._-]+$/,
      regexText: '用户名只能包含字母、数字、下划线、减号或点'
    }, {
      fieldLabel: '用户姓名',
      name: 'realName'
    }, {
      fieldLabel: '密码',
      name: 'password',
      itemId: 'password',
      inputType: 'password',
      regex: /^(?![a-zA-Z]+$)(?!\d+$)[a-zA-Z\d]{6,18}$/,
      regexText: '密码为6-18位,必须是字母和数字组合',
      emptyText: '密码为6-18位,必须是字母和数字组合',
      validator: function() {
        return this.textValid === null ? true : this.textValid;
      },
      listeners: {
        afterrender: function() {
          var me = this,
            errorTip = '两次密码输入不一致',
            form = me.up('form').getForm(),
            password = me.getRawValue(),
            confirmPassword = form.findField('confirmPassword').getRawValue();

          if (confirmPassword.length > 0) {
            if (password !== confirmPassword) {
              me.markInvalid(errorTip);
              me.textValid = errorTip;
            } else {
              me.clearInvalid();
              me.textValid = null;
            }
          } else {
            me.clearInvalid();
            me.textValid = null;
          }
        },
        blur: function() {
          var me = this,
            errorTip = '两次密码输入不一致',
            form = me.up('form').getForm(),
            password = me.getRawValue(),
            confirmPassword = form.findField('confirmPassword').getRawValue();

          if (confirmPassword.length > 0) {
            if (password !== confirmPassword) {
              me.markInvalid(errorTip);
              me.textValid = errorTip;
            } else {
              me.clearInvalid();
              me.textValid = null;
            }
          } else {
            me.clearInvalid();
            me.textValid = null;
          }
        }
      }
    }, {
      fieldLabel: '确认密码',
      name: 'confirmPassword',
      itemId: 'confirmPassword',
      isNotSubmit: true,
      inputType: 'password',
      regex: /^(?![a-zA-Z]+$)(?!\d+$)[a-zA-Z\d]{6,18}$/,
      regexText: '密码为6-18位,必须是字母和数字组合',
      emptyText: '密码为6-18位,必须是字母和数字组合',
      validator: function() {
        return this.textValid === null ? true : this.textValid;
      },
      listeners: {
        afterrender: function() {
          var me = this,
            errorTip = '两次密码输入不一致',
            form = me.up('form').getForm(),
            password = form.findField('password').getRawValue(),
            confirmPassword = me.getRawValue();

          if (password !== confirmPassword) {
            me.markInvalid(errorTip);
            me.textValid = errorTip;
          } else {
            me.clearInvalid();
            me.textValid = null;
          }
        },
        blur: function() {
          var me = this,
            errorTip = '两次密码输入不一致',
            form = me.up('form').getForm(),
            password = form.findField('password').getRawValue(),
            confirmPassword = me.getRawValue();

          if (password !== confirmPassword) {
            me.markInvalid(errorTip);
            me.textValid = errorTip;
          } else {
            me.clearInvalid();
            me.textValid = null;
          }
        }
      }
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'logoBrandCode',
      storeAutoLoad: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '用户类型',
      name: 'userType',
      storeAutoLoad: true,
      value: 0,
      localData: [{
        code: 0,
        name: 'EPC管理用户'
      }, {
        code: 1,
        name: 'DMS管理用户'
      }]
    }, {
      xtype: 'datefield',
      fieldLabel: '使用截止日期',
      itemId: 'expirationTime',
      name: 'expirationTime'
    }, {
      allowBlank: false,
      xtype: 'selectorfield',
      fieldLabel: '企业',
      itemId: 'enterpriseCode',
      name: 'enterpriseCode',
      editable: false,
      windowTitle: '选择企业',
      searchInputConfig: {
        width: 275,
        labelPad: 10,
        labelWidth: 90,
        fieldLabel: '企业名称关键字'
      },
      readUrl: APP.globalConfig.restpath + '/system/enterpriseInfo',
      fields: [{
        name: 'code',
        mapping: 'enterpriseCode'
      }, {
        name: 'name',
        mapping: 'enterpriseName'
      }],
      paramFields: ['name'],
      columns: [{
        text: "序号",
        xtype: 'rownumberer',
        width: 35
      }, {
        text: '企业编码',
        dataIndex: 'code',
        width: 100
      }, {
        text: '企业名称',
        dataIndex: 'name',
        flex: 1
      }]
    }, {
      xtype: 'displayfield',
      fieldLabel: '企业名称',
      name: 'enterpriseName',
      allowBlank: true
    }, {
      fieldLabel: '用户EMAIL',
      name: 'mail',
      allowBlank: false,
      vtype: 'email'
    }, {
      fieldLabel: '用户电话',
      name: 'telephone',
      allowBlank: true
    }, {
      xtype: 'basecombo',
      fieldLabel: '用户角色',
      name: 'roleCodes',
      storeAutoLoad: true,
      allowBlank: true,
      multiSelect: true,
      url: APP.globalConfig.restpath + '/selector/coreList/role'
    }, {
      xtype: 'basecombo',
      fieldLabel: '可选数据库',
      name: 'dbCodes',
      storeAutoLoad: true,
      allowBlank: false,
      multiSelect: true,
      url: APP.globalConfig.restpath + '/selector/coreList/db-config'
    }]
  }]
});