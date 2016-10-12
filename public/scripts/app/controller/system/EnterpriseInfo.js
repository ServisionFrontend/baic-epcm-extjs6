Ext.define('APP.controller.system.EnterpriseInfo', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function () {
    var me = this;

    this.initSubEvents();
    this.callParent(arguments);
  },
  initSubEvents: function () {
    var me = this,
      grid = me.getGrid();


    grid.on('rowselection', function(that, records) {
        me.controlButtonStatus(records);
    });
  },

  controlButtonStatus: function(records) {
    var me = this,
      grid = me.getGrid(),
      selection = me.getGridSelection(),
      statusCode = records && records[0] &&records[0].get('type'),
      btnUpdate = grid.down('[action=update]'),
      btnDestroy = grid.down('[action=destroy]');

    if ((records && records.length > 1) || (records && records.length === 0)) {
      btnUpdate.setDisabled(true);
    } else {
      btnUpdate.setDisabled(statusCode == '2');
    }

    if (records && records.length > 0 && !me.checkDisableDestroy(selection)) {
      btnDestroy.setDisabled(false);
    } else {
      btnDestroy.setDisabled(true);
    }
  },

  destroyRecord: function (params) {
    var me = this,
      grid = me.getGrid(),
      store = grid.getStore(),
      selection = me.getGridSelection();

    if (me.checkDisableDestroy(selection)) {
      Ext.Msg.alert("提示", "不能删除DMS管理企业！");
    } else {
      store.proxy.extraJsonData = params;
      store.remove(selection);
      me.deselectAll();
    }
  },

  checkDisableDestroy: function (records) {
    var result = false;

    for (var i = 0; i < records.length; i++) {
      if (records[i].get('type') == '2') {

        result = true;

        return result;
      }
    }

    return result;
  }

});