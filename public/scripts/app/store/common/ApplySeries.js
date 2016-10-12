Ext.define('APP.store.common.ApplySeries', {
    extend: 'Ext.data.TreeStore',
    model: 'APP.model.common.Series',
    proxy: {
        type: 'ajax',
        url: APP.globalConfig.restpath + '/selector/options?args=/catelog/brand-series',
        reader: {
            type: 'json'
        }
    }
});