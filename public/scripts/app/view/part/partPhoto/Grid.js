Ext.define('APP.view.part.partPhoto.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.partphotogrid',
  store: 'APP.store.part.PartPhoto',
  rownumberer: true,
  allowRowDrag: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-photo:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-photo:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该配件照片信息？',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-photo:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/part-photo',
    tplUrl: '/template/download/part-photo',
    pageName: '配件照片',
    introText: '说明：\n\n' +
    '新增导入按照配件编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
    '更新导入按照配件编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-photo:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/export/part-photo',
    hidden: !APP.permissionConfig.hasOperation('epcm:part-photo:export')
  }],
  columns: [{
    text: '配件编码',
    dataIndex: 'partCode',
    width: 140
  }, {
    text: '配件名称',
    dataIndex: 'partName',
    flex: 1
  }, {
    text: '照片名称',
    dataIndex: 'originFilename',
    flex: 1
  }, {
    xtype: 'actioncolumn',
    width: 35,
    items: [{
      tooltip: '查看照片',
      icon: 'styles/images/picture-view.png',
      handler: function(grid, rowIdx, colIdx, me, e, rec) {
        var fileUrl = rec.get('fileUrl');

        if (!fileUrl) {
          return;
        }

        var me = this,
          config = {
            url: fileUrl,
            nopicPath: 'styles/images',
            noImgFile: 'no-img.png'
          };

        Ext.create('Ext.ux.component.window.ImageViewer', config).show();
      }
    }],
    renderer: function (val, obj) {

      if (!obj.record.data.fileUrl) {
        this.items[0].tooltip = '';
        this.items[0].icon = '';
      } else {
        this.items[0].tooltip = '查看照片';
        this.items[0].icon = 'styles/images/picture-view.png';
      }
    }
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