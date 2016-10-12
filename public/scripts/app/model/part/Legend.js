Ext.define('APP.model.part.Legend', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'brandName'
  }, {
    name: 'brandCode'
  }, {
    name: 'seriesName'
  }, {
    name: 'seriesCode'
  }, {
    name: 'groupCode'
  }, {
    name: 'groupName'
  }, {
    name: 'subGroupCode'
  }, {
    name: 'subGroupName'
  }, {
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'note'
  }, {
    name: 'originSvgFilename'
  }, {
    name: 'originGifFilename'
  }, {
    name: 'svgFilename'
  }, {
    name: 'gifFilename'
  }, {
    name: 'svgFileUrl'
  }, {
    name: 'gifFileUrl'
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