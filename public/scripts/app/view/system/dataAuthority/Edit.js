Ext.define('APP.view.system.dataAuthority.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '数据权限包',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.combo.GroupCombo'
  ],
  updateDisableItems: ['code'],
  getParams: function() {
    var me = this,
      params = {},
      items = me.getFormFields();

    Ext.each(items, function(item) {
      if (item.xtype === 'treecombo') {
        params[item.name] = item.value && item.value.split(',');
      } else {
        params[item.name] = item.getValue();
      }
    });

    return params;
  },
  items: [{
    items: [{
      fieldLabel: '权限包编码',
      name: 'code'
    }, {
      fieldLabel: '权限包名称',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/list/brand',
      value: ''
    }, {
      xtype: 'textareafield',
      fieldLabel: '权限包备注',
      width: '100%',
      height: 100,
      name: 'note',
      allowBlank: true
    }, {
      xtype: 'groupcombo',
      fieldLabel: '权限包设定',
      name: 'auths',
      storeAutoLoad: true,
      groupCode: 'brandCode',
      url: APP.globalConfig.restpath + '/selector/options?args=/data-auth/list-flat'
    }]
  }]
});