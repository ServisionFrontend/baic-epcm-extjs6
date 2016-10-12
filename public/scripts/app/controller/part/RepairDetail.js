Ext.define('APP.controller.part.RepairDetail', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function () {
    var me = this;

    this.initSubEvents();
    this.callParent(arguments);
  },
  initSubEvents: function () {
    var me = this,
      grid = me.getGrid();

    grid.on('toolbarclick', function (that) {
      switch (that.action) {
        case 'delete':
          Ext.Msg.confirm('提示', that.deleteText, function (btn) {
            if (btn === 'yes') {
              me.deleteRecord();
            }
          });
          break;
        default:
          break;
      }
    });
  },

  deleteRecord: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();
    var codeList = [];

    for (var i = 0; i < records.length; i++) {
      console.log(records[i].get('code'));

      var temp = records[i].get('code') || '';

      codeList.push(temp);
    }

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/part/repairDetail/',
      method: 'DELETE',
      jsonData: codeList,
      beforerequest: function () {
        grid.setLoading('删除中,请稍候...');
      },
      callback: function () {
        grid.setLoading(false);
      },
      success: function () {
        me.statusUpdateFinish();
      }
    });
  },

  statusUpdateFinish: function () {
    var me = this,
      grid = me.getGrid(),
      store = grid.getStore();

    store.loadPage(1);
    grid.controlToolbarStatus(grid, []);
    grid.getSelectionModel().clearSelections();
  }

});