Ext.define('APP.view.business.survey.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '问题调查',
  maxHeight: 580,
  doSave: function() {
    if (!this.getForm().isValid()) {
      return;
    }
    var me = this,
      params = me.getParams();

    me.setLoading(true);
    me.fireEvent('dosave', params);
  },

  getParams: function() {
    var me = this,
      params = {},
      questions = me.getQuestions(),
      form = me.down('form').getForm(),
      items = me.getFormFields(),
      tbSubject = form.findField('subject');

    params['questions'] = questions;
    params['subject'] = tbSubject.getValue();

    if (me.editMode === 'update') {
      params['questionnaireCode'] = me.params.questionnaireCode;
    }

    Ext.each(items, function(item) {
      if (!item.isNotSubmit) {
        params[item.name] = item.getValue();
      }
    });

    return params;
  },


  getQuestions: function() {
    var me = this,
      sort = 1,
      questions = [],
      items = me.query('[xtype=textareafield]');

    Ext.each(items, function(item) {
      if (item.getValue() && item.getValue().length > 0) {
        questions.push({
          question: Ext.htmlEncode(item.getValue()),
          sort: sort
        });
        sort++;
      }
    });

    return questions;
  },

  setRecord: function(params) {
    var me = this,
      code = params.get('code');

    me.params = {
      questionnaireCode: code
    };

    me.loadQuestions(code);
  },

  loadQuestions: function(questionnaireCode) {
    var me = this;

    Ext.util.ajax({
      url: APP.globalConfig.restpath + '/business/survey/questions',
      disableCaching: true,
      params: {
        questionnaireCode: questionnaireCode
      },
      success: function(result) {
        me.bindData(result);
      }
    });
  },

  bindData: function(result) {
    var me = this,
      i = 0,
      questions = result.questions || [],
      form = me.down('form').getForm();

    for (; i < questions.length; i++) {
      result['question' + (i + 1)] =Ext.htmlDecode(questions[i].question);
    }

    delete result.questions;
    form.setValues(result);
  },

  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '适用品牌',
      name: 'brandCodes',
      storeAutoLoad: true,
      multiSelect: true,
      url: APP.globalConfig.restpath + '/business/survey/brandList'
    }, {
      fieldLabel: '问题调查主题',
      name: 'subject'
    }, {
      fieldLabel: '问卷调查问题一',
      name: 'question1',
      xtype: 'textareafield',
      height: 40
    }, {
      fieldLabel: '问卷调查问题二',
      name: 'question2',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题三',
      name: 'question3',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题四',
      name: 'question4',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题五',
      name: 'question5',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题六',
      name: 'question6',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题七',
      name: 'question7',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题八',
      name: 'question8',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题九',
      name: 'question9',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }, {
      fieldLabel: '问卷调查问题十',
      name: 'question10',
      xtype: 'textareafield',
      height: 40,
      allowBlank: true
    }]
  }]
});