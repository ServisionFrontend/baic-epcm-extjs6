Ext.define('APP.view.part.legend.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.legendgrid',
  store: 'APP.store.part.Legend',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    hidden: !APP.permissionConfig.hasOperation('epcm:image:add')
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    hidden: !APP.permissionConfig.hasOperation('epcm:image:update')
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该图例？',
    hidden: !APP.permissionConfig.hasOperation('epcm:image:delete')
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/data/import/image',
    tplUrl: '/template/download/image',
    pageName: '图例',
    introText: '说明：\n\n' +
      '新增导入按照车系编码和整车车型编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
      '更新导入按照车系编码和整车车型编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:image:import')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/image',
    tplUrl: '/template/download/image',
    pageName: '图例',
    introText: '说明：\n\n' +
      '新增导入按照车系编码和整车车型编码为唯一标识，导入的数据不可在数据表中存在，否则导入失败；\n\n' +
      '更新导入按照车系编码和整车车型编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:image:import')
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl: '/data/export/image',
    hidden: !APP.permissionConfig.hasOperation('epcm:image:export')
  }],
  columns: [{
    text: '品牌名称',
    dataIndex: 'brandName',
    width: 140
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    width: 140
  }, {
    text: '主组编码',
    dataIndex: 'groupCode',
    width: 100
  }, {
    text: '主组名称',
    dataIndex: 'groupName',
    width: 140
  }, {
    text: '分组编码',
    dataIndex: 'subGroupCode',
    width: 120
  }, {
    text: '分组名称',
    dataIndex: 'subGroupName',
    width: 220
  }, {
    text: '图例编码',
    dataIndex: 'code',
    width: 120
  }, {
    text: '图例名称',
    dataIndex: 'name',
    width: 220
  }, {
    text: '图例备注',
    dataIndex: 'note',
    width: 180
  }, {
    text: 'SVG文件名',
    dataIndex: 'originSvgFilename',
    width: 160
  }, {
    xtype: 'actioncolumn',
    width: 35,
    items: [{
      tooltip: '查看SVG格式图例',
      icon: 'styles/images/picture-view.png',
      handler: function(grid, rowIdx, colIdx, me, e, rec) {
        var me = this,
          svgFileUrl = rec.get('svgFileUrl');

        if (!svgFileUrl) {
          return;
        }

        Ext.create('Ext.ux.component.window.SvgViewer', {
          title: 'SVG图 : ' + rec.get('originSvgFilename'),
          url: 'part/legend/loadSvg?path=' + svgFileUrl + '&_=' + (new Date()).getTime()
        }).show();
      }
    }],
    renderer: function (val, obj) {

      if (!obj.record.data.svgFileUrl) {
        this.items[0].tooltip = '';
        this.items[0].icon = '';
      } else {
        this.items[0].tooltip = '查看SVG格式图例';
        this.items[0].icon = 'styles/images/picture-view.png';
      }
    }
  }, {
    text: 'JPG文件名',
    dataIndex: 'originGifFilename',
    width: 160
  }, {
    xtype: 'actioncolumn',
    width: 35,
    items: [{
      tooltip: '查看JPG格式图例',
      icon: 'styles/images/picture-view.png',
      handler: function(grid, rowIdx, colIdx, me, e, rec) {
        var gifFileUrl = rec.get('gifFileUrl');

        if (!gifFileUrl) {
          return;
        }

        var me = this,
          config = {
            title: 'JPG图 : ' + rec.get('originGifFilename'),
            url: gifFileUrl,
            nopicPath: 'styles/images',
            noImgFile: 'no-img.png'
          };

        Ext.create('Ext.ux.component.window.ImageViewer', config).show();
      }
    }],
    renderer: function (val, obj) {

      if (!obj.record.data.gifFileUrl) {
        this.items[0].tooltip = '';
        this.items[0].icon = '';
      } else {
        this.items[0].tooltip = '查看JPG格式图例';
        this.items[0].icon = 'styles/images/picture-view.png';
      }
    }
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 120
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 160
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 120
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 160
  }]
});