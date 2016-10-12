Ext.define('APP.view.system.userInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.system.userInfo.Query',
    'APP.view.system.userInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'userinfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域 <span style="color:red;">（注意：DMS内同步的用户不能新增、修改、停用、重置密码等操作）</span>',
    xtype: 'userinfogrid',
    region: 'center'
  }]
});