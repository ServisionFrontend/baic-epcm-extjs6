Ext.define('APP.view.business.consultDetail.Viewport', {
  extend: 'Ext.container.Viewport',
  width: "100%",
  layout: "fit",
  requires: [
    'APP.view.business.consultDetail.question.View',
    'APP.view.business.consultDetail.evaluation.View',
    'APP.view.business.consultDetail.reply.View'
  ],
  initEvents: function() {
    var me = this,
      replyview = me.down('replyview'),
      questionview = me.down('questionview'),
      evaluationview = me.down('evaluationview');

    questionview.on('afterbindformdata', function(result) {
      evaluationview.bindFormData(result);
      replyview.params = result;
      replyview.loadReplyContent();
    });

    replyview.on('beforereply', function() {
      return me.saveQuestion();
    });

    replyview.on('savesuccess', function(){
      questionview.load();
    });
  },
  saveQuestion: function() {
    var me = this,
      questionview = me.down('questionview');

    if (questionview.getForm().isValid()) {
      questionview.doSave();
      return true;
    }
    return false;
  },
  items: [{
    id: 'consult-detail',
    itemId: 'consult-detail',
    autoScroll: true,
    bodyPadding: 10,
    title: '问题详细',
    defaults: {
      border: true,
      margin: 'auto auto 10 auto',
      collapsible: false,
      animCollapse: false
    },
    layout: {
      type: 'vbox',
      align: 'center'
    },
    items: [{
      xtype: 'questionview'
    }, {
      xtype: 'evaluationview'
    }, {
      xtype: 'replyview'
    }]
  }]
});