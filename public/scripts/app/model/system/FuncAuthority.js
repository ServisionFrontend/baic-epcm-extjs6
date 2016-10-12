Ext.define('APP.model.system.FuncAuthority', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'brandName'
  }, {
    name: 'brandCode'
  }, {
    name: 'auths',
    convert: function (val) {
      if (val) {
        return typeof val === 'string' ? val : val.join(',');
      }
    }
  }, {
    name: 'createdBy'
  }, {
    name: 'note'
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