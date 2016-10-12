Ext.define('APP.model.part.Repair', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'partCode'
  }, {
    name: 'partName'
  }, {
    name: 'name'
  }, {
    name: 'note'
  }, {
    name: 'isPart'
  }, {
    name: 'isPartText'
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