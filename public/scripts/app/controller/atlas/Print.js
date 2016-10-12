Ext.define('APP.controller.atlas.Print', {
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
            me.download();
          break;
        default:
          break;
      }
    });
  },

  download: function () {
    var me = this,
      grid = me.getGrid(),
      data = me.getExportParams(),
      isDoNext = true;

    me.progressBar = Ext.create('Ext.ProgressBar', {
      width: 300,
      text: '图册生成中...',
      value: 0,
      autoShow: false,
      animate: true
    });

    me.progressBarWin = new Ext.Window({
      title: '下载图册',
      modal: true,
      width: 300,
      closeable: false,
      items: me.progressBar
    });

    me.progressBarWin.on('close', function () {
      isDoNext = false;
    });



    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/atlas/print/download',
      method: 'POST',
      jsonData: data,
      beforerequest: function () {
        //grid.setLoading('图册生成中,请稍候...');
      },
      callback: function () {
        grid.setLoading(false);
      },
      success: function (res) {
        var progressId = res.id;

        if (isDoNext && progressId) {
          me.progressBarWin.show();
          pollAjaxRequest(progressId);
        }
      }
    });

    function pollAjaxRequest(progressId) {
      Ext.Ajax.request({
        timeout: 18000000,
        url: APP.globalConfig.restpath + '/atlas/print/progress/' + progressId,
        success: function (res) {

          var result = Ext.decode(res.responseText);
          if (result.success) {

            me.progressBar.updateProgress(result.percent);

            if (result.completed) {
              me.progressBarWin.hide();

              me.downloadFile(result.data || '');
            } else {
              if (isDoNext && progressId) {
                pollAjaxRequest(progressId);
              }
            }

          } else {
            me.progressBarWin.hide();
            Ext.Msg.alert('提示', '生成图册出错！');
          }
        },
        failure: function () {
          me.progressBarWin.hide();
          Ext.Msg.alert('提示', '生成图册出错！');
        }
      });
    }
  },

  downloadFile: function (url) {
    var me = this;

    if (url) {
      window.open(decodeURIComponent(url));
    }
    me.statusUpdateFinish();
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