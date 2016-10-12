Ext.define('APP.model.part.SupersessionDetail', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'groupCode'
  }, {
    name: 'groupName'
  }, {
    name: 'groupNote',
    mapping: 'groupName'
  }, {
    name: 'partCode'
  }, {
    name: 'partName'
  }, {
    name: 'note'
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