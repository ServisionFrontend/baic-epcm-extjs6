Ext.define('Ext.ux.proxy.Ajax', {
  extend: 'Ext.data.proxy.Rest',
  headers: {
    'Accept': 'application/json'
  },
  doRequest: function (operation, callback, scope) {
    var writer = this.getWriter(),
      request = this.buildRequest(operation);

    if (operation.allowWrite()) {
      request = writer.write(request);
    }
    Ext.apply(request, {
      binary: this.binary,
      headers: this.headers,
      timeout: this.timeout,
      scope: this,
      callback: this.createRequestCallback(request, operation, callback, scope),
      method: this.getMethod(request),
      disableCaching: false
    });

    this.buildJsonData(request, scope);

    Ext.Ajax.request(request);

    return request;
  },

  buildJsonData: function (request, scope) {
    var me = this, jsonData,
      action = request.action,
      operation = request.operation;

    if (operation.allowWrite()) {
      request.jsonData = request.proxy.extraJsonData;
    } else {
      request.params = me.getReadParams(request, scope);
    }
  },

  getReadParams: function (request, scope) {
    var me = this,
      operation = request.operation,
      readParams = {
        filters: scope.proxy.extraFilters || [],
        sorts: me.getStores(operation.sorters),
        paging: {
          page: operation.page,
          size: operation.limit
        }
      };

    return {
      args: Ext.encode(readParams)
    };
  },

  getStores: function (sorters) {
    var me = this,
      sorts = [];

    Ext.each(sorters, function (item) {
      sorts.push({
        field: item.property ,
        asc: item.direction === 'ASC' ? true : false
      });
    });

    return sorts;
  }
});
