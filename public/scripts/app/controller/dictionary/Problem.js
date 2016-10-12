Ext.define('APP.controller.dictionary.Problem', {
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
        case 'sort':
          me.showSort();
          break;
        default:
          break;
      }
    });
  },

  showSort: function () {
    var me = this,
      grid = me.getGrid();

    var detailWin = Ext.create('APP.view.dictionary.problem.Sort', {
      controller: me
    });

    detailWin.show();
  }
});