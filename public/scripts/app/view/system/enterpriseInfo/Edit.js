Ext.define('APP.view.system.enterpriseInfo.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '企业管理',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  updateDisableItems: ['code'],
  doSave: function () {
    if (!this.getForm().isValid()) {
      return;
    }
    var me = this;
    params = me.getParams();

    if (params.type == 2) {
      Ext.Msg.alert('提示', 'DMS管理企业不可后台创建，请选择其他类型！');
    } else {
      me.setLoading(true);
      me.fireEvent('dosave', params);
    }
  },
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '企业类型',
      name: 'type',
      storeAutoLoad: true,
      withAll: false,
      localData: [
        {code: 1, name: '北汽外部企业'},
        {code: 0, name: '北汽内部企业'}
      ]
    }, {
      fieldLabel: '企业编码',
      name: 'code'
    }, {
      fieldLabel: '企业名称',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '省',
      name: 'provinceCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/coreList/district?grade=2&sort=name',
      value: '',
      listeners: {
        beforerender: function (construct) {
        }
      }
    }, {
      xtype: 'basecombo',
      fieldLabel: '市',
      name: 'cityCode',
      storeAutoLoad: true,
      dependField: 'provinceCode',
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/coreList/district?grade=3&parentCode={id}&sort=name',
      value: ''
    }, {
      fieldLabel: '详细地址',
      name: 'address'
    }, {
      xtype: 'basecombo',
      fieldLabel: '经销品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      fieldLabel: '联系人姓名',
      name: 'contactName',
      allowBlank: true
    }, {
      fieldLabel: '联系人电话',
      name: 'contactPhone',
      allowBlank: true,
      regex: /(^(\d{3,4}-)?\d{7,8})$|(1[3|4|5|7|8][0-9]{9})$/i,
      regexText: '号码格式有误'
    }, {
      fieldLabel: '联系人EMAIL',
      name: 'contactMail',
      allowBlank: true,
      vtype: 'email'
    }]
  }]
});