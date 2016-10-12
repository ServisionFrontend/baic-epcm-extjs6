Ext.define('APP.view.atlas.epcData.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.epcdatagrid',
  store: 'APP.store.atlas.EpcData',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '创建发布任务',
    action: 'create',
    iconCls: 'icon-min-add'
  }],
  columns: [{
    text: '创建日期',
    dataIndex: 'createdOn',
    flex: 1
  }, {
    text: '发布服务器',
    dataIndex: 'dbName',
    flex: 1
  }, {
    text: '发布状态',
    dataIndex: 'statusText',
    flex: 1
  }, {
    text: '任务名称',
    dataIndex: 'taskName',
    flex: 1
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    flex: 1
  }, {
    text: '详情',
    dataIndex: 'detail',
    sortable: false,
    width: 140,
    renderer: function(data, metadata, record) {
      var url = '/atlas/epcData/export?code=' + record.get('code');

      return '<a href="' + url + '">导出</a>';
    }
  }]
});