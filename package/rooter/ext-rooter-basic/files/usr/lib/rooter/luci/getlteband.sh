#!/bin/sh

ROOTER=/usr/lib/rooter

CURRMODEM=$(uci get modem.general.miscnum)
COMMPORT="/dev/ttyUSB"$(uci get modem.modem$CURRMODEM.commport)
MODEMTYPE=$(uci get modem.modem$CURRMODEM.modemtype)
uVid=$(uci get modem.modem$CURRMODEM.uVid)
uPid=$(uci get modem.modem$CURRMODEM.uPid)

#SIERRA
if [ $MODEMTYPE -eq 2 ]; then

	ATCMDD="AT!ENTERCND=\"A710\""
	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")

	ATCMDD="AT!BAND?"

	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")
	RESP=$(echo "$OX" | sed -n '$p')

	echo "$RESP" > /tmp/lteresult$CURRMODEM.at

	if [ "$RESP" == "OK" ]; then
		LTEBAND=$(echo "$OX" | sed -n 3p | cut -c52-68)
		echo "$LTEBAND" >> /tmp/lteresult$CURRMODEM.at
	fi
elif  [ $MODEMTYPE -eq 6 ]; then

	ATCMDD="AT+QCFG=\"band\""
	
	if [ $uPid -eq "0800" ]; then
		ATCMDD="AT+QNWPREFCFG=\"lte_band\""
	fi

	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")
	RESP=$(echo "$OX" | sed -n '$p')

	echo "$RESP" > /tmp/lteresult$CURRMODEM.at

	if [ "$RESP" == "OK" ]; then
		if [ $uPid -eq "0800" ]; then
			RESP=$(echo $OX" " | grep -o "+QNWPREFCFG: \"lte_band\".\+ OK " | tr " " "," | tr "\"" "\0")
			LTEBAND=$(echo $RESP | cut -d, -f3)
		else
			RESP=$(echo $OX" " | grep -o "+QCFG: \"band\".\+ OK " | tr " " "," | tr "\"" "\0")
			LTEBAND=$(echo $RESP | cut -d, -f4)
		fi
		
		echo "$LTEBAND" >> /tmp/lteresult$CURRMODEM.at

	fi

fi


