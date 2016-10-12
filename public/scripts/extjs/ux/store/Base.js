Ext.define('Ext.ux.store.Base', {
  extend: 'Ext.data.Store',
  autoLoad: false,
  autoSync: true,
  autoDestroy: true,
  remoteSort: true,
  pageSize: 20,
  requires: ['Ext.ux.proxy.Ajax'],
  constructor: function(config) {
    var me = this,
      config = config || me;

    me.buildProxy(config);
    me.callParent(arguments);
  },

  buildProxy: function(config) {
    var me = this;

    me.proxy = Ext.create("Ext.ux.proxy.Ajax", {
      reader: {
        method: 'get',
        type: 'json',
        root: 'list',
        totalProperty: "total"
      },
      writer: {
        type: 'json',
        writeAllFields: false
      },
      api: config.proxyAPI,
      noCache: true,
      listeners: {
        exception: function(that, response, operation, eOpts) {
          Ext.util.errorHandler(response, function() {
            me.fireEvent("aftererror", operation, response);
          });
        }
      }
    });
  },

  listeners: {
    write: function(store, operation) {
      var me = this;

      me.fireEvent("aftersuccess", operation);
    }
  }
});