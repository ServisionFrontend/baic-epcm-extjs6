Ext.define('APP.model.master.Menu', {
  extend: 'Ext.data.Model',
  statics: {
    startIndex: 10
  },
  fields: [{
    name: 'id'
  }, {
    name: 'code',
    mapping: function(data) {
      if (data.leaf) {
        return ++APP.model.master.Menu.startIndex;
      }
    }
  }, {
    name: 'url'
  }, {
    name: 'text',
    mapping: 'name'
  }, {
    name: 'children'
  }, {
    name: 'pingyin',
    mapping: function(data) {
      return Ext.util.pingyin.getFullChars(data.name);
    }
  }, {
    name: 'py',
    mapping: function(data) {
      return Ext.util.pingyin.getCamelChars(data.name);
    }
  }, {
    name: 'qtip',
    mapping: function(data) {
      if (data.leaf) {
        return APP.model.master.Menu.startIndex + ':' + data.name;
      }
    }
  }]
});