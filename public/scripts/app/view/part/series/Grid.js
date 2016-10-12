Ext.define('APP.view.part.series.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.seriesgrid',
  store: 'APP.store.part.Series',
  rownumberer: true,
  allowRowDrag: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:series:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:series:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该车系？',
    hidden: !APP.permissionConfig.hasOperation('epcm:series:delete')
  }, '-', {
    xtype: 'button',
    text: '调整排序号',
    iconCls: 'icon-sort',
    action: 'sort',
    hidden: !APP.permissionConfig.hasOperation('epcm:series:sort')
  }],
  columns: [{
    text: '品牌编码',
    dataIndex: 'brandCode',
    width: 100
  }, {
    text: '品牌名称',
    dataIndex: 'brandName',
    flex: 1
  }, {
    text: '车系编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '车系名称',
    dataIndex: 'name',
    flex: 1
  }, {
    text: '车系示意图名称',
    dataIndex: 'originImageFilename',
    width: 160
  }, {
    xtype: 'actioncolumn',
    width: 35,
    items: [{
      tooltip: '查看车系示意图',
      icon: 'styles/images/picture-view.png',
      handler: function(grid, rowIdx, colIdx, that, e, rec) {
        var me = this,
          config = {
            url: rec.get('imageFileUrl'),
            nopicPath: 'styles/images',
            noImgFile: 'no-img.png'
          };
        Ext.create('Ext.ux.component.window.ImageViewer', config).show();
      }
    }]
  }, {
    text: '排序号',
    dataIndex: 'sort',
    width: 120
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    flex: 1
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 140
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    flex: 1
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 140
  }]
});