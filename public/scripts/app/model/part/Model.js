Ext.define('APP.model.part.Model', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'brandName'
  }, {
    name: 'brandCode'
  }, {
    name: 'seriesName'
  }, {
    name: 'seriesCode'
  }, {
    name: 'modelGroupName'
  }, {
    name: 'modelGroupCode'
  }, {
    name: 'sort'
  }, {
    name: 'createdBy'
  }, {
    name: 'createdOn',
    convert: function (val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'modifiedBy'
  }, {
    name: 'modifiedOn',
    convert: function (val) {
      return Ext.util.Format.localDate(val);
    }
  }]
});