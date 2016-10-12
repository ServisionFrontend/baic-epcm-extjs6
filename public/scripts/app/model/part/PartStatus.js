Ext.define('APP.model.part.PartStatus', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'productionPartCode'
  }, {
    name: 'photoCount'
  }, {
    name: 'note'
  }, {
    name: 'statusCode'
  }, {
    name: 'statusName'
  }, {
    name: 'typeCode'
  }, {
    name: 'typeName'
  }, {
    name: 'specialPurchaseTag'
  }, {
    name: 'specialPurchaseNote'
  }, {
    name: 'weight'
  }, {
    name: 'length'
  }, {
    name: 'width'
  }, {
    name: 'height'
  }, {
    name: 'dimensionNo'
  }, {
    name: 'price'
  }, {
    name: 'moq'
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