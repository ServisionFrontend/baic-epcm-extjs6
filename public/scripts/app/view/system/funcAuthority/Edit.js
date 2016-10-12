Ext.define('APP.view.system.funcAuthority.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '功能权限',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.combo.TreeCombo'
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
      xtype: 'treecombo',
      fieldLabel: '权限包设定',
      multiselect: true,
      rootVisible: false,
      name: 'auths',
      store: Ext.create('APP.store.common.FuncKit')
    }]
  }]
});