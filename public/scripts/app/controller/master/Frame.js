Ext.define('APP.controller.master.Frame', {
	extend: 'Ext.app.Controller',
	model: ['master.Menu'],
	stores: [
		'master.CascadingMenu',
		'master.TreeMenu'
	],
	views: [
		'master.Viewport',
		'master.Header',
		'master.CascadingMenu',
		'master.TreeMenu'
	],

	init: function() {
		var me = this;

		me.control({
			"viewport": {
				afterrender: function() {
					me.addTab('home', '首&nbsp;&nbsp;页', false);
				}
			},
			"#header-panel": {
				afterrender: me.headerRender
			},
			"#menu-panel": {
				afterrender: me.activeMenuTab,
				tabchange: me.rememberMenuTab
			},
			"#cascading-menu": {
				render: me.loadCascadingMenu
			},
			"#menu-panel": {
				afterrender: me.activeMenuTab,
				tabchange: me.rememberMenuTab
			},
			"#tree-menu": {
				render: me.loadTreeMenu,
				fastOpen: function(tree, codes) {
					var result = me.getFastRecords(tree, codes);

					if (result.records.length > 0) {
						me.loadMultiplePage(result.records, 0);
					}
					if (result.notExistCodes.length) {
						Ext.Msg.alert('提示', '您选择的菜单编码: ' + result.notExistCodes.join(',') + '未能找到对应的模块!');
					}
				}
			},
			"treepanel[action=main-menu]": {
				itemclick: function(that, record) {
					me.loadPage(record);
				},
				cellkeydown: function(that, td, cellIndex, record, tr, rowIndex, e, eOpts) {
					if (e.getKey() === e.ENTER) {
						me.loadPage(record);
					}
				}
			},
			"#tabs": {
				remove: function(that, tab, eOpts) {
					me.closeTab(tab);
				}
			}
		});

		me.bindShortcutKey();
	},

	bindShortcutKey: function() {
		var me = this;

		new Ext.util.KeyMap({
			target: Ext.getDoc(),
			binding: [{
				key: [65],
				alt: true,
				fn: me.rightSwitchTab
			}, {
				key: [83],
				alt: true,
				fn: me.leftSwitchTab
			}, {
				key: [67],
				alt: true,
				fn: me.leftSwitchTab
			}]
		});
	},

	leftSwitchTab: function() {
		var tabs = Ext.getCmp('tabs');
		var activeTab = tabs.getActiveTab();
		var activeTabIndex = tabs.items.findIndex('id', activeTab.id);

		if (tabs.items.length < 1) return;

		if (activeTabIndex > 0) {
			activeTabIndex--;
		} else {
			activeTabIndex = tabs.items.length - 1;
		}
		tabs.setActiveTab(activeTabIndex);
	},

	rightSwitchTab: function() {
		var tabs = Ext.getCmp('tabs');
		var activeTab = tabs.getActiveTab();
		var activeTabIndex = tabs.items.findIndex('id', activeTab.id);

		if (tabs.items.length < 1) return;

		if (activeTabIndex < tabs.items.length - 1) {
			activeTabIndex++;
		} else {
			activeTabIndex = 0;
		}
		tabs.setActiveTab(activeTabIndex);
	},

	closeAllTab: function() {
		var me = this;
		var tabs = Ext.getCmp('tabs');

		tabs.plugins[0].doClose(false);
	},

	headerRender: function(that) {
		var me = this;

		that.mon(
			that.el, 'click',
			function(event, target) {
				var action = target.getAttribute('data-action');

				switch (action) {
					case 'change-password':
						me.showChangePassword();
						break;
					case 'logout':
						me.logoutSys();
						break;
					case 'epc-index':
						me.toEpcIndex();
						break;
					default:
						break;
				}
			},
			that, {
				delegate: 'a'
			}
		);
	},

	rememberMenuTab: function(tabPanel, newCard, oldCard, eOpts) {

		Ext.util.Cookies.set('tab', newCard.name);
	},

	activeMenuTab: function(tabPanel) {
		var tab = Ext.util.Cookies.get('tab') || 'tree-menu';

		tabPanel.setActiveTab(tab);
	},

	rememberMenuTab: function(tabPanel, newCard, oldCard, eOpts) {

		Ext.util.Cookies.set('tab', newCard.name);
	},

	activeMenuTab: function(tabPanel) {
		var tab = Ext.util.Cookies.get('tab') || 'tree-menu';

		tabPanel.setActiveTab(tab);
	},

	getFastRecords: function(tree, codes) {
		var me = this,
			records = [],
			notExistCodes = [],
			arrCodes = codes.split(',');

		Ext.each(arrCodes, function(code) {
			var record = tree.getRootNode().findChild('code', code, true);
			if (record) {
				records.push(record);
			} else {
				notExistCodes.push(code);
			}
		});

		return {
			notExistCodes: notExistCodes,
			records: records
		};
	},

	logoutSys: function() {
		var me = this;

		Ext.Msg.confirm('提示', '您确认退出系统?', function(btn) {
			if (btn === 'yes') {
				Ext.util.ajax({
					url: APP.globalConfig.path + '/logout',
					method: 'POST',
					disableCaching: true,
					success: function(res) {
						window.location.href = res.result;
					},
					failure: function(res) {
						Ext.Msg.alert('提示', res.message);
					}
				});
			}
		});
	},

	toEpcIndex: function() {
		var win = window.open('/');

		Ext.util.ajax({
			url: APP.globalConfig.path + '/logout/toEpc',
			method: 'POST',
			disableCaching: true,
			success: function(res) {
				win.location.href = res.result ? res.result : APP.globalConfig.path + '/epcError';
			},
			failure: function(res) {
				Ext.Msg.alert('提示', res.message);
			}
		})
	},

	showChangePassword: function() {
		var me = this,
			changePwdWindow = Ext.create('APP.view.account.changePassword.Form');

		changePwdWindow.show();
	},

	loadCascadingMenu: function() {
		var me = this,
			data = [],
			treePanel = Ext.getCmp('cascading-menu'),
			store = me.getMasterCascadingMenuStore();

		treePanel.setLoading(true, true);
		store.load(function(records, op, success) {
			if (success) {
				me.buildCascadingMenu(treePanel, records);
			}
			treePanel.setLoading(false);
		});
	},

	loadTreeMenu: function() {
		var me = this,
			treePanel = Ext.getCmp('tree-menu'),
			store = me.getMasterTreeMenuStore();

		treePanel.setLoading(true, true);

		store.load({
			callback: function(data) {
				treePanel.setLoading(false);
			}
		});
		treePanel.bindStore(store);
	},

	buildCascadingMenu: function(treePanel, records) {
		Ext.each(records, function(item) {
			var store = Ext.create('Ext.data.TreeStore', {
				autoSync: true,
				fields: [{
					name: 'text',
					mapping: 'name'
				}],
				root: item.data
			});
			var tree = Ext.create('Ext.tree.Panel', {
				title: item.get("text"),
				store: store,
				useArrows: true,
				border: 0,
				action: 'main-menu',
				autoDestroy: true,
				autoScroll: false,
				rootVisible: false
			});

			treePanel.add(tree);
		});
	},

	loadMultiplePage: function(records, index) {
		var me = this;

		if (index < records.length) {
			me.loadPage(records[index], null, function() {
				index++;
				me.loadMultiplePage(records, index);
			});
		}
	},

	loadPage: function(record, params, callback) {

		if (Ext.isString(record)) {
			var store = this.getMasterTreeMenuStore();

			record = store.getNodeById(record);
		}

		if (!record.get('leaf')) return;

		var me = this,
			id = record.get('id'),
			text = record.get('text'),
			url = record.get('url');

		if (Ext.isString(url) && url.length > 0) {
			me.openWindow(url);
			return;
		}

		if (me.getTabPage(record)) {
			me.addTab(id, text, true, record, params, callback);
		} else {
			if (console && console.log) {
				console.log("未配置page 信息, 请到extjsConfig 配置controller view, id:" + id);
			}
		}
	},

	addTab: function(id, title, closable, record, params, callback) {
		var me = this,
			tabs = Ext.getCmp('tabs'),
			tab = Ext.getCmp("tab_" + id);

		// 当前模块已经打开, 则激活
		if (tab) {
			tabs.setActiveTab(tab);
			if (typeof callback === 'function') {
				callback();
			}
			return;
		}

		// 快速打开菜单操作，闭包保留着用域
		(function(tabs, id, title, closable, record, params, callback) {

			window.setTimeout(function() {
				me.showTab(tabs, id, title, closable, record, params, callback);
			}, 5);

		})(tabs, id, title, closable, record, params, callback);
	},

	showTab: function(tabs, id, title, closable, record, params, callback) {
		var me = this;

		tabs.add({
			title: title,
			id: "tab_" + id,
			items: [],
			layout: "fit",
			closable: closable,
			closeAction: "destroy",
			listeners: {
				afterrender: function() {
					var tab = this;

					tabs.setActiveTab(tab);
					me.finishTabRender(id, tab, record, params, callback);
				}
			}
		}).show();
	},

	finishTabRender: function(id, tab, record, params, callback) {
		var me = this,
			pageConfig = me.getTabPage(record || id);

		tab.setLoading(tab.title + ', 加载中...');

		setTimeout(function() {
			me.loadController(pageConfig, tab, record, params, callback);
		}, 10);
	},

	loadController: function(pageConfig, tab, record, params, callback) {
		var me = this,
			controllerName = pageConfig.controller,
			viewport = me.createViewport(pageConfig),
			controllerClassName = APP.app.getModuleClassName(controllerName, "controller");

		Ext.require(controllerClassName, function() {
			var controller = me.createController(controllerName);

			viewport.params = params;

			controller.viewportId = viewport.id;
			controller.functionCode = record ? record.get('functionCode') : null;
			controller.initEvents && controller.initEvents();

			tab.controllerId = controller.id;
			tab.add(viewport);
			tab.setLoading(false);

			if (typeof callback === 'function') {
				callback();
			}
		});
	},

	createViewport: function(pageConfig) {
		var me = this,
			className = APP.app.getModuleClassName(pageConfig.viewport, "view"),
			viewport = Ext.create(className, {
				id: Ext.id()
			});

		return viewport;
	},

	createController: function(controllerName) {
		var me = this;

		return APP.app.getController(controllerName);
	},

	destroyController: function(controllerId) {
		var me = this;

		APP.app.eventbus.unlisten(controllerId);
		APP.app.controllers.remove({
			id: controllerId
		});
	},

	openWindow: function(url) {
		var me = this;

		window.open(url, "_blank");
	},

	closeTab: function(tab) {
		var me = this;

		me.destroyController(tab.controllerId);
	},

	getTabPage: function(record) {
		var me = this,
			itemType;

		if (Ext.isString(record)) {
			id = record;
		} else {
			itemType = record.get('itemType');
			id = itemType === "03" ? "common" : record.get('id');
		}

		return APP.extjsConfig.pages[id];
	}
});