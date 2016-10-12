Ext.define('APP.controller.system.UserInfo', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function() {
    var me = this;

    this.initSubEvents();
    this.callParent(arguments);
  },
  initSubEvents: function() {
    var me = this,
      grid = me.getGrid();

    grid.on('toolbarclick', function(that) {

      switch (that.action) {
        case 'forbid-user':
          Ext.Msg.confirm("提示", "确认停用当前被选中的用户?", function(btn) {
            if (btn === "yes") {
              me.forbidUser();
            }
          });
          break;
        case 'reset-password':
          me.resetPassowrd();
          break;
        default:
          break;
      }
    });
  },

  forbidUser: function() {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    if (records.length > 0) {
      Ext.util.ajax({
        url: APP.globalConfig.restpath + '/system/userInfo/forbid?usr=' + records[0].get('code'),
        method: 'POST',
        jsonData: {},
        beforerequest: function() {
          grid.setLoading('停用用户中, 请稍候...');
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

  resetPassowrd: function() {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection(),
      username = records[0].get('code');

    var resetWin = Ext.create('APP.view.system.userInfo.ResetPwd', {
      username: username,
      controller: me
    });

    resetWin.show();
  },

  getParams: function() {
    var me = this,
      i = 0,
      codes = [],
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    for (; i < records.length; i++) {
      codes.push({
        code: records[i].get('code')
      });
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