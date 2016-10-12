Ext.define('APP.view.business.consultDetail.question.View', {
  extend: 'Ext.form.Panel',
  alias: 'widget.questionview',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.combo.TreeCombo',
    'Ext.ux.plugin.LabelRequired'
  ],
  plugins: ['formlabelrequired'],
  title: '问题',
  mixins: {
    viewBase: 'APP.view.common.class.Base'
  },
  width: 1024,
  layout: {
    type: 'vbox'
  },
  listeners: {
    afterrender: function () {
      var me = this;

      me.load();
    }
  },

  load: function () {
    var me = this,
      urlParams = me.getUrlParams();

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/business/consultDetail/questions',
      disableCaching: true,
      params: {
        code: urlParams.code
      },
      beforerequest: function () {
        me.setLoading(true);
      },
      callback: function () {
        me.setLoading(false);
      },
      success: function (result) {
        me.bindFormData(result);
      }
    });
  },

  initEvents: function () {
    var me = this,
      btnSave = me.down('[itemId=save]');

    btnSave.on('click', function () {
      me.doSave(function () {
        Ext.Msg.alert('提示', '保存成功');
      });
    });
  },

  bindFormData: function (result) {
    var me = this,
      form = me.getForm();

    form.setValues(result);
    me.controlSaveBtn(result);

    me.fireEvent('afterbindformdata', result);
  },

  controlSaveBtn: function (result) {
    var me = this;
    btnSave = me.down('[itemId=save]');

    if (result.status === 2) {
      btnSave.hide();
    } else {
      btnSave.show();
    }
  },

  doSave: function (callback) {
    if (!this.getForm().isValid()) {
      Ext.Msg.alert('提示', '【问题原因】为必输项！');
      return;
    }
    var me = this,
      params = me.getParams();

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/business/consultDetail/questions',
      disableCaching: true,
      method: 'PUT',
      jsonData: params,
      beforerequest: function () {
        me.setLoading(true);
      },
      callback: function () {
        me.setLoading(false);
      },
      success: function () {
        if (typeof callback === 'function') {
          callback.apply();
        }
      }
    });
  },

  getParams: function () {
    var me = this,
      params = {},
      items = me.query('[isModify]'),
      urlParams = me.getUrlParams();

    Ext.each(items, function (item) {
      params[item.name] = item.getValue();
    });

    params['questionCode'] = urlParams.code;
    return params;
  },

  defaults: {
    margin: 'auto auto 5 auto',
    border: false,
    width: '100%',
    layout: {
      type: 'hbox'
    },
    defaults: {
      xtype: 'displayfield',
      layout: {
        type: 'hbox'
      },
      width: 250,
      labelPad: 10,
      labelWidth: 65,
      margin: 'auto 15 auto auto'
    }
  },
  bodyPadding: 5,
  items: [{
    items: [{
      fieldLabel: '问题编码',
      name: 'numbering'
    }, {
      fieldLabel: '问题主题',
      name: 'subject'
    }, {
      xtype: 'treecombo',
      fieldLabel: '问题分类',
      rootVisible: false,
      name: 'classificationCode',
      canSelectFolders: false,
      isModify: true,
      store: Ext.create('APP.store.common.QuestionTypes'),
      isAllExpand: true
    }, {
      fieldLabel: '提问日期',
      name: 'createdOn',
      renderer: function (val) {
        if (val) {
          return Ext.util.Format.localDate(parseInt(val));
        } else {
          return '--';
        }
      }
    }]
  }, {
    defaults: {
      xtype: 'displayfield',
      layout: {
        type: 'hbox'
      },
      width: 250,
      labelPad: 10,
      labelWidth: 30,
      margin: 'auto 15 auto auto'
    },
    items: [{
      fieldLabel: '品牌',
      name: 'brandName'
    }, {
      fieldLabel: '车系',
      name: 'seriesName'
    }, {
      fieldLabel: '主组',
      name: 'groupName'
    }, {
      fieldLabel: '分组',
      name: 'subgroupName'
    }]
  }, {
    items: [{
      fieldLabel: 'VIN号',
      name: 'vin'
    }, {
      fieldLabel: '配件编码',
      name: 'partCode'
    }, {
      fieldLabel: '配件名称',
      name: 'partName'
    }]
  }, {
    items: [{
      fieldLabel: '问题描述',
      name: 'description',
      width: 800
    }]
  }, {
    items: [{
      fieldLabel: '附件',
      width: 800,
      name: 'attachments',
      rndTpl: new Ext.XTemplate('<tpl for="attachments"><a href="{path}" target="_self" >{name}</a>&nbsp;&nbsp;</tpl>'),
      renderer: function (value, field) {
        if (value && value.length > 0) {
          return this.rndTpl.apply({
            attachments: Ext.decode(value)
          });
        } else {
          return '';
        }
      },

      setValue: function (value) {
        var me = this;

        if (value && value.length) {
          me.setRawValue(Ext.encode(value));
          return me.mixins.field.setValue.call(me, value);
        }
      }
    }]
  }, {
    items: [{
      fieldLabel: '企业编码',
      name: 'enterpriseCode'
    }, {
      fieldLabel: '企业名称',
      name: 'enterpriseName'
    }, {
      fieldLabel: '提问人',
      name: 'questioner'
    }, {
      fieldLabel: '联系电话',
      name: 'contactPhone'
    }]
  }, {
    items: [{
      xtype: 'basecombo',
      fieldLabel: '问题原因',
      name: 'reasonCode',
      storeAutoLoad: true,
      isModify: true,
      allowBlank: false,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/reason/select'
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否公开',
      name: 'isPublic',
      allowBlank: true,
      storeAutoLoad: true,
      isModify: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/public/list'
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否重点',
      name: 'isSerious',
      isModify: true,
      allowBlank: true,
      storeAutoLoad: true,
      url: APP.globalConfig.restpath + '/selector/options?args=/question/important/list'
    }]
  }, {
    layout: {
      align: 'middle',
      pack: 'center',
      type: 'hbox'
    },
    margin: '10 auto auto auto',
    items: [{
      xtype: 'button',
      itemId: 'save',
      text: "保存",
      width: 55,
      iconCls: 'icon-save'
    }]
  }]
});