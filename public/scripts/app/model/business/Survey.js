Ext.define('APP.model.business.Survey', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'numbering'
  }, {
    name: 'subject'
  }, {
    name: 'status'
  }, {
    name: 'statusName'
  }, {
    name: 'brandCodes'
  }, {
    name: 'brandNames'
  }, {
    name: 'participateUsers'
  }, {
    name: 'participateRatio'
  }, {
    name: 'createdBy'
  }, {
    name: 'createdOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'modifiedBy'
  }, {
    name: 'modifiedOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }]
});