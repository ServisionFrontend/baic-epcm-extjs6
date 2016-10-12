Ext.define('APP.model.atlas.EpcData', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'dbCode'
  }, {
    name: 'dbName'
  }, {
    name: 'taskName'
  }, {
    name: 'status'
  }, {
    name: 'statusText'
  }, {
    name: 'createdBy'
  }, {
    name: 'createdOn',
    convert: function (val) {
      return Ext.util.Format.localDate(val);
    }
  }]
});