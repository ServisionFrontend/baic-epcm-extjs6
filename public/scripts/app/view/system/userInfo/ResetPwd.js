Ext.define('APP.view.system.userInfo.ResetPwd', {
  extend: 'Ext.ux.component.edit.Base',
  title: '重置密码',
  width: 450,
  maxHeight: 500,
  bodyPadding: '10',
  initEvents: function () {
    var me = this,
      btnSave = me.down('[itemId=save]'),
      btnCancel = me.down('[itemId=cancel]');

    btnSave.on('click', function () {
      me.save();
    });

    this.callParent(arguments);
  },
  constructor: function (config) {
    var me = this;

    if (Ext.isIE6 || Ext.isIE7 || Ext.isIE8) {
      me.items[0].items[0].items[0].emptyText = '';
      me.items[0].items[0].items[1].emptyText = '';
    }

    this.callParent(arguments);
  },
  save: function () {
    var me = this,
      form  = me.down('form'),
      password = me.down('[itemId=password]').value;

    if (!form.isValid()) {
      Ext.Msg.alert('提示', '存在不合法输入项，请检查！');
      return;
    }

    if (password) {
      Ext.util.ajax({
        url: APP.globalConfig.restpath + '/system/userInfo/reset?username=' + me.username + '&password=' + password,
        method: 'PUT',
        jsonData: {},
        beforerequest: function() {
          me.setLoading('重置用户密码中, 请稍候...');
        },
        callback: function() {
          me.setLoading(false);
        },
        success: function() {
          me.close();
          me.statusUpdateFinish();
        }
      });
    }
  },

  statusUpdateFinish: function () {
    var me = this,
      controller = me.controller,
      grid = controller.getGrid(),
      store = grid.getStore();

    store.loadPage(1);
    grid.controlToolbarStatus(grid, []);
    grid.getSelectionModel().clearSelections();
  },

  items: [{
    border: false,
    items: [{
      xtype: 'form',
      layout: {
        type: 'vbox'
      },
      border:false,
      defaults: {
        xtype: "textfield",
        margin: '0 0 5 0',
        labelWidth: 85,
        labelPad: 10,
        allowBlank: false,
        width:'100%'
      },
      items: [{
        fieldLabel: '新密码',
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
        fieldLabel: '重复新密码',
        name: 'confirmPassword',
        isNotSubmit: true,
        inputType: 'password',
        regex: /^(?![a-zA-Z]+$)(?!\d+$)[a-zA-Z\d]{6,18}$/,
        regexText: '密码为6-18位,必须是字母和数字组合',
        emptyText: '密码为6-18位,必须是字母和数字组合',
        validator: function() {
          return this.textValid === null ? true : this.textValid;
        },
        listeners: {
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
      }]
    }]
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    ui: 'footer',
    defaults: {
      margins: "0 10 0 10"
    },
    layout: {
      align: 'middle',
      pack: 'center',
      type: 'hbox'
    },
    items: [{
      xtype: 'button',
      action: "save",
      itemId: 'save',
      text: "保存",
      iconCls: 'icon-save'
    }, {
      xtype: 'button',
      action: "cancel",
      itemId: 'cancel',
      text: "取消",
      iconCls: 'icon-cancel'
    }]
  }]
});