Ext.define('Ext.ux.component.grid.Grid', {
  extend: 'Ext.grid.Panel',
  requires: ['Ext.ux.component.paging.Paging'],
  itemId: "grid-list",
  multiSelectCheckbox: true,
  autoDestroy: true,
  isLoaded: false,
  rownumberer: false,
  isRowMove: false,
  flex: 1,
  width: "100%",
  controlButtons: ["update", "destroy"],
  destroyKeys: ['code'],
  tbar: [{
    xtype: 'button',
    text: '添加',
    action: 'create',
    iconCls: 'icon-min-add'
  }, '-', {
    xtype: 'button',
    text: '修改',
    action: 'update',
    disabled: true,
    singleSelectEnable: true,
    iconCls: 'icon-min-edit'
  }, '-', {
    xtype: 'button',
    text: '删除',
    disabled: true,
    action: 'destroy',
    iconCls: 'icon-min-delete'
  }, '-', {
    xtype: 'button',
    text: '导入',
    action: 'import',
    iconCls: 'icon-import-excel'
  }, '-', {
    xtype: 'button',
    text: '导出',
    action: 'export',
    iconCls: 'icon-export-excel'
  }],

  bbar: {
    xtype: 'paging',
    dock: 'bottom',
    displayInfo: true
  },

  viewConfig: {
    enableTextSelection: true
  },

  listeners: {
    selectionchange: function (that, selected, eOpts) {
      this.controlToolbarStatus(that, selected, eOpts);
    }
  },

  initEvents: function () {
    var me = this,
      buttons = me.query('button[action]');

    Ext.each(buttons, function (item) {
      item.on('click', function (that) {
        me.toolbarButtonsClick(that);
      });
    });

    this.callParent(arguments);
  },

  constructor: function (config) {
    var me = this,
      store = me.store;

    me.createStore();
    me.addRowNumberer();
    me.superclass.isLoaded = true;
    me.callParent(arguments);
  },

  createStore: function () {
    var me = this,
      store = me.store;

    if (Ext.isString(store)) {
      me.store = Ext.create(store);
    }
  },

  addRowNumberer: function () {
    var me = this,
      xtype = me.xtype,
      isLoaded = me.superclass[xtype] ? me.superclass[xtype].isLoaded : false;

    if (!isLoaded && me.rownumberer) {
      this.columns.splice(0, 0, {
        text: "序号",
        xtype: 'rownumberer',
        width: 35
      });
      me.superclass[xtype] = {isLoaded: true};
    }
  },

  initComponent: function () {
    var me = this;

    me.bbar.store = me.getStore();
    me.setSelectionCheckbox();
    me.callParent(arguments);
  },

  toolbarButtonsClick: function (that) {
    var me = this,
      action = that.action;

    switch (that.action) {
      case "create":
        me.createRecord();
        break;
      case "update":
        me.updateRecord();
        break;
      case "destroy":
        me.destroyRecord(that);
        break;
      case "export":
        me.exportRecored(that);
        break;
      case "batch":
        me.multiSelect = true;
        me.batchOperation();
        break;
      default:
        me.fireEvent("toolbarclick", that);
        break;
    }
  },

  createRecord: function () {
    this.fireEvent("createRecord");
  },

  updateRecord: function () {
    this.fireEvent("updateRecord");
  },

  destroyRecord: function (that) {
    var me = this;

    Ext.Msg.confirm("提示", that.deleteText ? that.deleteText : "确认删除被选中记录?", function (btn) {

      if (btn === "yes") {
        var params = me.getDestroyParams();
        me.fireEvent("destroyRecord", params);
      }
    });
  },

  exportRecored: function (that) {
    this.fireEvent("exportRecord", that);
  },

  getDestroyParams: function () {
    var me = this, params = [],
      selection = me.getGridSelection();

    Ext.each(selection, function (record) {
      var item = {};

      Ext.each(me.destroyKeys, function (key) {
        var val = record.get(key);
        item[key] = typeof val == 'undefined' ? "" : val;
      });
      params.push(item);
    });

    return params;
  },

  setSelectionCheckbox: function () {
    if (this.multiSelectCheckbox) {
      Ext.apply(this, {
        selType: 'checkboxmodel'
      });
    }
  },


  controlToolbarStatus: function (that, selected, eOpts) {
    var me = this,
      buttons = me.controlButtons || [];

    if (selected.length > 0) {
      Ext.each(buttons, function (action) {
        var button = me.down("toolbar > button[action=" + action + "]");
        if (button) {
          if (button.singleSelectEnable) {
            if (selected.length === 1) {
              button.setDisabled(false);
            }
            else {
              button.setDisabled(true);
            }
          } else {
            button.setDisabled(false);
          }
        }
      });
    } else {
      Ext.each(buttons, function (action) {
        var button = me.down("toolbar > button[action=" + action + "]");

        if (button) {
          button.setDisabled(true);
        }
      });
    }

    me.fireEvent("rowselection", that, selected);
  },

  getGridSelection: function () {

    return this.getSelectionModel().getSelection();
  },

  getQuery: function () {
    var tabs = this.up("tabpanel");
    var activeTab = tabs.getActiveTab();

    return activeTab.down("[itemId=query-form]");
  }
});