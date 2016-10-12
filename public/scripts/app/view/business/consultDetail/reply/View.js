Ext.define('APP.view.business.consultDetail.reply.View', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.replyview',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.plugin.LabelRequired'
  ],
  plugins: ['formlabelrequired'],
  mixins: {
    viewBase: 'APP.view.common.class.Base'
  },
  title: '回答记录',
  width: 1024,
  layout: {
    type: 'vbox'
  },
  bodyPadding: 5,
  defaults: {
    width: '100%'
  },
  initEvents: function () {
    var me = this,
      btnReply = me.down('[itemId=reply]'),
      replyContent = me.down('[itemId=replyContent]');

    // 回复
    btnReply.on('click', function () {
      me.reply();
    });

    // 注册回复内容内删除事件
    replyContent.mon(
      replyContent.el, 'click',
      function (event, target) {
        var action = target.getAttribute('data-action'),
          answerCode = target.getAttribute('data-code');

        if (action === 'delete') {
          me.deleteReplyContent(answerCode);
        }
      },
      replyContent, {
        delegate: 'a'
      }
    );
  },

  deleteReplyContent: function (answerCode) {
    var me = this;

    Ext.Msg.confirm("提示", "确认删除当前回复?", function (btn) {
      if (btn === "yes") {
        Ext.util.ajax({
          url: APP.globalConfig.restpath + '/business/consultDetail/reply',
          method: 'DELETE',
          jsonData: [answerCode],
          beforerequest: function () {
            me.setLoading('删除回复中, 请稍候...');
          },
          callback: function () {
            me.setLoading(false);
          },
          success: function () {
            me.loadReplyContent();
          }
        });
      }
    });
  },

  loadReplyContent: function () {
    var me = this,
      questionCode = me.getUrlParams().code;

    me.controlReolyForm();

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/business/consultDetail/reply',
      method: 'GET',
      disableCaching: true,
      params: {
        questionCode: questionCode
      },
      beforerequest: function () {
        me.setLoading('加载中, 请稍候...');
      },
      callback: function () {
        me.setLoading(false);
      },
      success: function (result) {
        me.finishloadReply(result);
      }
    });
  },

  finishloadReply: function (result) {
    var me = this,
      form = me.down('form'),
      data = me.rebuildResult(result),
      replyWrap = me.down('[itemId=replyWrap]'),
      replyContent = me.down('[itemId=replyContent]');

    form.getForm().reset();
    replyContent.update(data);
    replyWrap.body.scroll('b', 10000);
  },

  rebuildResult: function (result) {
    var me = this;

    Ext.each(result, function (item) {
      item.createdOn = Ext.util.Format.localDate(item.createdOn);
      item.statusCode = me.params.status;

      //Ext.each(item.attachments, function (subItem) {
      //  subItem.path = '/business/consultDetail/download/?arg=' + encodeURIComponent(subItem.path || '') + '&filename=' + encodeURIComponent(subItem.name || '');
      //});

    });

    return result;
  },

  reply: function () {
    var me = this,
      form = me.down('form').getForm();

    if (!form.isValid() || !me.up('viewport').down('questionview').getForm().isValid()) {
      Ext.Msg.alert('提示', '【问题原因】与【问题回复】为必输项！');
      return;
    }

    me.fireEvent('beforereply');

    var tbContent = form.findField('content'),
      content = tbContent.getValue(),
      encodeContent = Ext.htmlEncode(content);

    tbContent.setValue(encodeContent);

    form.submit({
      url: APP.globalConfig.restpath + '/business/consultDetail/reply',
      method: 'POST',
      waitMsg: '回复中, 请稍候...',
      success: function (that, action) {
        me.loadReplyContent();
        me.fireEvent('savesuccess');
      },
      failure: function (that, action) {
        tbContent.setValue(content);
        Ext.util.errorHandler(action.response);
      }
    });
  },

  controlReolyForm: function () {
    var me = this;
    form = me.down('form');

    if (me.params.status === 2) {
      form.hide();
    } else {
      form.show();
    }
  },

  items: [{
    xtype: 'form',
    margin: '5 0 10 0',
    defaults: {
      width: 600
    },
    border: false,
    items: [{
      xtype: 'textareafield',
      fieldLabel: '问题回复',
      name: 'content',
      maxLength: 500,
      allowBlank: false,
      listeners: {
        change: function (that) {
          var countWord = this.up('form').down('[itemId=countWord]');
          var text = this.getValue();
          var hasInput = text.length;
          var canInput = 500 - hasInput;

          if (canInput >= 0) {
            countWord.setValue('已输入 '+ hasInput +' 字，还能输入 '+ canInput +' 字')
          } else {
            this.setValue(text.substr(0, 500));
            countWord.setValue('已输入 500 字，还能输入 0 字')
          }
        }
      }
    }, {
      xtype: 'displayfield',
      itemId: 'countWord',
      margin: '0 0 5 0',
      value: '已输入 0 字，还能输入 500 字',
      fieldStyle: 'color:#999;text-align:right;'
    }, {
      xtype: 'filefield',
      fieldLabel: '附件',
      buttonText: '浏览',
      name: 'filename'
    }, {
      xtype: 'hiddenfield',
      name: 'questionCode',
      value: Ext.Object.fromQueryString(window.location.search).code
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '注：(附件大小 <= 10MB)'
    }, {
      layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
      },
      border: false,
      margin: '10 auto auto auto',
      items: [{
        itemId: "reply",
        xtype: 'button',
        text: "回复",
        width: 55,
        iconCls: 'icon-reply'
      }]
    }]
  }, {
    itemId: 'replyWrap',
    height: 220,
    margin: 'auto auto 5 auto',
    overflowY: 'auto',
    items: [{
      itemId: 'replyContent',
      border: false,
      // 模板渲染,  模板存放在view页面
      tpl: [Ext.get('reply-tpl').getHTML()]
    }]
  }]
});