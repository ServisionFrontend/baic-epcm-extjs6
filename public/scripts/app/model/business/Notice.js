Ext.define('APP.model.business.Notice', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'statusName'
  }, {
    name: 'typeName'
  }, {
    name: 'attachments'
  }, {
    name: 'applySeriesNames'
  }, {
    name: 'applySeries'
  }, {
    name: 'cancelOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'publishOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'status'
  }, {
    name: 'filePath'
  }, {
    name: 'filename'
  }, {
    name: 'applyAll'
  }, {
    name: 'typeCode'
  }, {
    name: 'subject'
  }, {
    name: 'code'
  }, {
    name: 'readedUserAmount'
  }, {
    name: 'readedEnterpriseAmount'
  }, {
    name: 'userAmount'
  }, {
    name: 'enterpriseAmount'
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