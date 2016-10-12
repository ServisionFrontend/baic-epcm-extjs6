Ext.define('APP.controller.business.Consult', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function () {
    var me = this;

    me.initSubEvents();
    me.callParent(arguments);
  },

  initSubEvents: function () {
    var me = this,
      grid = me.getGrid();

    grid.on('toolbarclick', function (that) {
      switch (that.action) {
        case 'block':
          Ext.Msg.confirm("提示", "确认选中的记录设为屏蔽?", function (btn) {
            if (btn === "yes") {
              me.setBlock();
            }
          });
          break;
        default:
          break;
      }
    });
  },

  exportRecord: function (that) {
    var me = this,
      grid = me.getGrid(),
      url = that.exportUrl,
      path = that.exportPath,
      exportParams = me.getExportParams();

    me.exportForm.submit({
      url: url,
      method: 'GET',
      params: {
        "args": Ext.encode(exportParams),
        "path": path
      },
      standardSubmit: true
    });
  },

  setBlock: function () {
    var me = this,
      grid = me.getGrid(),
      params = me.getParams();

    if (params.length > 0) {
      Ext.util.ajax({
        url: APP.globalConfig.restpath + '/business/consult/setBlock',
        method: 'POST',
        jsonData: params,
        beforerequest: function () {
          grid.setLoading('设为屏幕, 请稍候...');
        },
        callback: function () {
          grid.setLoading(false);
        },
        success: function () {
          me.successHandler();
        }
      });
    }
  },

  successHandler: function () {
    var me = this,
      queryForm = me.getQuery(),
      grid = me.getGrid();

    queryForm.doQuery();
    me.clearGridSelection(grid);
  },

  getParams: function () {
    var me = this,
      i = 0,
      codes = [],
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    for (; i < records.length; i++) {
      codes.push(records[i].get('code'));
    }

    return codes;
  }
});