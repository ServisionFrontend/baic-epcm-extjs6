Ext.define('APP.model.part.Reorganize', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code',
    mapping: 'vehicleCode'
  }, {
    name: 'name'
  }, {
    name: 'vehicleCode'
  }, {
    name: 'brandName'
  }, {
    name: 'brandCode'
  }, {
    name: 'seriesCode'
  }, {
    name: 'seriesName'
  }, {
    name: 'modelGroupCode'
  }, {
    name: 'modelGroupName'
  }, {
    name: 'modelCode'
  }, {
    name: 'modelName'
  }, {
    name: 'isRelease'
  }, {
    name: 'isVerify'
  }, {
    name: 'verifyBy'
  }, {
    name: 'verifyOn',
    convert: function (val) {
      return Ext.util.Format.localDate(val);
    }
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