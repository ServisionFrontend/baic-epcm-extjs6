Ext.define('APP.controller.part.Usage', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function () {
    var me = this;

    this.callParent(arguments);
  },

  exportRecord: function (that) {
    var me = this,
      grid = me.getGrid(),
      url = that.exportUrl,
      exportNeedField = that.exportNeedField,
      exportParams = me.getExportParams();

    if (exportParams.filters[exportNeedField]) {
      me.exportForm.submit({
        url: url,
        method: 'GET',
        params: {
          "args": Ext.encode(exportParams)
        },
        standardSubmit: true
      });
    } else {
      Ext.Msg.alert('提示', "整车编码不能为空，请至查询区域，填写需要导出条目的整车编码！");
    }
  }
});