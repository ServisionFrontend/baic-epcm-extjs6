Ext.define('APP.model.system.EnterpriseInfo', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'type'
  }, {
    name: 'typeName'
  }, {
    name: 'brandCode'
  }, {
    name: 'brandName'
  }, {
    name: 'provinceCode'
  }, {
    name: 'provinceName'
  }, {
    name: 'cityCode'
  }, {
    name: 'cityName'
  }, {
    name: 'address'
  }, {
    name: 'contactName'
  }, {
    name: 'contactPhone'
  }, {
    name: 'contactMail'
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