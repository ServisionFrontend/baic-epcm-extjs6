Ext.define('APP.controller.dictionary.PartType', {
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

    var detailWin = Ext.create('APP.view.dictionary.partType.Sort', {
      controller: me
    });

    detailWin.show();
  }
});