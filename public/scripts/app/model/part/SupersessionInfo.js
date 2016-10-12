Ext.define('APP.model.part.SupersessionInfo', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'newCode'
  }, {
    name: 'oldCode'
  }, {
    name: 'isGroup'
  }, {
    name: 'isGroupText'
  }, {
    name: 'isGroup'
  }, {
    name: 'typeCode'
  }, {
    name: 'typeName'
  }, {
    name: 'replaceTime',
    convert: function (val) {
      return Ext.util.Format.localDate(val, 'Y-m-d');
    }
  }, {
    name: 'breakPointNote'
  }, {
    name: 'note'
  }, {
    name: 'newNote'
  }, {
    name: 'oldNote'
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