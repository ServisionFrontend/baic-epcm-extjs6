Ext.define('APP.controller.language.Data', {
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
        case 'import-language':
          me.openImportWindow(that);
          break;
        default:
          break;
      }
    });
  },

  openImportWindow: function(that) {
    var me = this,
      importWindow,
      queryForm = me.getQuery();

    importWindow = Ext.create('APP.view.language.data.Import', {
      title: '导入数据语言',
      mode: 'create',
      queryForm: queryForm,
      postUrl: that.postUrl,
      introText: that.introText
    });

    importWindow.show();
  }
});