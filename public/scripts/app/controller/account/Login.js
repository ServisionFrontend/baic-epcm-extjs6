Ext.define('APP.controller.account.Login', {
  extend: 'Ext.app.Controller',
  init: function () {
    var me = this;

    me.initEvents();
    me.callParent(arguments);
  },

  initEvents: function () {
    var me = this;

    me.control({
      "#btn-login": {
        click: function () {
          me.submit();
        }
      },
      "#btn-reset": {
        click: function () {
          me.reset();
        }
      },
      "#tb-name": {
        keypress: function (that, e) {
          if (e.getKey() === e.ENTER) {
            me.submit();
          }
        }
      },
      "#tb-password": {
        keypress: function (that, e) {
          if (e.getKey() === e.ENTER) {
            me.submit();
          }
        }
      },
      "#tb-verifycode": {
        keypress: function (that, e) {
          if (e.getKey() === e.ENTER) {
            me.submit();
          }
        }
      }
    });
  },

  submit: function () {
    var me = this,
      form = me.getLoginForm(),
      params = form.getFieldValues(),
      loginFormPanel = Ext.getCmp("login-form-panel");

    me.inputEmptyFocus(form);

    if (form.isValid()) {
      loginFormPanel.setLoading('正在登录,请稍候...');
      Ext.Ajax.request({
        url: APP.globalConfig.path + '/login',
        jsonData: me.formatParams(params),
        callback: function () {
          loginFormPanel.setLoading(false);
        },
        success: function (response) {
          var root = Ext.decode(response.responseText);

          window.location.href = root.url;
        },
        failure: function (form, action) {
          loginFormPanel.setLoading(false);
          Ext.Msg.alert('错误', '用户名或密码有误');
        }
      })
    }
  },

  inputEmptyFocus: function (form) {
    var me = this,
      tbName = form.findField("name"),
      tbPassword = form.findField("password"),
      tbVerifyCode = form.findField("verifyCode");

    if (Ext.util.Format.trim(tbName.value).length === 0) {
      tbName.focus();
      return;
    }
    if (Ext.util.Format.trim(tbPassword.value).length === 0) {
      tbPassword.focus();
      return;
    }
    /*if (Ext.util.Format.trim(tbVerifyCode.value).length  === 0){
     tbVerifyCode.focus();
     return;
     }*/
  },

  formatParams: function (params) {
    var me = this;

    params['password'] = Ext.util.MD5(params.password);
    params['username'] = Ext.util.Format.trim(params.name);

    return params;
  },

  reset: function () {
    var me = this,
      form = me.getLoginForm(),
      verifyCode = form.findField("verifyCode");

    form.reset(true);
    verifyCode.clearInvalid();
  },

  getLoginForm: function () {
    var me = this,
      form = Ext.getCmp("login-form").getForm();

    return form;
  }
});