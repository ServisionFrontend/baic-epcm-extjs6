Ext.define('APP.view.master.CascadingMenu', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.mastercascadingmenu',
  width: 250,
  collapsible: true,
  split: true,
  rootVisible: false,
  border: true,
  iconCls: 'icon-cascading-menu',
  layout: {
    type: 'accordion',
    animate: true
  }
});