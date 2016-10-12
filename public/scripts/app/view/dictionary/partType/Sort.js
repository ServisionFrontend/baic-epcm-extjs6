Ext.define('APP.view.dictionary.partType.Sort', {
  extend: 'Ext.ux.component.edit.Base',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '调整配件类型排序号',
  width: 500,
  height: 420,
  bodyPadding: '10 10 30 10',
  initEvents: function () {
    var me = this,
      btnSave = me.down('[itemId=save]'),
      btnCancel = me.down('[itemId=cancel]'),
      selector = me.down('[itemId=selector]');

    btnSave.on('click', function () {
      me.saveSort();
    });

    this.callParent(arguments);
  },

  listeners: {
    afterrender: function () {
      var me = this;

      setTimeout(function () {
        me.load();
      }, 0);
    },
    close:function(){
      var me = this,
        grid = me.down('[itemId=grid]'),
        store = grid.getStore();

      store.removeAll();
    }
  },

  load: function () {
    var me = this;

    me.getGridData();
  },

  getGridData: function (code) {
    var me = this;

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/selector/list/part-type' + '?_dc=' + Math.random(),
      method: 'GET',
      beforerequest: function () {
        me.setLoading('加载中,请稍候...');
      },
      callback: function () {
        me.setLoading(false);
      },
      success: function (root) {

        var n = 1;
        for (var i = 0; i < root.length; i++) {
          root[i].sort = n++;
        }

        me.bindGridData(root);
      }
    });
  },

  bindGridData: function (result) {
    var me = this,
      grid = me.down('[itemId=grid]'),
      store = grid.getStore();

    store.loadData(result);
  },

  getSortCode: function () {
    var me = this,
      grid = me.down('[itemId=grid]'),
      store = grid.getStore(),
      items = store.data.items,
      result = [];

    for (var i = 0; i < items.length; i++) {
      var temp = {};

      temp.code = items[i].data.code;
      temp.sort = i + 1;

      result.push(temp);
    }

    return result;
  },

  saveSort: function () {
    var me = this,
      data = me.getSortCode();

    if (data) {
      Ext.util.ajax({
        url: APP.globalConfig.restpath + '/sort/index/part-type',
        method: 'PUT',
        jsonData: data,
        beforerequest: function () {
          me.setLoading('加载中,请稍候...');
        },
        callback: function () {
          me.setLoading(false);
        },
        success: function (root) {
          me.close();
          me.statusUpdateFinish();
        }
      });
    }
  },

  statusUpdateFinish: function () {
    var me = this,
      controller = me.controller,
      grid = controller.getGrid(),
      store = grid.getStore();

    store.loadPage(1);
    grid.controlToolbarStatus(grid, []);
    grid.getSelectionModel().clearSelections();
  },

  items: [{
    border: false,
    items: [{
      height: 345,
      border: false,
      items: [{
        xtype: 'grid',
        itemId: 'grid',
        height: 315,
        layout: 'fit',
        viewConfig:{
          plugins: {
            ptype: 'gridviewdragdrop',
            dragText: '拖动对本条数据进行排序'
          },
          listeners: {
            drop: function() {
              //this.getSelectionModel().deselectAll();
            }
          }
        },
        store: Ext.create('Ext.data.Store', {
          fields: ['code', 'name', 'sort'],
          proxy: {
            type: 'memory'
          }
        }),
        columns: [{
          text: "序号",
          xtype: 'rownumberer',
          width: 35
        }, {
          text: '配件类型编码',
          dataIndex: 'code',
          flex: 1
        }, {
          text: '配件类型名称',
          dataIndex: 'name',
          flex: 1
        }, {
          text: '排序号',
          dataIndex: 'sort',
          flex: 1
        }]
      }]
    }]
  }, {
    border: false,
    items: {
      border: false,
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '提示：请鼠标左键选中后拖动调整排序'
    }
  }],
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    ui: 'footer',
    defaults: {
      margins: "0 10 0 10"
    },
    layout: {
      align: 'middle',
      pack: 'center',
      type: 'hbox'
    },
    items: [{
      xtype: 'button',
      action: "save",
      itemId: 'save',
      text: "保存",
      iconCls: 'icon-save'
    }, {
      xtype: 'button',
      action: "cancel",
      itemId: 'cancel',
      text: "取消",
      iconCls: 'icon-cancel'
    }]
  }]
});