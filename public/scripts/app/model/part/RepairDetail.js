Ext.define('APP.model.part.RepairDetail', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'partCode'
  }, {
    name: 'partName'
  }, {
    name: 'kitCode'
  }, {
    name: 'kitName'
  }, {
    name: 'supplierCode'
  }, {
    name: 'supplierName'
  }, {
    name: 'designCode'
  }, {
    name: 'productionCode'
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