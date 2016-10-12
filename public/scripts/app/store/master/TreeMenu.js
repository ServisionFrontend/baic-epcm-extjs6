Ext.define('APP.store.master.TreeMenu', {
    extend: 'Ext.data.TreeStore',
    model: 'APP.model.master.Menu',
    proxy: {
        type: 'ajax',
        url: APP.globalConfig.path + '/master/menu',
        reader: {
            type: 'json',
            root: ''
        }
    }
});