Ext.define('APP.view.system.enterpriseInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'APP.view.system.enterpriseInfo.Query',
    'APP.view.system.enterpriseInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'enterpriseinfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域<span style="color:red;">（注意：DMS管理企业不能修改和删除，此处新增的企业定义为【EPC内创建企业】以和DMS管理企业进行区别）</span>',
    xtype: 'enterpriseinfogrid',
    region: 'center'
  }]
});