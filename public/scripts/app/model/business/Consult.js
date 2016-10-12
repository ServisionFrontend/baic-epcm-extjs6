Ext.define('APP.model.business.Consult', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'numbering'
  }, {
    name: 'subject'
  }, {
    name: 'classificationCode'
  }, {
    name: 'classificationName'
  }, {
    name: 'status'
  }, {
    name: 'statusName'
  }, {
    name: 'blocked'
  }, {
    name: 'blockedName'
  }, {
    name: 'partCode'
  }, {
    name: 'partName'
  }, {
    name: 'vin'
  }, {
    name: 'reasonName'
  }, {
    name: 'reasonName'
  }, {
    name: 'brandCode'
  }, {
    name: 'brandName'
  }, {
    name: 'seriesCode'
  }, {
    name: 'seriesName'
  }, {
    name: 'isPublic'
  }, {
    name: 'seriousName'
  }, {
    name: 'publicName'
  }, {
    name: 'quality'
  }, {
    name: 'qualityName'
  }, {
    name: 'qualityComment'
  }, {
    name: 'enterpriseCode'
  }, {
    name: 'enterpriseName'
  }, {
    name: 'userAccount'
  }, {
    name: 'questioner'
  }, {
    name: 'contactPhone'
  }, {
    name: 'provinceCode'
  }, {
    name: 'provinceName'
  }, {
    name: 'createdOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'lastReplyPerson'
  }, {
    name: 'lastReplyOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'firstReplyOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'closeOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }]
});