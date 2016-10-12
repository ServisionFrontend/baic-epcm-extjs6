Ext.define('APP.view.part.repair.Detail', {
  extend: 'Ext.ux.component.edit.Base',
  requires: ['Ext.ux.component.button.LinkButton'],
  title: '维修包详情',
  width:760,
  height: 320,
  bodyPadding: '10',
  initEvents: function () {
    var me = this;

    this.callParent(arguments);
  },

  listeners: {
    afterrender: function () {
      var me = this;
      me.load();
    }
  },

  load: function () {
    var me = this;
    var params = me.params;

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/part/repair/detail/' + params,
      method: 'GET',
      beforerequest: function () {
        me.setLoading('加载中,请稍候...');
      },
      callback: function () {
        me.setLoading(false);
      },
      success: function (root) {
        me.setFormValues(root);
      }
    });
  },

  setFormValues: function (result) {
    var me = this,
      grid = me.down('[itemId=grid]');

    me.bindGridData(grid, result);
  },

  bindGridData: function (grid, result) {
    var me = this,
      store = grid.getStore();

    store.loadData(result);
  },

  items: [{
    xtype: 'form',
    layout: {
      type: 'vbox'
    },
    border: false,
    defaults: {
      width: '100%',
      layout: {
        type: 'hbox'
      },
      border: false,
      defaults: {
        xtype: "displayfield",
        labelWidth: 70,
        labelPad: 10,
        flex: 1,
        allowBlank: true,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        xtype: 'panel',
        width: '100%',
        border: false,
        layout: {
          type: 'form'
        },
        items: [{
          xtype: 'grid',
          itemId: 'grid',
          height: 260,
          layout: 'fit',
          store: Ext.create('Ext.data.Store', {
            fields: ['partCode', 'partName', 'qty', 'supplierCode', 'supplierName', 'note'],
            proxy: {
              type: 'memory',
              reader: {
                type: 'json',
                root: 'result'
              }
            }
          }),
          columns: [{
            text: "序号",
            xtype: 'rownumberer',
            width: 35
          }, {
            text: '配件编码',
            dataIndex: 'partCode',
            flex: 1
          }, {
            text: '配件名称',
            dataIndex: 'partName',
            flex: 1
          }, {
            text: '用量',
            dataIndex: 'qty',
            flex: 1
          }, {
            text: '供应商编码',
            dataIndex: 'supplierCode',
            flex: 1
          }, {
            text: '供应商名称',
            dataIndex: 'supplierName',
            flex: 1
          }, {
            text: '备注',
            dataIndex: 'note',
            flex: 1
          }]
        }]
      }]
    }]
  }],

  dockedItems: []
});