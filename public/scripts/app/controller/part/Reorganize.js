Ext.define('APP.controller.part.Reorganize', {
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
        case 'publish':
          Ext.Msg.confirm('提示', '确认发布该整编用法？', function (btn) {
            if (btn === 'yes') {
              me.publishRecord();
            }
          });
          break;
        case 'unpublish':
          Ext.Msg.confirm('提示', '确认停止发布该整编用法？', function (btn) {
            if (btn === 'yes') {
              me.unpublishRecord();
            }
          });
          break;
        default:
          break;
      }
    });

    //grid.on('rowselection', function(that, records) {
    //  me.controlButtonStatus(records);
    //});
  },

  controlButtonStatus: function(records) {
    var me = this,
      grid = me.getGrid(),
      selection = me.getGridSelection(),
      statusCode = records && records[0] &&records[0].get('isRelease'),
      btnPublish = grid.down('[action=publish]'),
      btnUnpublish = grid.down('[action=unpublish]');

    if (statusCode === 1) {
      btnPublish.setDisabled(true);
      btnUnpublish.setDisabled(false);
    } else if (statusCode === 0) {
      btnPublish.setDisabled(false);
      btnUnpublish.setDisabled(true);
    } else {
      btnPublish.setDisabled(true);
      btnUnpublish.setDisabled(true);
    }

    if ((records && records.length > 1) || (records && records.length === 0)) {
      btnPublish.setDisabled(true);
      btnUnpublish.setDisabled(true);
    }
  },

  publishRecord: function () {
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
      url: APP.globalConfig.restpath + '/part/reorganize/publish',
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

  unpublishRecord: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection(),
      codeList = [];

    for (var i = 0; i < records.length; i++) {
      codeList.push(records[i].get('code'));
    }

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/part/reorganize/unpublish',
      method: 'DELETE',
      jsonData: codeList,
      beforerequest: function () {
        grid.setLoading('停止发布中,请稍候...');
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