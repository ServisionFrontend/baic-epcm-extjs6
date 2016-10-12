Ext.define('APP.view.part.supersessionInfo.Detail', {
  extend: 'Ext.ux.component.edit.Base',
  requires: ['Ext.ux.component.button.LinkButton'],
  title: '替换组详情',
  width: 960,
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
    var result = {};

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/part/supersessionInfo/detail/' + params,
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
      form = me.down('[itemId=form]').getForm(),
      leftGrid = me.down('[itemId=left-grid]'),
      rightGrid = me.down('[itemId=right-grid]');

    form.setValues(result || {});

    me.bindGridData(leftGrid, result.oldItems || []);
    me.bindGridData(rightGrid, result.newItems || []);
  },

  bindGridData: function (grid, result) {
    var me = this,
      store = grid.getStore();

    store.loadData(result);
  },

  items: [{
    xtype: 'form',
    itemId: 'form',
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
        margin: '0 10 5 0',
        labelWidth: 80,
        labelPad: 10,
        flex: 1,
        allowBlank: true,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        fieldLabel: '旧替换组编码',
        name: 'oldCode'
      }, {
        fieldLabel: '旧替换组描述',
        name: 'oldNote'
      }, {
        fieldLabel: '新替换组编码',
        name: 'newCode'
      }, {
        fieldLabel: '新替换组描述',
        name: 'newNote'
      }]
    }, {
      items: [{
        fieldLabel: '断点时间',
        name: 'replaceTime',
        renderer: function (val) {
          if (val) {
            return Ext.util.Format.localDate(parseInt(val), 'Y-m-d');
          } else {
            return '--';
          }
        }
      }, {
        fieldLabel: '替换类型',
        name: 'typeName'
      }, {
        fieldLabel: '断点信息',
        name: 'breakPointNote'
      }, {
        fieldLabel: '备注',
        name: 'note'
      }]
    }, {
      items: [{
        xtype: 'panel',
        width: '100%',
        border: false,
        layout: {
          type: 'form'
        },
        items: [{
          xtype: 'displayfield',
          value: '--旧组配件信息--',
          width: '100%'
        }, {
          xtype: 'grid',
          itemId: 'left-grid',
          height: 175,
          layout: 'fit',
          store: Ext.create('Ext.data.Store', {
            fields: ['partCode', 'partName', 'note'],
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
            text: '备注',
            dataIndex: 'note',
            flex: 1
          }]
        }]
      }, {
        xtype: 'panel',
        width: '100%',
        border: false,
        layout: {
          type: 'form'
        },
        items: [{
          xtype: 'displayfield',
          value: '--新组配件信息--',
          width: '100%'
        }, {
          xtype: 'grid',
          itemId: 'right-grid',
          height: 175,
          layout: 'fit',
          store: Ext.create('Ext.data.Store', {
            fields: ['partCode', 'partName', 'note'],
            proxy: {
              type: 'memory'
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