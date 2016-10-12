Ext.define('APP.model.system.UserInfo', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code',
    mapping: 'username'
  }, {
    name: 'username'
  }, {
    name: 'password'
  }, {
    name: 'confirmPassword',
    mapping: 'password'
  }, {
    name: 'logoBrandName'
  }, {
    name: 'logoBrandCode'
  }, {
    name: 'roleCodes',
    mapping: 'roles',
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
    name: 'roles'
  }, {
    name: 'dbs'
  }, {
    name: 'dbCodes',
    convert: function (val, obj) {
      var result = [];

      if (obj.data && obj.data.dbs) {
        for (var i = 0; i < obj.data.dbs.length; i++) {
            result.push(obj.data.dbs[i].code);
        }
      }

      return result;
    }
  }, {
    name: 'realName'
  }, {
    name: 'userType'
  }, {
    name: 'userTypeCode'
  }, {
    name: 'userTypeName'
  }, {
    name: 'enterpriseCode'
  }, {
    name: 'enterpriseTypeName'
  }, {
    name: 'enterpriseName'
  }, {
    name: 'telephone'
  }, {
    name: 'mail'
  }, {
    name: 'status'
  }, {
    name: 'expirationTime',
    convert: function (val) {
      return Ext.util.Format.localDate(val, 'Y-m-d');
    }
  }, {
    name: 'funcAuthPkgs'
  }, {
    name: 'dataAuthPkgs'
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