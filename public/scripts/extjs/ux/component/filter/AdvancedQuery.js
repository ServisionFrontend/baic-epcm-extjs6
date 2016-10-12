Ext.define('Ext.ux.component.filter.AdvancedQuery', {
    extend: 'Ext.window.Window',
    requires: ["Ext.ux.component.combo.BaseCombo"],
    width: 540,
    height: 450,
    modal: true,
    resizable: false,

    constrain: true,

    finishRender: function () {
        this.callParent(arguments);

        var me = this,
            filterRows = me.getContainerItems("[action=row]") || [];

        if (me.advancedQueryParams.length > 0) {
            me.bindRow(me.advancedQueryParams);
        }
        else if (filterRows.length == 0) {
            me.addRow();
        }
        me.setHeaderText();
    },

    initEvents: function () {
        this.callParent(arguments);

        var me = this;

        me.down("[itemId=do-query]").on("click", function () {
            me.doQuery();
        });

        me.down("[itemId=cancel-query]").on("click", function () {
            me.close();
        });

        me.down("[itemId=add-row]").on("click", function () {
            me.addRow();
        });
    },

    bindRow:function(params){
        var me = this;

        Ext.each(params, function (item) {
            me.addRow(item);
        });
    },

    setHeaderText: function () {
        var me = this,
            header = me.getHeader();

        header.down("[name=property]").setText(me.propertyText);
        header.down("[name=operator]").setText(me.operatorText);
        header.down("[name=value]").setText(me.valueText);
        header.down("[name=action]").setText(me.actionText);
    },

    addRow: function (params) {
        var me = this,
            container = me.getContainer(),
            index = container.items.length - 1,
            row = me.createRow(params);

        container.insert(index, row);
        container.doLayout();
        container.body.scrollTo('top', 12000);
    },

    createRow: function (params) {
        var me = this,
            rowConfig = me.getRowConfig(params);

        return Ext.create("Ext.panel.Panel", rowConfig);
    },

    getRowConfig: function (params) {
        var me = this,
            config = {
                action: "row",
                xtype: "panel",
                layout: {
                    type: "hbox",
                    pack: "center",
                    align: "middle"
                },
                defaults: {
                    margin: "0 2 0 2"
                },
                items: [
                    me.buildProperty(params),
                    me.buildOperator(params),
                    me.buildInputEl(params),
                    me.buildRemoveButton()
                ]
            };

        return config;
    },

    buildProperty: function (params) {
        var me = this,
            params = params || {},
            combobox = Ext.create("Ext.ux.component.combo.BaseCombo", {
                name: "property",
                width: 130,
                url: me.propertyUrl,
                value : params.property || "",
                listeners: {
                    change: function (that) {
                        me.changeInputEl(that);
                    }
                }
            });

        return combobox;
    },

    buildOperator: function (params) {
        var me = this,
            params = params || {},
            combobox = Ext.create("Ext.ux.component.combo.BaseCombo", {
                name: "operator",
                width: 130,
                url: me.operatorUrl,
                value: params.operator
            });

        return combobox;
    },

    buildInputEl: function (params, type) {
        var me = this,
            params = params || {},
            classNames = {
                "D": "Ext.form.field.Date"
            },
            className = classNames[type] || "Ext.form.field.Text",
            inputEl = Ext.create(className, {
                name: "value",
                width: 200,
                format: 'Y-m-d',
                value: params.value
            });

        return inputEl;
    },

    buildRemoveButton: function () {
        var me = this;

        return {
            xtype: "button",
            iconCls: "icon-delete",
            listeners: {
                click: function () {
                    me.deleteSingleRow(this);
                }
            }
        };
    },

    changeInputEl: function (that) {
        var me = this,
            row = me.getRow(that),
            valueModel = that.valueModels[0],
            type = valueModel.get("type"),
            oldInputEl = row.down("[name=value]"),
            newInputEl = me.buildInputEl("", type);

        row.remove(oldInputEl);
        row.insert(2, newInputEl);
        row.doLayout();
    },

    deleteSingleRow: function (that) {
        var me = this,
            row = me.getRow(that),
            container = me.getContainer();

        container.remove(row);
        container.doLayout();
    },

    doQuery: function () {
        var me = this,
            filterParams = me.getFilterParams();

        me.fireEvent("doQuery", filterParams);
        me.close();
    },

    getFilterParams: function () {
        var me = this,
            filterParams = [],
            items = me.getContainerItems("[action=row]");

        Ext.each(items, function (item) {
            var property = item.down("[name=property]").getValue() || "",
                operator = item.down("[name=operator]").getValue() || "",
                value = item.down("[name=value]").getValue();

            if (property.length > 0 && operator.length > 0 && value) {
                filterParams.push({
                    property: property,
                    operator: operator,
                    value:  Ext.isDate(value) ? Ext.Date.format(value, "Y-m-d H:i:sO") : value
                });
            }
        });

        return filterParams;
    },

    getHeader: function () {
        var me = this,
            header = me.down("[itemId=header]");

        return header;
    },

    getContainer: function () {
        var me = this,
            container = me.down("[itemId=container]");

        return container;
    },

    getContainerItems: function (selector) {
        var me = this,
            container = me.getContainer();

        return selector ? container.query(selector) : container.items.items;
    },

    getRow: function (that) {
        var me = this;

        return that.up("[action=row]");
    },

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    items: [{
        xtype: "panel",
        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        },
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: "footer",
            layout: {
                align: 'middle',
                pack: 'center',
                type: 'hbox'
            },
            items: [{
                itemId: "do-query",
                iconCls: 'icon-find',
                text: "查询"
            }, {
                itemId: "cancel-query",
                iconCls: 'icon-cancel',
                text: "取消"
            }]
        }],
        items: [{
            itemId: "header",
            xtype: "panel",
            bodyStyle: "background-color: #E0E0E0; text-align:center;",
            defaults: {
                xtype: "label",
                margin: "0 2 0 2"
            },
            height: 28,
            border: true,
            layout: {
                type: "hbox",
                pack: "center",
                align: "middle"
            },
            items: [{
                name: "property",
                width: 130
            }, {
                name: "operator",
                width: 130
            }, {
                name: "value",
                width: 200
            }, {
                name: "action",
                flex: 1
            }]
        }, {
            itemId: "container",
            xtype: "panel",
            bodyStyle: "background-color: #fff; text-align:center;",
            border: false,
            flex: 1,
            height: 358,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            autoScroll: true,
            defaults: {
                height: 38
            },
            items: [{
                itemId: "add-row-panel",
                layout: {
                    type: "hbox",
                    pack: "end",
                    align: "middle"
                },
                height: 27,
                defaults: {
                    margin: "0 15 0 0"
                },
                items: [
                    {
                        itemId: "add-row",
                        xtype: "button",
                        iconCls: "icon-add"
                    }
                ]
            }]
        }]
    }]
});