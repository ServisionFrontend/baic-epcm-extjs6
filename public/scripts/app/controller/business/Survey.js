Ext.define('APP.controller.business.Survey', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function() {
    var me = this;

    me.initSubEvents();
    me.callParent(arguments);
  },

  updateRecord: function(params) {
    var me = this,
      url = me.getGrid().getStore().proxyAPI.update;

    Ext.util.ajax({
      url: url,
      jsonData: params,
      method: 'PUT',
      success: function() {
        me.createUpdateSuccess();
      },
      failure: function() {
        me.updateFailure();
      }
    });
  },

  updateFailure: function() {
    var me = this,
      grid = me.getGrid(),
      store = grid.getStore();

    me.editWindow.setLoading(false);
    store.rejectChanges();
  },

  initSubEvents: function() {
    var me = this,
      grid = me.getGrid();

    grid.on('toolbarclick', function(that) {
      switch (that.action) {
        case 'publish':
          Ext.Msg.confirm("提示", "确认选中的记录发布？", function(btn) {
            if (btn === "yes") {
              me.publish();
            }
          });
          break;
        case 'unpublish':
          Ext.Msg.confirm("提示", "确认选中的记录设置作废？", function(btn) {
            if (btn === "yes") {
              me.setExpired();
            }
          });
          break;
        default:
          break;
      }
    });

    grid.on('rowselection', function(that, records) {
      if (records.length > 0) {
        me.controlButtonStatus(records);
      }
    });
  },

  controlButtonStatus: function(records) {
    var me = this,
      grid = me.getGrid(),
      status = records[0].get('status'),
      btnUpdate = grid.down('[action=update]'),
      btnDelete = grid.down('[action=destroy]'),
      btnPublish = grid.down('[action=publish]'),
      btnUnpublish = grid.down('[action=unpublish]');

    if (records.length > 1) {
      btnUpdate.setDisabled(true)
      btnDelete.setDisabled(true);
      btnPublish.setDisabled(true);
      btnUnpublish.setDisabled(true);
    } else {
      btnUpdate.setDisabled(!(status == '0'))
      btnDelete.setDisabled(!(status == '0'));
      btnPublish.setDisabled(!(status == '0'));
      btnUnpublish.setDisabled(!(status == '1'));
    }
  },

  publish: function() {
    var me = this,
      grid = me.getGrid(),
      params = me.getParams();

    if (params.length > 0) {
      Ext.util.ajax({
        url: APP.globalConfig.restpath + '/business/survey/publish',
        method: 'PUT',
        jsonData: params,
        beforerequest: function() {
          grid.setLoading('发布中, 请稍候...');
        },
        callback: function() {
          grid.setLoading(false);
        },
        success: function() {
          me.successHandler();
        }
      });
    }
  },

  setExpired: function() {
    var me = this,
      grid = me.getGrid(),
      params = me.getParams();

    if (params.length > 0) {
      Ext.util.ajax({
        url: APP.globalConfig.restpath + '/business/survey/expired',
        method: 'PUT',
        jsonData: params,
        beforerequest: function() {
          grid.setLoading('发布中, 请稍候...');
        },
        callback: function() {
          grid.setLoading(false);
        },
        success: function() {
          me.successHandler();
        }
      });
    }
  },

  getParams: function() {
    var me = this,
      i = 0,
      codes = [],
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    for (; i < records.length; i++) {
      codes.push(records[i].get('code'));
    }

    return codes;
  },

  successHandler: function() {
    var me = this,
      queryForm = me.getQuery(),
      grid = me.getGrid();

    queryForm.doQuery();
    me.clearGridSelection(grid);
  }
});