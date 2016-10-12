Ext.define('APP.store.common.AllSeries', {
    extend: 'Ext.data.TreeStore',
    model: 'APP.model.common.Series',
    proxy: {
        type: 'ajax',
        url: APP.globalConfig.path + '/system/dataAuthority/list',
        reader: {
            type: 'json'
        }
    }
});