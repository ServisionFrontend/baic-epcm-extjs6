Ext.define('APP.controller.statistics.ModelPart', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function () {
    var me = this;

    this.callParent(arguments);
  },

  exportRecord: function(that) {
    var me = this,
      queryForm = me.getQuery(),
      url = that.exportUrl,
      path = that.exportPath,
      exportParams = me.getExportParams();

    if (!queryForm.isValid()) {
      Ext.Msg.alert('提示', '查询区域，有必填字段尚未填写！');
      return;
    }

    me.exportForm.submit({
      url: url,
      method: 'GET',
      params: {
        "args": Ext.encode(exportParams),
        "path": path
      },
      standardSubmit: true
    });
  }
});