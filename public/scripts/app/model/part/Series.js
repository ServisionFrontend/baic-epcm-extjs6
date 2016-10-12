Ext.define('APP.model.part.Series', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  },{
    name: 'brandCode'
  }, {
    name: 'name'
  },{
    name: 'brandName'
  }, {
    name: 'originImageFilename'
  }, {
    name: 'imageFilename'
  }, {
    name: 'imageFileUrl'
  }, {
    name: 'sort'
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