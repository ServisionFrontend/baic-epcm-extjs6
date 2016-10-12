Ext.define('APP.store.common.FuncKit', {
    extend: 'Ext.data.TreeStore',
    model: 'APP.model.common.FuncKit',
    proxy: {
        type: 'ajax',
        url: APP.globalConfig.path + '/system/funcAuthority/list',
        reader: {
            type: 'json'
        }
    }
});