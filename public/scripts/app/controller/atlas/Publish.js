Ext.define('APP.controller.atlas.Publish', {
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
        case 'download':
          Ext.Msg.confirm('提示', '确认下载该车型的配件图册？', function (btn) {
            if (btn === 'yes') {
              me.download();
            }
          });
          break;
        default:
          break;
      }
    });
  },

  download: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection(),
      codeList = [];

    for (var i = 0; i < records.length; i++) {
      var temp = {};

      temp.vehicleCode = records[i].get('code') || '';
      temp.brandCode = records[i].get('brandCode') || '';
      temp.seriesCode = records[i].get('seriesCode') || '';
      temp.modelGroupCode = records[i].get('modelGroupCode') || '';
      temp.modelCode = records[i].get('modelCode') || '';

      codeList.push(temp);
    }

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/atlas/image-print/download',
      method: 'POST',
      jsonData: codeList,
      beforerequest: function () {
        grid.setLoading('发布中,请稍候...');
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