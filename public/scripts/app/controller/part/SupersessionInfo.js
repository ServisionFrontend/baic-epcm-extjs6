Ext.define('APP.controller.part.SupersessionInfo', {
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
        case 'detail':
          me.showDetail();
          break;
        default:
          break;
      }
    });

    grid.on('rowselection', function(that, records) {
      if (records.length > 0){
        me.controlButtonStatus(records);
      }
    });
  },

  controlButtonStatus: function(records) {
    var me = this,
      grid = me.getGrid(),
      statusCode = records[0].get('isGroup'),
      btnDetail = grid.down('[action=detail]');

      if (records.length > 1) {
        btnDetail.setDisabled(true);
      } else {
        btnDetail.setDisabled(!(statusCode == '1'));
      }
  },

  showDetail: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    var detailWin = Ext.create('APP.view.part.supersessionInfo.Detail', {
      params: records[0].get('code')
    });

    detailWin.show();

  }

});