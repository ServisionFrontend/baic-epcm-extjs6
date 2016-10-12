Ext.define('APP.model.part.PartPhoto', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'partCode'
  }, {
    name: 'partName'
  }, {
    name: 'sort'
  }, {
    name: 'originFilename'
  }, {
    name: 'filename'
  }, {
    name: 'fileUrl'
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