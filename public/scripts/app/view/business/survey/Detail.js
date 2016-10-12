Ext.define('APP.view.business.survey.Detail', {
  extend: 'Ext.window.Window',
  title: '问卷调查详情',
  closable: true,
  modal: true,
  resizable: false,
  constrainHeader: true,
  layout: "fit",
  closeAction: 'destroy',
  width: 800,
  maxHeight: 600,
  bodyStyle: {
    background: '#fff'
  },
  bodyPadding: '5',
  listeners: {
    afterrender: function() {
      var me = this,
        code = me.params.code;

      me.loadQuestions(code);
      me.loadAnswer(code);
    }
  },

  loadQuestions: function(questionnaireCode) {
    var me = this,
      formPanel = me.down('form');

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/business/survey/questions',
      disableCaching: true,
      params: {
        questionnaireCode: questionnaireCode
      },
      beforerequest: function() {
        formPanel.setLoading(true);
      },
      callback: function() {
        formPanel.setLoading(false);
      },
      success: function(result) {
        me.bindFormData(result);
      }
    });
  },

  loadAnswer: function(questionnaireCode) {
    var me = this,
      gridPanel = me.down('grid');

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/business/survey/answer',
      disableCaching: true,
      beforerequest: function() {
        gridPanel.setLoading(true);
      },
      callback: function() {
        gridPanel.setLoading(false);
      },
      params: {
        questionnaireCode: questionnaireCode
      },
      success: function(result) {
        me.bindGridData(result);
      }
    });
  },

  bindFormData: function(result) {
    var me = this,
      i = 0,
      questions = result.questions || [],
      form = me.down('form').getForm();

    for (; i < questions.length; i++) {
      result['question' + (i + 1)] = questions[i].question;
    }

    delete result.questions;
    form.setValues(result);
  },

  bindGridData: function(result) {
    var me = this,
      i = 0,
      answers,
      grid = me.down('grid');

    for (; i < result.length; i++) {
      answers = result[i].answers || [];
      for (var j = 0; j < answers.length; j++) {
        result[i]['answer' + (j + 1)] = answers[j].answer;
      }
      delete result[i].answers;
    }

    grid.getStore().loadData(result);
  },

  exportResult: function() {
    var me = this,
      code = me.params.code,
      exportUrl = '/business/survey/downloadAnswer';

    window.open(exportUrl + '?questionnaireCode=' + code, '_self');
  },

  items: [{
    layout: 'vbox',
    border: false,
    defaults: {
      width: '100%'
    },
    items: [{
      xtype: 'form',
      layout: 'hbox',
      title: '基本详情',
      bodyPadding: '5',
      margin: 'auto auto 5 auto',
      defaults: {
        width: '50%',
        border: false,
        defaults: {
          xtype: 'displayfield'
        }
      },
      items: [{
        items: [{
          fieldLabel: '问卷调查编号',
          name: 'numbering'
        }, {
          fieldLabel: '适用品牌',
          name: 'brandNames'
        }, {
          fieldLabel: '问卷调查问题二',
          name: 'question2'
        }, {
          fieldLabel: '问卷调查问题四',
          name: 'question4'
        }, {
          fieldLabel: '问卷调查问题六',
          name: 'question6'
        }, {
          fieldLabel: '问卷调查问题八',
          name: 'question8'
        }, {
          fieldLabel: '问卷调查问题十',
          name: 'question10'
        }, {
          fieldLabel: '参与调研的比例',
          name: 'participateRatio'
        }]
      }, {
        items: [{
          fieldLabel: '问卷调查主题',
          name: 'subject'
        }, {
          fieldLabel: '问卷调查问题一',
          name: 'question1'
        }, {
          fieldLabel: '问卷调查问题三',
          name: 'question3'
        }, {
          fieldLabel: '问卷调查问题五',
          name: 'question5'
        }, {
          fieldLabel: '问卷调查问题七',
          name: 'question7'
        }, {
          fieldLabel: '问卷调查问题九',
          name: 'question9'
        }, {
          fieldLabel: '参与调研的用户数',
          name: 'participateUsers'
        }]
      }]
    }, {
      title: '列表区域-问题调研列表',
      border: false,
      items: [{
        xtype: 'gridpanel',
        rownumberer: true,
        tbar: [{
          xtype: 'button',
          text: '导出调研结果',
          action: 'export',
          iconCls: 'icon-export-excel',
          handler: function(that) {
            var me = this,
              parent = me.up('window');

            parent.exportResult();
          }
        }],
        store: Ext.create('Ext.data.Store', {
          fields: [
            'enterpriseCode',
            'username',
            'enterpriseTypeName',
            'phone',
            'respondent',
            'answer1',
            'answer2',
            'answer3',
            'answer4',
            'answer5',
            'answer6',
            'answer7',
            'answer8',
            'answer9',
            'answer10'
          ],
          proxy: {
            type: 'memory'
          }
        }),
        height: 260,
        columns: [{
          text: "序号",
          xtype: 'rownumberer',
          width: 35
        }, {
          text: '企业编码',
          dataIndex: 'enterpriseCode'
        }, {
          text: '用户名',
          dataIndex: 'username'
        }, {
          text: '企业类型',
          dataIndex: 'enterpriseTypeName'
        }, {
          text: '调研者姓名',
          dataIndex: 'respondent'
        }, {
          text: '调研者手机号',
          dataIndex: 'phone'
        }, {
          text: '问题一回答',
          dataIndex: 'answer1'
        }, {
          text: '问题二回答',
          dataIndex: 'answer2'
        }, {
          text: '问题三回答',
          dataIndex: 'answer3'
        }, {
          text: '问题四回答',
          dataIndex: 'answer4'
        }, {
          text: '问题五回答',
          dataIndex: 'answer5'
        }, {
          text: '问题六回答',
          dataIndex: 'answer6'
        }, {
          text: '问题七回答',
          dataIndex: 'answer7'
        }, {
          text: '问题八回答',
          dataIndex: 'answer8'
        }, {
          text: '问题九回答',
          dataIndex: 'answer9'
        }, {
          text: '问题十回答',
          dataIndex: 'answer10'
        }]
      }]
    }]
  }]
});