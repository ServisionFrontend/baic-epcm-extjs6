Ext.define('APP.model.system.DataAuthority', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'auths',
    convert: function (val) {
      if (val) {
        return typeof val === 'string' ? val : val.join(',');
      }
    }
  }, {
    name: 'brandName'
  }, {
    name: 'brandCode'
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