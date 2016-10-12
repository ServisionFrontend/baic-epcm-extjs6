Ext.define('APP.controller.part.Repair', {
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
  },

  showDetail: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    var detailWin = Ext.create('APP.view.part.repair.Detail', {
      params: records[0].get('code')
    });

    detailWin.show();

  }
});