'use strict';
function earfcn_to_freq(earfcn) {
	if (earfcn != "") {
		var earfcn_freq = [{
				f_lo: 2110,
				n_lo: 0,
				n_hi: 599,
				n_band: "B1"
			}, {
				f_lo: 1930,
				n_lo: 600,
				n_hi: 1199,
				n_band: "B2"
			}, {
				f_lo: 1805,
				n_lo: 1200,
				n_hi: 1949,
				n_band: "B3"
			}, {
				f_lo: 2110,
				n_lo: 1950,
				n_hi: 2399,
				n_band: "B4"
			}, {
				f_lo: 869,
				n_lo: 2400,
				n_hi: 2649,
				n_band: "B5"
			}, {
				f_lo: 875,
				n_lo: 2650,
				n_hi: 2749,
				n_band: "B6"
			}, {
				f_lo: 2620,
				n_lo: 2750,
				n_hi: 3449,
				n_band: "B7"
			}, {
				f_lo: 925,
				n_lo: 3450,
				n_hi: 3799,
				n_band: "B8"
			}, {
				f_lo: 1844.9,
				n_lo: 3800,
				n_hi: 4149,
				n_band: "B9"
			}, {
				f_lo: 2110,
				n_lo: 4150,
				n_hi: 4749,
				n_band: "B10"
			}, {
				f_lo: 1475.9,
				n_lo: 4750,
				n_hi: 4949,
				n_band: "B11"
			}, {
				f_lo: 729,
				n_lo: 5010,
				n_hi: 5179,
				n_band: "B12"
			}, {
				f_lo: 746,
				n_lo: 5180,
				n_hi: 5279,
				n_band: "B13"
			}, {
				f_lo: 758,
				n_lo: 5280,
				n_hi: 5379,
				n_band: "B14"
			}, {
				f_lo: 734,
				n_lo: 5730,
				n_hi: 5849,
				n_band: "B17"
			}, {
				f_lo: 860,
				n_lo: 5850,
				n_hi: 5999,
				n_band: "B18"
			}, {
				f_lo: 875,
				n_lo: 6000,
				n_hi: 6149,
				n_band: "B19"
			}, {
				f_lo: 791,
				n_lo: 6150,
				n_hi: 6449,
				n_band: "B20"
			}, {
				f_lo: 1495.9,
				n_lo: 6450,
				n_hi: 6599,
				n_band: "B21"
			}, {
				f_lo: 3510,
				n_lo: 6600,
				n_hi: 7399,
				n_band: "B22"
			}, {
				f_lo: 2180,
				n_lo: 7500,
				n_hi: 7699,
				n_band: "B23"
			}, {
				f_lo: 1525,
				n_lo: 7700,
				n_hi: 8039,
				n_band: "B24"
			}, {
				f_lo: 1930,
				n_lo: 8040,
				n_hi: 8689,
				n_band: "B25"
			}, {
				f_lo: 859,
				n_lo: 8690,
				n_hi: 9039,
				n_band: "B26"
			}, {
				f_lo: 852,
				n_lo: 9040,
				n_hi: 9209,
				n_band: "B27"
			}, {
				f_lo: 758,
				n_lo: 9210,
				n_hi: 9659,
				n_band: "B28"
			}, {
				f_lo: 717,
				n_lo: 9660,
				n_hi: 9769,
				n_band: "B292"
			}, {
				f_lo: 2350,
				n_lo: 9770,
				n_hi: 9869,
				n_band: "B30"
			}, {
				f_lo: 462.5,
				n_lo: 9870,
				n_hi: 9919,
				n_band: "B31"
			}, {
				f_lo: 1452,
				n_lo: 9920,
				n_hi: 10359,
				n_band: "B322"
			}, {
				f_lo: 1900,
				n_lo: 36000,
				n_hi: 36199,
				n_band: "B33"
			}, {
				f_lo: 2010,
				n_lo: 36200,
				n_hi: 36349,
				n_band: "B34"
			}, {
				f_lo: 1850,
				n_lo: 36350,
				n_hi: 36949,
				n_band: "B35"
			}, {
				f_lo: 1930,
				n_lo: 36950,
				n_hi: 37549,
				n_band: "B36"
			}, {
				f_lo: 1910,
				n_lo: 37550,
				n_hi: 37749,
				n_band: "B37"
			}, {
				f_lo: 2570,
				n_lo: 37750,
				n_hi: 38249,
				n_band: "B38"
			}, {
				f_lo: 1880,
				n_lo: 38250,
				n_hi: 38649,
				n_band: "B39"
			}, {
				f_lo: 2300,
				n_lo: 38650,
				n_hi: 39649,
				n_band: "B40"
			}, {
				f_lo: 2496,
				n_lo: 39650,
				n_hi: 41589,
				n_band: "B41"
			}, {
				f_lo: 3400,
				n_lo: 41590,
				n_hi: 43589,
				n_band: "B42"
			}, {
				f_lo: 3600,
				n_lo: 43590,
				n_hi: 45589,
				n_band: "B43"
			}, {
				f_lo: 703,
				n_lo: 45590,
				n_hi: 46589,
				n_band: "B44"
			}, {
				f_lo: 1447,
				n_lo: 46590,
				n_hi: 46789,
				n_band: "B45"
			}, {
				f_lo: 5150,
				n_lo: 46790,
				n_hi: 54539,
				n_band: "B46"
			}, {
				f_lo: 5855,
				n_lo: 54540,
				n_hi: 55239,
				n_band: "B47"
			}, {
				f_lo: 3550,
				n_lo: 55240,
				n_hi: 56739,
				n_band: "B48"
			}, {
				f_lo: 3550,
				n_lo: 56740,
				n_hi: 58239,
				n_band: "B49"
			}, {
				f_lo: 1432,
				n_lo: 58240,
				n_hi: 59089,
				n_band: "B50"
			}, {
				f_lo: 1427,
				n_lo: 59090,
				n_hi: 59139,
				n_band: "B51"
			}, {
				f_lo: 3300,
				n_lo: 59140,
				n_hi: 60139,
				n_band: "B52"
			}, {
				f_lo: 2110,
				n_lo: 65536,
				n_hi: 66435,
				n_band: "B65"
			}, {
				f_lo: 2110,
				n_lo: 66436,
				n_hi: 67335,
				n_band: "B66"
			}
		];
		var i;
		for (i = 0; i < earfcn_freq.length; i++)
			if (earfcn >= earfcn_freq[i].n_lo && earfcn <= earfcn_freq[i].n_hi)
				return earfcn_freq[i].n_band;
	}
	return "";
}
return L.Class.extend({
	title: _('Cell Locking'),
	handleCellLock: function (freq, pci, ev) {
		XHR.halt();
		L.dom.parent(ev.currentTarget, '.tr').style.opacity = 0.5;
		ev.currentTarget.classList.add('spinning');
		ev.currentTarget.disabled = true;
		ev.currentTarget.blur();
		this.callCellLock(freq, pci);
		XHR.run();
	},
	handleUnlock: function (ev) {
		XHR.halt();
		ev.currentTarget.classList.add('spinning');
		ev.currentTarget.disabled = true;
		ev.currentTarget.blur();
		this.callCellLock("", "");
		XHR.run();
	},
	callCellLock: function (pfreq, ppci) {
		if (pfreq != "" && ppci != "") {
			L.Request.get(L.url('admin/modem/lock_cell'), {
				query: {
					freq: pfreq,
					pci: ppci
				}
			}).then(function (res) {});
		} else {
			L.Request.get(L.url('admin/modem/lock_cell')).then(function (res) {});
		}
	},
	callCellDetails: function () {
		return L.Request.get(L.url('admin/modem/get_cell_details')).then(function (res) {
			var rv = res.json();
			return rv;
		});
	},
	load: function () {
		return Promise.all([L.resolveDefault(this.callCellDetails(), {})]);
	},
	render: function (data) {
		var lcell = data[0].celllock,
		scell = data[0].servingcell,
		ncells = Array.isArray(data[0].neighborcells) ? data[0].neighborcells : [];
		var flcell = [_('Cell Lock Status : '), (lcell == "N" ? "UNLOCKED" : "LOCKED"), (lcell == "Y" ? E('button', {
					'class': 'cbi-button cbi-button-remove',
					'click': L.bind(this.handleUnlock, this)
				}, [_('UNLOCK CELL')]) : " ")];
		var tlcell = E('div', {
				'class': 'table'
			});
		for (var i = 0; i < flcell.length; i += 3) {
			tlcell.appendChild(E('div', {
					'class': 'tr'
				}, [E('div', {
							'class': 'td right',
							'width': '33%'
						}, [flcell[i]]), E('div', {
							'class': 'td left'
						}, [(flcell[i + 1] != null) ? flcell[i + 1] : '-']), E('div', {
							'class': 'td left'
						}, [flcell[i + 2]])]));
		}
		var fscell = [_('Cell ID : '), scell.cellid, _('PCI : '), scell.pci, _('EARFCN : '), scell.frequency, ];
		var tscell = E('div', {
				'class': 'table'
			});
		for (var i = 0; i < fscell.length; i += 2) {
			tscell.appendChild(E('div', {
					'class': 'tr'
				}, [E('div', {
							'class': 'td right',
							'width': '33%'
						}, [fscell[i]]), E('div', {
							'class': 'td left'
						}, [(fscell[i + 1] != null) ? fscell[i + 1] : '-'])]));
		}
		var table = E('div', {
				'class': 'table'
			}, [E('div', {
						'class': 'tr table-titles'
					}, [E('div', {
								'class': 'th'
							}, _('HANDOVER')), E('div', {
								'class': 'th'
							}, _('EARFCN')), E('div', {
								'class': 'th'
							}, _('LTE BAND')), E('div', {
								'class': 'th'
							}, _('PCI')), E('div', {
								'class': 'th'
							}, _('RSRQ')), E('div', {
								'class': 'th'
							}, _('RSRP')), E('div', {
								'class': 'th'
							}, _('RSSI')), E('div', {
								'class': 'th'
							}, _('LOCK CELL'))])]);
		var rows = [];
		for (var i = 0; i < ncells.length; i++) {
			var handover = ncells[i].handover,
			frequency = ncells[i].frequency,
			pci = ncells[i].pci,
			rsrq = ncells[i].rsrq,
			rsrp = ncells[i].rsrp,
			rssi = ncells[i].rssi;
			var row = [handover, frequency, earfcn_to_freq(frequency), pci, rsrq, rsrp, rssi, E('button', {
					'class': 'cbi-button cbi-button-remove',
					'click': L.bind(this.handleCellLock, this, frequency, pci)
				}, [_('Lock Cell')])];
			rows.push(row);
		}
		cbi_update_table(table, rows, E('em', _('There are no neighbor cells')));
		return E([tlcell, E('h3', _('Serving Cell')), tscell, E('h3', _('Neighbor Cells')), table]);
	}
});