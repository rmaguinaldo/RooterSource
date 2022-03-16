'use strict';
'require fs';
function invokeIncludesLoad(includes) {
	var tasks = [],
	has_load = false;
	for (var i = 0; i < includes.length; i++) {
		if (typeof(includes[i].load) == 'function') {
			tasks.push(includes[i].load());
			has_load = true;
		} else {
			tasks.push(null);
		}
	}
	return has_load ? Promise.all(tasks) : Promise.resolve(null);
}
function startRender(includes, containers) {
	var step = function () {
		return invokeIncludesLoad(includes).then(function (results) {
			for (var i = 0; i < includes.length; i++) {
				var content = null;
				includes[i].name;
				if (typeof(includes[i].render) == 'function')
					content = includes[i].render(results ? results[i] : null);
				else if (includes[i].content != null)
					content = includes[i].content;
				if (content != null) {
					containers[i].parentNode.style.display = '';
					containers[i].parentNode.classList.add('fade-in');
					L.dom.content(containers[i], content);
				}
			}
			var ssi = document.querySelector('div.includes');
			if (ssi) {
				ssi.style.display = '';
				ssi.classList.add('fade-in');
			}
		});
	};
	return step().then(function () {
		L.Poll.add(step, 10);
	});
}
return L.view.extend({
	load: function () {
		return L.resolveDefault(fs.list('/www' + L.resource('view/rooter/lock')), []).then(function (entries) {
			return Promise.all(entries.filter(function (e) {
					return (e.type == 'file' && e.name.match(/\.js$/));
				}).map(function (e) {
					return 'view.rooter.lock.' + e.name.replace(/\.js$/, '');
				}).sort().map(function (n) {
					return L.require(n);
				}));
		});
	},
	render: function (includes) {
		var rv = E([]),
		containers = [];
		for (var i = 0; i < includes.length; i++) {
			var title = null;
			if (includes[i].title != null)
				title = includes[i].title;
			else
				title = String(includes[i]).replace(/^\[ViewStatusInclude\d+_(.+)Class\]$/, function (m, n) {
						return n.replace(/(^|_)(.)/g, function (m, s, c) {
							return (s ? ' ' : '') + c.toUpperCase()
						})
					});
			var container = E('div');
			rv.appendChild(E('div', {
					'class': 'cbi-section',
					'style': 'display:none'
				}, [title != '' ? E('h3', title) : '', container]));
			containers.push(container);
		}
		return startRender(includes, containers).then(function () {
			return rv;
		});
	},
	handleSaveApply: null,
	handleSave: null,
	handleReset: null
});