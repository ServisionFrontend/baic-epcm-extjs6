Ext.define('APP.view.business.survey.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.surveygrid',
  store: 'APP.store.business.Survey',
  rownumberer: true,
  controlButtons: ['update', 'destroy', 'publish', 'unpublish'],
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
    disabled: true,
    deleteText: '请确认删除该问卷？'
  }, '-', {
    xtype: 'button',
    text: '发布',
    iconCls: 'icon-upload',
    singleSelectEnable: true,
    action: 'publish',
    postUrl: '/data/import/model',
    tplUrl: '/template/download/model',
    disabled: true
  }, {
    xtype: 'button',
    text: '作废',
    iconCls: 'icon-cancel',
    action: 'unpublish',
    disabled: true
  }],
  columns: [{
    text: '问卷编号',
    dataIndex: 'numbering',
    width: 140
  }, {
    xtype: 'actioncolumn',
    width: 35,
    items: [{
      tooltip: '查看问卷详细',
      icon: 'styles/images/view-detail.png',
      handler: function(grid, rowIdx, colIdx, that, e, rec) {
        var me = this,
          code = rec.get('code');

        var detailWindow = Ext.create('APP.view.business.survey.Detail', {
          params: {
            code: code
          }
        });

        detailWindow.show();
      }
    }]
  }, {
    text: '问卷主题',
    dataIndex: 'subject',
    width: 220
  }, {
    text: '状态',
    dataIndex: 'statusName',
    width: 100
  }, {
    text: '适用品牌',
    dataIndex: 'brandNames',
    width: 200,
    renderer: function (val) {
      return val && val.join(',');
    }
  }, {
    text: '参与DMS用户数',
    dataIndex: 'participateUsers',
    width: 120
  }, {
    text: 'DMS用户参与比例',
    dataIndex: 'participateRatio',
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