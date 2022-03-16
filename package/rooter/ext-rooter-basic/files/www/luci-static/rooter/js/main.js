var lte_band_1 = {hex: 0x1, dec: 1};
var lte_band_2 = {hex: 0x2, dec: 2};
var lte_band_3 = {hex: 0x4, dec: 3};
var lte_band_4 = {hex: 0x8, dec: 4};
var lte_band_5 = {hex: 0x10, dec: 5};
var lte_band_7 = {hex: 0x40, dec: 7};
var lte_band_8 = {hex: 0x80, dec: 8};
var lte_band_9 = {hex: 0x100, dec: 9};
var lte_band_12 = {hex: 0x800, dec: 12};
var lte_band_13 = {hex: 0x1000, dec: 13};
var lte_band_18 = {hex: 0x20000, dec: 18};
var lte_band_19 = {hex: 0x40000, dec: 19};
var lte_band_20 = {hex: 0x80000, dec: 20};
var lte_band_26 = {hex: 0x2000000, dec: 26};
var lte_band_28 = {hex: 0x8000000, dec: 28};
var lte_band_29 = {hex: 0x10000000, dec: 29};
var lte_band_30 = {hex: 0x20000000, dec: 30};
var lte_band_32 = {hex: 0x80000000, dec: 32};
var lte_band_38 = {hex: 0x2000000000, dec: 38};
var lte_band_40 = {hex: 0x8000000000, dec: 40};
var lte_band_41 = {hex: 0x10000000000, dec: 41};
var lte_band_42 = {hex: 0x20000000000, dec: 42};
var lte_band_43 = {hex: 0x40000000000, dec: 43};
var lte_band_46 = {hex: 0x200000000000, dec: 46};
var lte_band_48 = {hex: 0x800000000000, dec: 48};
//var lte_band_66 = 0x2;
var lte_band_all = "0xA700BA0F19DF";
var gw_band_all = 0x100600000EC00000;
var g_lte_bands = 0;
var modemIdP = "";
var modemType = "";
var bandType = "";
//var g1_lte_bands = 0;

$(document).ready(function(){
	$("input[name='lte_band']").click(function() {
		if ($('#LTE_ALL').get(0).checked) {
			if ( lte_band_all == "0X1E0BB1E39DF" ) // EM12
			{
				g_lte_bands = "0X2000001E0BB1E39DF";
			} 
			else if ( lte_band_all == "0X1A0BA0E19DF" ) // EM06
			{ 
				g_lte_bands = "1A0BA0E19DF";

			}
			else 
			{
				g_lte_bands = lte_band_all;
			}
			$('#LTE_B1').attr('disabled','disabled');
			$('#LTE_B2').attr('disabled','disabled');
			$('#LTE_B3').attr('disabled','disabled');
			$('#LTE_B4').attr('disabled','disabled');
			$('#LTE_B5').attr('disabled','disabled');
			$('#LTE_B7').attr('disabled','disabled');
			$('#LTE_B8').attr('disabled','disabled');
			$('#LTE_B9').attr('disabled','disabled');
			$('#LTE_B12').attr('disabled','disabled');
			$('#LTE_B13').attr('disabled','disabled');
			$('#LTE_B18').attr('disabled','disabled');
			$('#LTE_B19').attr('disabled','disabled');
			$('#LTE_B20').attr('disabled','disabled');
			$('#LTE_B26').attr('disabled','disabled');
			$('#LTE_B28').attr('disabled','disabled');
			$('#LTE_B29').attr('disabled','disabled');
			$('#LTE_B30').attr('disabled','disabled');
			$('#LTE_B32').attr('disabled','disabled');
			//$('#LTE_B66').attr('disabled','disabled');
			$('#LTE_B38').attr('disabled','disabled');
			$('#LTE_B40').attr('disabled','disabled');
			$('#LTE_B41').attr('disabled','disabled');
			$('#LTE_B42').attr('disabled','disabled');
			$('#LTE_B43').attr('disabled','disabled');
			$('#LTE_B46').attr('disabled','disabled');
			$('#LTE_B48').attr('disabled','disabled');
			$('#LTE_B1').get(0).checked = false;
			$('#LTE_B2').get(0).checked = false;
			$('#LTE_B3').get(0).checked = false;
			$('#LTE_B4').get(0).checked = false;
			$('#LTE_B5').get(0).checked = false;
			$('#LTE_B7').get(0).checked = false;
			$('#LTE_B8').get(0).checked = false;
			$('#LTE_B9').get(0).checked = false;
			$('#LTE_B12').get(0).checked = false;
			$('#LTE_B13').get(0).checked = false;
			$('#LTE_B18').get(0).checked = false;
			$('#LTE_B19').get(0).checked = false;
			$('#LTE_B20').get(0).checked = false;
			$('#LTE_B26').get(0).checked = false;
			$('#LTE_B28').get(0).checked = false;
			$('#LTE_B29').get(0).checked = false;
			$('#LTE_B30').get(0).checked = false;
			$('#LTE_B32').get(0).checked = false;
			//$('#LTE_B66').get(0).checked = false;
			$('#LTE_B38').get(0).checked = false;
			$('#LTE_B40').get(0).checked = false;
			$('#LTE_B41').get(0).checked = false;
			$('#LTE_B42').get(0).checked = false;
			$('#LTE_B43').get(0).checked = false;
			$('#LTE_B46').get(0).checked = false;
			$('#LTE_B48').get(0).checked = false;
					}
		else {
			var lbm;
			if (bandType == "hex") {
				lbm = 0;
			} else {
				lbm = "";
			}
			//var lbm1 = 0;
			$('#LTE_ALL').get(0).checked = false;
			if ($('#LTE_B1').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_1);
			if ($('#LTE_B2').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_2);
			if ($('#LTE_B3').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_3);
			if ($('#LTE_B4').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_4);
			if ($('#LTE_B5').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_5);
			if ($('#LTE_B7').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_7);
			if ($('#LTE_B8').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_8);
			if ($('#LTE_B9').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_9);
			if ($('#LTE_B12').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_10);
			if ($('#LTE_B13').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_13);
			if ($('#LTE_B18').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_18);
			if ($('#LTE_B19').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_19);
			if ($('#LTE_B20').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_20);
			if ($('#LTE_B26').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_26);
			if ($('#LTE_B28').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_28);
			if ($('#LTE_B29').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_29);
			if ($('#LTE_B30').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_30);
			if ($('#LTE_B32').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_32);
			if ($('#LTE_B38').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_38);
			if ($('#LTE_B40').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_40);
			if ($('#LTE_B41').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_41);
			if ($('#LTE_B42').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_42);
			if ($('#LTE_B43').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_43);
			if ($('#LTE_B46').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_46);
			if ($('#LTE_B48').get(0).checked)
				lbm = addBand(lbm, bandType, lte_band_48);
			g_lte_bands = lbm.toString(16).toUpperCase();
			/* if ($('#LTE_B66').get(0).checked)
				lbm1 += lte_band_66;
			g1_lte_bands = lbm1.toString(16).toUpperCase(); */
			enableLTEBand(modemType, modemIdP);
		}
	});
});

function initModemDefault(modemtype, idp)
{
	modemType = modemtype;
	modemIdP = idp;
	if ( modemtype == "6" ) // Quectel
	{
		if ( idp == "0512" ) // EM12G
		{
			lte_band_all = "0X1E0BB1E39DF";
			bandType = "hex"
		} 
		else if (idp == "0306") // EM06-E
		{
			lte_band_all = "0X1A0BA0E19DF";
			bandType = "hex"
		}
		else if (idp == "0800") // RM500Q
		{
			lte_band_all = "1:2:3:4:5:7:8:12:13:14:17:18:19:20:25:26:28:29:30:32:34:38:39:40:41:42:66:71";
			bandType = "dec"
		}
	}
	else if ( modemtype == "2" ) // Sierra
	{
		if ( idp == "9090" ) // EM7565
		{
			lte_band_all = "0000A700BA0E19DF";
			bandType = "hex"
		}
	}

}

function enableLTEBand(modemtype, idp)
{
	$('#LTE_ALL').removeAttr('disabled');
	$('#LTE_B1').removeAttr('disabled');
	$('#LTE_B2').removeAttr('disabled');
	$('#LTE_B3').removeAttr('disabled');
	$('#LTE_B4').removeAttr('disabled');
	$('#LTE_B5').removeAttr('disabled');
	$('#LTE_B7').removeAttr('disabled');
	$('#LTE_B8').removeAttr('disabled');
	$('#LTE_B9').removeAttr('disabled');
	$('#LTE_B12').removeAttr('disabled');
	$('#LTE_B13').removeAttr('disabled');
	$('#LTE_B18').removeAttr('disabled');
	$('#LTE_B19').removeAttr('disabled');
	$('#LTE_B20').removeAttr('disabled');
	$('#LTE_B26').removeAttr('disabled');
	$('#LTE_B28').removeAttr('disabled');
	$('#LTE_B29').removeAttr('disabled');
	$('#LTE_B30').removeAttr('disabled');
	$('#LTE_B32').removeAttr('disabled');
	if ( modemType == "6" ) // Quectel
	{
		
		if ( modemIdP == "0512" || modemIdP == "0306") // EM12G, EM06-E
		{
			$('#LTE_B38').removeAttr('disabled');
			$('#LTE_B40').removeAttr('disabled');
		} 
		
		if ( modemIdP == "0800" ) // RM500Q
		{
			$('#LTE_B38').removeAttr('disabled');
			$('#LTE_B40').removeAttr('disabled');
			$('#LTE_B42').removeAttr('disabled');
			$('#LTE_B43').removeAttr('disabled');
			$('#LTE_B46').removeAttr('disabled');
			$('#LTE_B48').removeAttr('disabled');
		}
	}
	$('#LTE_B41').removeAttr('disabled');
	if ( modemType == "2") // Sierra
	{
		if ( modemIdP == "9090" ) // EM7565
		{
			$('#LTE_B42').removeAttr('disabled');
			$('#LTE_B43').removeAttr('disabled');
			$('#LTE_B46').removeAttr('disabled');
			$('#LTE_B48').removeAttr('disabled');
		}
	}
			
	//$('#LTE_B66').removeAttr('disabled');
}

function initBandSel(value) 
{
	initModemDefault(modemType, modemIdP);
	
	var lbm; 
	if ( bandType == "hex" ) {
		lbm = parseInt(value, 16);
	} else {
		lbm = value;
	}
	
	if ( value.toUpperCase().trim() == lte_band_all ) {
		$('#LTE_ALL').get(0).checked = true;
		$('#LTE_B1').get(0).checked = false;
		$('#LTE_B2').get(0).checked = false;
		$('#LTE_B3').get(0).checked = false;
		$('#LTE_B4').get(0).checked = false;
		$('#LTE_B5').get(0).checked = false;
		$('#LTE_B7').get(0).checked = false;
		$('#LTE_B8').get(0).checked = false;
		$('#LTE_B9').get(0).checked = false;
		$('#LTE_B12').get(0).checked = false;
		$('#LTE_B13').get(0).checked = false;
		$('#LTE_B18').get(0).checked = false;
		$('#LTE_B19').get(0).checked = false;
		$('#LTE_B20').get(0).checked = false;
		$('#LTE_B26').get(0).checked = false;
		$('#LTE_B28').get(0).checked = false;
		$('#LTE_B29').get(0).checked = false;
		$('#LTE_B30').get(0).checked = false;
		$('#LTE_B32').get(0).checked = false;
		//$('#LTE_B66').get(0).checked = false;
		$('#LTE_B38').get(0).checked = false;
		$('#LTE_B40').get(0).checked = false;
		$('#LTE_B41').get(0).checked = false;
		$('#LTE_B42').get(0).checked = false;
		$('#LTE_B43').get(0).checked = false;
		$('#LTE_B46').get(0).checked = false;
		$('#LTE_B48').get(0).checked = false;
		$('#LTE_ALL').removeAttr('disabled');
		$('#LTE_B1').attr('disabled','disabled');
		$('#LTE_B2').attr('disabled','disabled');
		$('#LTE_B3').attr('disabled','disabled');
		$('#LTE_B4').attr('disabled','disabled');
		$('#LTE_B5').attr('disabled','disabled');
		$('#LTE_B7').attr('disabled','disabled');
		$('#LTE_B8').attr('disabled','disabled');
		$('#LTE_B9').attr('disabled','disabled');
		$('#LTE_B12').attr('disabled','disabled');
		$('#LTE_B13').attr('disabled','disabled');
		$('#LTE_B18').attr('disabled','disabled');
		$('#LTE_B19').attr('disabled','disabled');
		$('#LTE_B20').attr('disabled','disabled');
		$('#LTE_B26').attr('disabled','disabled');
		$('#LTE_B28').attr('disabled','disabled');
		$('#LTE_B29').attr('disabled','disabled');
		$('#LTE_B30').attr('disabled','disabled');
		$('#LTE_B32').attr('disabled','disabled');
		$('#LTE_B66').attr('disabled','disabled');
		$('#LTE_B38').attr('disabled','disabled');
		$('#LTE_B40').attr('disabled','disabled');
		$('#LTE_B41').attr('disabled','disabled');
		$('#LTE_B42').attr('disabled','disabled');
		$('#LTE_B43').attr('disabled','disabled');
		$('#LTE_B46').attr('disabled','disabled');
		$('#LTE_B48').attr('disabled','disabled');
	}
	else {
		$('#LTE_ALL').get(0).checked = false;
		$('#LTE_B1').get(0).checked = validateBand(lbm, bandType, lte_band_1, false);
		$('#LTE_B2').get(0).checked = validateBand(lbm, bandType, lte_band_2, false);
		$('#LTE_B3').get(0).checked = validateBand(lbm, bandType, lte_band_3, false);
		$('#LTE_B4').get(0).checked = validateBand(lbm, bandType, lte_band_4, false);
		$('#LTE_B5').get(0).checked = validateBand(lbm, bandType, lte_band_5, false);
		$('#LTE_B7').get(0).checked = validateBand(lbm, bandType, lte_band_7, false);
		$('#LTE_B8').get(0).checked = validateBand(lbm, bandType, lte_band_8, false);
		$('#LTE_B9').get(0).checked = validateBand(lbm, bandType, lte_band_9, false);
		$('#LTE_B12').get(0).checked = validateBand(lbm, bandType, lte_band_12, false);
		$('#LTE_B13').get(0).checked = validateBand(lbm, bandType, lte_band_13, false);
		$('#LTE_B18').get(0).checked = validateBand(lbm, bandType, lte_band_18, false);
		$('#LTE_B19').get(0).checked = validateBand(lbm, bandType, lte_band_19, false);
		$('#LTE_B20').get(0).checked = validateBand(lbm, bandType, lte_band_20, false);
		$('#LTE_B26').get(0).checked = validateBand(lbm, bandType, lte_band_26, false);
		$('#LTE_B28').get(0).checked = validateBand(lbm, bandType, lte_band_28, false);
		$('#LTE_B29').get(0).checked = validateBand(lbm, bandType, lte_band_29, false);
		$('#LTE_B30').get(0).checked = validateBand(lbm, bandType, lte_band_30, false);
		$('#LTE_B32').get(0).checked = validateBand(lbm, bandType, lte_band_32, false);
		$('#LTE_B38').get(0).checked = validateBand(lbm, bandType, lte_band_38, true);
		$('#LTE_B40').get(0).checked = validateBand(lbm, bandType, lte_band_40, true);
		$('#LTE_B41').get(0).checked = validateBand(lbm, bandType, lte_band_41, true);
		$('#LTE_B42').get(0).checked = validateBand(lbm, bandType, lte_band_42, true);
		$('#LTE_B43').get(0).checked = validateBand(lbm, bandType, lte_band_43, true);
		$('#LTE_B46').get(0).checked = validateBand(lbm, bandType, lte_band_46, true);
		$('#LTE_B48').get(0).checked = validateBand(lbm, bandType, lte_band_48, true);
		enableLTEBand(modemType, modemIdP);
	}
	/* var lbm1 = parseInt(value1, 16);
	if (BitwiseAndLarge(lbm1, lte_band_all) == lte_band_all) {
		$('#LTE_ALL').get(0).checked = true;
		$('#LTE_B2').get(0).checked = false;
	}
	else
	{
		$('#LTE_B66').get(0).checked = (lbm1 & lte_band_66) != 0;
		$('#LTE_B2').removeAttr('disabled');
	} */
	g_lte_bands = value;
	
}

function validateBand(value, type, band, isBitwiseAndLarge) {
	
	var isValid = true;
	
	if (type == "hex" ) {
		if (isBitwiseAndLarge == true) {
			isValid = BitwiseAndLarge(value, band["hex"]) != 0;
		} else {
			isValid = (value & band["hex"]) != 0;
		}
	} else {
		var bands = value.split(":");
		isValid = bands.includes(band["dec"].toString());
	}
	
	return isValid;
}

function addBand(value, type, band) {
	if (type == "hex") {
		value += band["hex"];
	} else {
		if (value == "") {
			value = value.concat(band["dec"].toString());
		} else {
			value = value.concat(":", band["dec"].toString());
		}
	}
	return value;
}

function BitwiseAndLarge(val1, val2) 
{
	var shift = 0, result = 0;
	var mask = ~((~0) << 30);
	var divisor = 1 << 30;
	while ((val1 != 0) && (val2 != 0)) {
		var rs = (mask & val1) & (mask & val2);
		val1 = Math.floor(val1 / divisor);
		val2 = Math.floor(val2 / divisor);
		var i = shift++;
		for (i; i--;) {
			rs *= divisor;
		}
		result += rs;
	}
	return result;
}

