Ext.define('APP.view.common.window.Import', {
  extend: 'Ext.ux.component.edit.Base',
  requires: ['Ext.ux.component.button.LinkButton'],
  title: '导入',
  width: 610,
  bodyPadding: '10',
  initEvents: function () {
    var me = this,
      btnImport = me.down('[itemId=btnImport]'),
      excelFilename = me.down('[itemId=excelFilename]'),
      introText = me.down('[itemId=introText]');

    btnImport.on('click', function () {
      excelFilename.allowBlank = false;
      me.uploadImport();
    });

    introText.setValue(me.introText ? me.introText.replace(/(\n\n)/g, '<br />') : '');

    this.callParent(arguments);
  },

  uploadImport: function () {
    var me = this,
      form = me.down('form').getForm(),
      url = me.postUrl,
      query = (me.mode === 'create') ? '?append=true' : '?append=false';

    if (form.isValid()) {
      form.submit({
        url: url + query,
        method: 'POST',
        success: function (that, action) {
          var root = Ext.decode(action.response.responseText);

          me.importSuccess(root);
        },
        failure: function (that, action) {
          var root = Ext.decode(action.response.responseText);

          me.importFailed(root);
        }
      });
    }
  },

  importSuccess: function (result) {
    var me = this;

    Ext.Msg.alert('提示', "导入数据成功！");
    me.queryForm.doQuery();
    me.close();
  },

  importFailed: function (root) {
    var me = this,
      message = '',
      tbReportMessage = me.down('[itemId=tbReportMessage]'),
      downloadFileLine = me.down('[itemId=downloadFileLine]');

    message = root.message ? root.message : '导入数据有误！';

    tbReportMessage.setValue(message);

    if (root.data) {
      me.errorFileUrl = root.data;
      downloadFileLine.show();
    } else {
      downloadFileLine.hide();
    }
  },

  items: [{
    border: false,
    items: [{
      xtype: 'form',
      height: 40,
      margin: '0 0 10 0',
      layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
      },
      border: false,
      defaults: {
        margin: '0 0 0 10'
      },
      items: [{
        xtype: 'filefield',
        name: 'excelFilename',
        fieldLabel: '导入文件',
        labelWidth: 80,
        buttonText: '浏览',
        width: 450,
        allowBlank: false,
        regex: /\.(xls|xlsx)$/i,
        regexText: '上传文件后缀必须是(xls|xlsx)',
        itemId: 'excelFilename'
      }, {
        xtype: 'button',
        text: '导入',
        itemId: 'btnImport'
      }, {
        xtype: 'linkbutton',
        text: '下载模板',
        itemId: 'btnDownloadTpl',
        title: '',
        stopEvent: true,
        listeners: {
          beforerender: function () {
            var tplUrl = this.up('window').tplUrl;
            this.path = tplUrl;
          },
          click: function () {
            Ext.util.ajax({
              url: this.path,
              success: function (root) {
                window.open(root.result, '_self');
              }
            });
          }
        }
      }]
    }, {
      height: 120,
      border: false,
      items: [{
        itemId: 'tbReportMessage',
        xtype: 'textareafield',
        width: '100%',
        height: 120,
        fieldStyle: 'color:red;padding:5px;',
        value: ''
      }]
    }, {
      itemId: 'downloadFileLine',
      margin: '10 0 0 0',
      height: 18,
      hidden: true,
      layout: {
        type: 'hbox'
      },
      defaults: {
        margin: '0 0 0 0'
      },
      border: false,
      items: [
        {
          xtype: 'displayfield',
          fieldStyle: 'color:red;margin:0;',
          value: '如需查看错误原因，请打开文件：'
        }, {
          xtype: 'linkbutton',
          text: '点击此处下载错误文件',
          itemId: 'downloadFile',
          stopEvent: true,
          listeners: {
            click: function () {
              var errorFileUrl = this.up('window').errorFileUrl;

              if (errorFileUrl) {
                window.open(errorFileUrl, '_self');
              }
            }
          }
        }
      ]
    }, {
      margin: '2 0 0 0',
      border: false,
      items: [
        {
          itemId: 'introText',
          xtype: 'displayfield',
          width: '100%',
          fieldStyle: 'color:#666;line-height:20px;margin:0;'
        }
      ]
    }]
  }],
  dockedItems: []
});