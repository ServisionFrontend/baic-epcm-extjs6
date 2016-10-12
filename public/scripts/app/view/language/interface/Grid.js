Ext.define('APP.view.language.interface.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.interfacegrid',
  store: 'APP.store.language.Interface',
  rownumberer: true,
  controlButtons: [],
  tbar: [{
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/data/export/model-group',
    hidden: !APP.permissionConfig.hasOperation('epcm:language:ui:export')
  }, '-', {
    xtype: 'button',
    text: '导入翻译',
    iconCls: 'icon-import-excel',
    action: 'import-language',
    postUrl: '/data/import/model-group',
    introText: '说明：\n\n' +
    '每次导入只能导入一种语言；\n\n' +
    '为了避免导入错误，请先把需要翻译的内容导出，在此导出文件上直接翻译再导入！\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:language:ui:import')
  }],
  columns: [{
    text: '文字编号',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '中文名称',
    dataIndex: 'name',
    flex: 1
  }, {
    text: '外文翻译',
    dataIndex: 'sort',
    flex: 1
  }]
});