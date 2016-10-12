// ajax 封装
Ext.util.ajax = function(config) {
	var defaultOpts = {
			url: null,
			method: "GET",
			params: null,
			jsonData: null,
			disableCaching: false,
			beforerequest: null,
			requestcomplete: null,
			callback: null
		},
		opts = Ext.apply(defaultOpts, config);

	Ext.Ajax.request({
		url: opts.url,
		method: opts.method,
		params: opts.params,
		jsonData: opts.jsonData,
		disableCaching: opts.disableCaching,
		beforerequest: opts.beforerequest,
		requestcomplete: opts.requestcomplete,
		callback: opts.callback,
		success: function(response) {
			var root;

			if (response.responseText.length > 0) {
				root = Ext.decode(response.responseText);
			}
			if (typeof opts.success == 'function') {
				opts.success.apply(this, [root]);
			}
		},
		failure: function(response) {
			Ext.util.errorHandler(response, opts.failure);
		}
	});
};

// ajax请求服务端之前
Ext.Ajax.on('beforerequest', function(conn, options) {
	if (typeof options.beforerequest === 'function') {
		return options.beforerequest.apply(this, [options])
	} else {
		return true;
	}
});

// ajax请求服务器端完成
Ext.Ajax.on('requestcomplete', function(conn, response, options) {
	if (typeof options.requestcomplete === 'function') {
		return options.requestcomplete.apply(this, [response])
	}
});

// 请求服务端错误统一处理
Ext.util.errorHandler = function(response, callback) {
	var error,
		responseText = response.responseText;

	switch (response.status) {
		case 0:
			Ext.Msg.alert('错误', '通信失败, 请尝试刷新');
			break;
		case 401:
			error = Ext.decode(responseText);

			Ext.Msg.alert('错误', error.message, function() {
				location.href = location.href;
			});
			break;
		case 404:
			Ext.Msg.alert('错误', response.statusText);
			break;
		case 611:
			error = Ext.decode(responseText);

			window.open(error.message, '_self');
			break;
		default:
			error = Ext.util.isJsonString(responseText) ? Ext.decode(responseText) : {
				message: "未知错误"
			};

			if (typeof callback == 'function') {
				callback.apply(this, [response, error]);
			} else {
				Ext.Msg.alert('错误', error.message + '<span style="color:transparent;">a</span>');
			}
			break;
	}
}

// format 扩展一个lcoalDate方法
Ext.util.Format.localDate = function(val, format) {
	format = format ? format : 'Y-m-d H:i:s';

	return (val || val == '0') ? Ext.util.Format.date(new Date(val), format) : '';
};

// 检查字符串是否是一个json格式
Ext.util.isJsonString = function(str) {
	try {
		Ext.decode(str);
	} catch (e) {
		return false;
	}
	return true;
}

// 重写ext json encodeDate方法
Ext.JSON.encodeDate = function(o) {
	return '"' + Ext.Date.format(o, 'c') + '"';
}

// VTypes 扩展
Ext.apply(Ext.form.VTypes, {
	daterange: function(val, field) {
		var date = field.parseDate(val),
			form = field.up('form').getForm();

		if (!date) {
			return;
		}
		if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
			var start = form.findField(field.startDateField);
			start.setMaxValue(date);
			start.validate();
			this.dateRangeMax = date;
		} else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
			var end = form.findField(field.endDateField);
			end.setMinValue(date);
			end.validate();
			this.dateRangeMin = date;
		}
		return true;
	}
});

// 空方法为了匹配当前模块文件名
Ext.util.common = function() {};