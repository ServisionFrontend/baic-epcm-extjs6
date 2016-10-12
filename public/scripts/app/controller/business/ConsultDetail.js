Ext.define('APP.controller.business.ConsultDetail', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.util.common'],
  mixins: {
    viewBase: 'APP.view.common.class.Base'
  },
  init: function() {
    this.callParent(arguments);
  }
});