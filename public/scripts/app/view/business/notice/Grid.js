Ext.define('APP.view.business.notice.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.noticegrid',
  store: 'APP.store.business.Notice',
  rownumberer: true,
  controlButtons: ['update', 'destroy', 'unpublish', 'publish'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add'
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit'
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true
  }, '-', {
    xtype: 'button',
    text: '发布',
    iconCls: 'icon-upload',
    action: 'publish',
    disabled: true
  }, '-', {
    xtype: 'button',
    text: '作废',
    iconCls: 'icon-cancel',
    action: 'unpublish',
    disabled: true
  }],
  columns: [{
    text: '查阅明细',
    dataIndex: 'filename',
    width: 80,
    renderer: function(data, metadata, record) {
      var code = record.get('code');

      return '<a target="_blank" href="/business/notice/downloadDetail/' + code + '">导出明细</a>';
    }
  }, {
    text: '通知编码',
    dataIndex: 'code',
    width: 140
  }, {
    text: '通知主题',
    dataIndex: 'subject',
    width: 180
  }, {
    text: '通知类型',
    dataIndex: 'typeName',
    width: 120
  }, {
    text: '已查阅用户数',
    dataIndex: 'readedUserAmount',
    width: 160
  }, {
    text: '已查阅企业数',
    dataIndex: 'readedEnterpriseAmount',
    width: 160
  }, {
    text: '应查阅用户数',
    dataIndex: 'userAmount',
    width: 160
  }, {
    text: '应查阅企业数',
    dataIndex: 'enterpriseAmount',
    width: 160
  }, {
    text: '通知状态',
    dataIndex: 'statusName',
    width: 100
  }, {
    text: '适用车系',
    dataIndex: 'applySeriesNames',
    width: 180,
    sortable: false
  }, {
    text: '附件',
    dataIndex: 'filename',
    width: 220,
    renderer: function(data, metadata, record) {
      var url = record.get('filePath');

      return data ? '<a target="_blank" href="' + url + '">'+ data +'</a>' : '';
    }
  }, {
    text: '发布时间',
    dataIndex: 'publishOn',
    width: 160
  }, {
    text: '取消时间',
    dataIndex: 'cancelOn',
    width: 160
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