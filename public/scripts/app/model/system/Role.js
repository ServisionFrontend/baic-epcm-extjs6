Ext.define('APP.model.system.Role', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'roleType'
  }, {
    name: 'roleTypeName'
  }, {
    name: 'brandName'
  }, {
    name: 'brandCode'
  }, {
    name: 'name'
  }, {
    name: 'dmsCode'
  }, {
    name: 'dmsName'
  }, {
    name: 'dmsBrandCode'
  }, {
    name: 'dmsBrandName'
  }, {
    name: 'dataAuthPkgs'
  }, {
    name: 'dataAuthPkgCodes',
    mapping: 'dataAuthPkgs',
    convert: function (val) {
      var temp = [];
      if (val) {
        for (var i = 0; i < val.length; i++) {
          temp.push(val[i].code);
        }
      }

      return temp;
    }
  }, {
    name: 'funcAuthPkgs'
  }, {
    name: 'funcAuthPkgCodes',
    mapping: 'funcAuthPkgs',
    convert: function (val) {
      var temp = [];
      if (val) {
        for (var i = 0; i < val.length; i++) {
          temp.push(val[i].code);
        }
      }

      return temp;
    }
  }, {
    name: 'createdBy'
  }, {
    name: 'createdOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'modifiedBy'
  }, {
    name: 'modifiedOn',
    convert: function(val) {
      return Ext.util.Format.localDate(val);
    }
  }]
});