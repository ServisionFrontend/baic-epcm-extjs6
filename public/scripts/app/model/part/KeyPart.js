Ext.define('APP.model.part.KeyPart', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'vin'
  }, {
    name: 'productionPartCode'
  }, {
    name: 'qty'
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