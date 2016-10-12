Ext.define('APP.view.part.model.Sort', {
  extend: 'Ext.ux.component.edit.Base',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '调整车型组排序号',
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

    selector.on('change', function (that) {
      var code = that.getValue();

      me.getGridData(code);
    });

    this.callParent(arguments);
  },

  listeners: {
    afterrender: function () {
      var me = this;
      //me.load();
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
      url: APP.globalConfig.restpath + '/selector/list/model-group?seriesCode=' + code + '&_dc=' + Math.random(),
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
        url: APP.globalConfig.restpath + '/sort/index/model-group',
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
      xtype: 'form',
      margin: '0 0 10 0',
      layout: {
        type: 'hbox'
      },
      border: false,
      defaults: {
        margin: '0 15 0 5',
        labelWidth: 40
      },
      items: [{
        xtype: 'basecombo',
        fieldLabel: '品牌',
        name: 'brandCode',
        storeAutoLoad: true,
        withAll: false,
        url: APP.globalConfig.restpath + '/selector/list/brand',
        value: '',
        clearFields: ['seriesCode'],
        allowBlank: false
      }, {
        xtype: 'basecombo',
        fieldLabel: '车系',
        name: 'seriesCode',
        itemId: 'selector',
        storeAutoLoad: true,
        withAll: false,
        dependField: 'brandCode',
        url: APP.globalConfig.restpath + '/selector/list/series?brandCode={id}&sort=name',
        value: '',
        allowBlank: false
      }]
    }, {
      height: 305,
      border: false,
      items: [{
        xtype: 'grid',
        itemId: 'grid',
        height: 285,
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
          text: '车型组编码',
          dataIndex: 'code',
          flex: 1
        }, {
          text: '车型组名称',
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