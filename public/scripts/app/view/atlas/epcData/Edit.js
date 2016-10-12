Ext.define('APP.view.atlas.epcData.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '发布任务',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  updateDisableItems: [''],
  constructor: function(config) {
    this.callParent(arguments);
  },
  doSave: function () {
    if (!this.getForm().isValid()) {
      return;
    }
    var me = this;
    var params = me.getParams();

    if ((params.isRelease === 1) && (params.dbCode === 'past')) {
      Ext.Msg.confirm('警告', '“可发布”状态数据发布到此服务器不符业务逻辑，确认执行？', function (btn) {
        if (btn === 'yes') {
          me.setLoading(true);
          me.fireEvent('dosave', params);
        }
      });
    } else if ((params.isRelease === 2) && (params.dbCode === 'live')) {
      Ext.Msg.confirm('警告', '“已归档”状态数据发布到此服务器不符业务逻辑，确认执行？', function (btn) {
        if (btn === 'yes') {
          me.setLoading(true);
          me.fireEvent('dosave', params);
        }
      });
    } else {
      me.setLoading(true);
      me.fireEvent('dosave', params);
    }
  },
  items: [{
    items: [{
      fieldLabel: '任务名称',
      name: 'taskName'
    }, {
      xtype: 'basecombo',
      fieldLabel: '发布标识',
      name: 'isRelease',
      displayFormat: '',
      value: '',
      localData: [{
        name: '可发布',
        code: 1
      }, {
        name: '已归档',
        code: 2
      }]
    }, {
      xtype: 'basecombo',
      fieldLabel: '发布服务器',
      name: 'dbCode',
      storeAutoLoad: true,
      withAll: false,
      url: APP.globalConfig.restpath + '/selector/coreList/db-config',
      value: ''
    }]
  }]
});