Ext.define('APP.model.part.Usage', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id'
  }, {
    name: 'code',
    mapping: 'id'
  }, {
    name: 'vehicleCode'
  }, {
    name: 'seriesName'
  }, {
    name: 'seriesCode'
  }, {
    name: 'modelGroupName'
  }, {
    name: 'modelGroupCode'
  }, {
    name: 'modelName'
  }, {
    name: 'modelCode'
  }, {
    name: 'groupName'
  }, {
    name: 'groupCode'
  }, {
    name: 'subGroupName'
  }, {
    name: 'subGroupCode'
  }, {
    name: 'imageCode'
  }, {
    name: 'imageName'
  }, {
    name: 'callout'
  }, {
    name: 'partCode'
  }, {
    name: 'partUsageName'
  }, {
    name: 'qty'
  }, {
    name: 'startDate',
    convert: function (val) {
      return Ext.util.Format.localDate(val, 'Y-m-d');
    }
  }, {
    name: 'endDate',
    convert: function (val) {
      return Ext.util.Format.localDate(val, 'Y-m-d');
    }
  }, {
    name: 'note'
  }, {
    name: 'engineerNote'
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