Ext.define('APP.view.master.Header', {
    extend: 'Ext.panel.Panel',
    region: 'north',
    alias: 'widget.masterheader',
    height: 60,
    width: 'auto',
    border: false,
    html: Ext.get('header-tpl').getHTML()
});
