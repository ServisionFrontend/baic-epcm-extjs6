Ext.define('APP.view.part.brand.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.brandgrid',
  store: 'APP.store.part.Brand',
  rownumberer: true,
  allowRowDrag: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:brand:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:brand:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该品牌？',
    hidden: !APP.permissionConfig.hasOperation('epcm:brand:delete')
  }, '-', {
    xtype: 'button',
    text: '调整排序号',
    iconCls: 'icon-sort',
    action: 'sort',
    hidden: !APP.permissionConfig.hasOperation('epcm:brand:sort')
  }],
  columns: [{
    text: '品牌编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '品牌名称',
    dataIndex: 'name',
    flex: 1
  }, {
    text: 'logo图',
    dataIndex: 'originLogoFilename',
    width: 160
  }, {
    xtype: 'actioncolumn',
    width: 35,
    items: [{
      tooltip: '查看logo图',
      icon: 'styles/images/picture-view.png',
      handler: function(grid, rowIdx, colIdx, that, e, rec) {
        var me = this,
          config = {
            url: rec.get('logoFileUrl'),
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
    flex: 1
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    flex: 1
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    flex: 1
  }]
});