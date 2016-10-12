Ext.define('APP.view.master.TreeMenu', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.mastertreemenu',
	border: 0,
	iconCls: 'icon-tree-menu',
	requires: ['Ext.ux.plugin.TreeFilter'],
	plugins: [{
		ptype: 'treefilter',
		allowParentFolders: false
	}],
	useArrows: true,
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			xtype: 'trigger',
			triggerCls: 'x-form-clear-trigger',
			emptyText: "快速查找...",
			enableKeyEvents: true,
			flex: 2,
			onTriggerClick: function() {
				this.clearText();
			},

			clearText: function() {
				var tree = this.up("treepanel");

				this.reset();
				this.focus();
				tree.doFilter('');
			},
			listeners: {
				keyup: {
					fn: function(field, e, eOpts) {
						var tree = field.up("treepanel"),
							newVal = field.getValue();

						if (e.getKey() === e.ESC) {
							this.clearText();
							return;
						}

						if (e.getKey() === e.DOWN) {
							if (tree.visibleNodes && tree.visibleNodes.length > 2) {
								tree.getSelectionModel().select(tree.visibleNodes[1]);
							}
							return;
						}

						if (newVal && newVal.length && newVal[0] === '@') {
							if (e.getKey() === e.ENTER) {
								tree.fastOpen(newVal);
							}
						} else {
							tree.doFilter(newVal);
						}
					},
					buffer: 200
				}
			}
		}, '-', {
			tooltip: "全部收起",
			iconCls: 'icon-collapse-all',
			width: 22,
			listeners: {
				click: function(field) {
					var tree = field.up('treepanel');

					tree.collapseAll();
				}
			}
		}, '-', {
			tooltip: "全部展开",
			iconCls: 'icon-expand-all',
			width: 22,
			listeners: {
				click: function(field) {
					var tree = field.up('treepanel');

					tree.expandAll();
				}
			}
		}]
	}],
	doFilter: function(keyword) {
		var me = this,
			selectionModel = me.getSelectionModel();

		if (selectionModel.hasSelection()) {
			selectionModel.deselectAll();
		}
		
		keyword = Ext.util.Format.trim(keyword)
		me.filter(keyword);
	},

	fastOpen: function(keyword) {
		var me = this,
			treeCode = keyword.replace('@', '');

		me.fireEvent("fastOpen", me, treeCode);
	},
	autoDestroy: true,
	autoScroll: false,
	rootVisible: false
});