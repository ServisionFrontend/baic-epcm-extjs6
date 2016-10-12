Ext.define('APP.view.part.reorganize.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '整编',
  updateDisableItems: ['code'],
  items: [{
    items: []
  }]
});