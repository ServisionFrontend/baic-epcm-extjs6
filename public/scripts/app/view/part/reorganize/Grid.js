Ext.define('APP.view.part.reorganize.Grid', {
  extend: 'APP.view.common.grid.Grid',
  alias: 'widget.reorganizegrid',
  store: 'APP.store.part.Reorganize',
  rownumberer: true,
  controlButtons: ['destroy', 'publish', 'unpublish'],
  tbar: [{
    xtype: 'button',
    text: '删除整编级用法',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    deleteText: '请确认删除该整车编码？',
    hidden: !APP.permissionConfig.hasOperation('epcm:vehicle-release:delete')
  }, '-', {
    xtype: 'button',
    text: '设置可发布',
    iconCls: 'icon-upload',
    action: 'publish',
    disabled: true,
    hidden: !APP.permissionConfig.hasOperation('epcm:vehicle-release:add-release')
  }, '-', {
    xtype: 'button',
    text: '设置不可发布',
    iconCls: 'icon-cancel',
    action: 'unpublish',
    disabled: true,
    hidden: !APP.permissionConfig.hasOperation('epcm:vehicle-release:del-release')
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/data/import/vehicle-release',
    tplUrl: '/template/download/vehicle-release',
    pageName: '整编管理',
    introText: '说明：\n\n' +
    '更新导入按照整车编码为唯一标识，导入的数据必须在数据表中存在，否则导入失败；\n\n',
    hidden: !APP.permissionConfig.hasOperation('epcm:vehicle-release:import')
  }],
  columns: [{
    text: '整车编码',
    dataIndex: 'vehicleCode',
    width: 180
  }, {
    text: '品牌名称',
    dataIndex: 'brandName',
    flex: 1
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    flex: 1
  }, {
    text: '车型组',
    dataIndex: 'modelGroupName',
    flex: 1
  }, {
    text: '发布标识',
    dataIndex: 'isRelease',
    flex: 1,
    renderer: function (val) {
      if (val == '1') {
        return '可发布';
      } else if (val == '2') {
        return '已归档';
      } else if (val == '0') {
        return '不可发布';
      }
      return '';
    }
  }, {
    text: '校验状态',
    dataIndex: 'isVerify',
    flex: 1,
    renderer: function (val) {
      return val == '1' ? '已通过' : '未通过'
    }
  }, {
    text: '校验人',
    dataIndex: 'verifyBy',
    flex: 1
  }, {
    text: '校验日期',
    dataIndex: 'verifyOn',
    flex: 1
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