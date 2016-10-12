Ext.define('APP.store.master.CascadingMenu', {
    extend: 'Ext.data.Store',
    model: 'APP.model.master.Menu',
    proxy: {
        type: 'ajax',
        url: APP.globalConfig.path + '/master/menu',
        reader: {
            type: 'json',
            root: 'children'
        }
    }
});