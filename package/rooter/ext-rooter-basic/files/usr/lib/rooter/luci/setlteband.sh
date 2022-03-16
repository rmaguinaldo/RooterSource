#!/bin/sh

ROOTER=/usr/lib/rooter
ROOTER_LINK="/tmp/links"
LTEBAND=$1

CURRMODEM=$(uci get modem.general.miscnum)
COMMPORT="/dev/ttyUSB"$(uci get modem.modem$CURRMODEM.commport)
MODEMTYPE=$(uci get modem.modem$CURRMODEM.modemtype)
INTER=$(uci get modem.modeminfo$CURRMODEM.inter)
PROT=$(uci get modem.modem$CURRMODEM.proto)
uVid=$(uci get modem.modem$CURRMODEM.uVid)
uPid=$(uci get modem.modem$CURRMODEM.uPid)

#SIERRA
if [ $MODEMTYPE -eq 2 ]; then

	ATCMDD="AT!ENTERCND=\"A710\""
	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")

	ATCMDD="AT!BAND=10,\"CUSTOM LTE\",0,$LTEBAND"
	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")

	RESP=$(echo "$OX" | sed -n '$p')

	if [ "$RESP" == "OK" ]; then
		ATCMDD="AT!BAND=10"
		OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")
		
		if [ $PROT -ne "2" ]; then
			if [ -z $INTER ]; then
				INTER=$CURRMODEM
			else
				if [ $INTER = 0 ]; then
					INTER=$CURRMODEM
				fi
			fi
			ifup wan$INTER
		fi
	fi
	echo "$RESP" > /tmp/lockedlte$CURRMODEM.at

#QUECTEL
elif [ $MODEMTYPE -eq 6 ]; then

	ATCMDD="AT+QCFG=\"band\",0,$LTEBAND,1"
	
	if [ $uPid -eq "0800" ]; then
		ATCMDD="AT+QNWPREFCFG=\"lte_band\",$LTEBAND"
	fi

	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")
	RESP=$(echo "$OX" | sed -n '$p')

	if [ "$RESP" == "OK" ]; then
		if [ $PROT -ne "2" ]; then
			if [ -z $INTER ]; then
				INTER=$CURRMODEM
			else
				if [ $INTER = 0 ]; then
					INTER=$CURRMODEM
				fi
			fi
			ifup wan$INTER
		fi
	fi
	echo "$RESP" > /tmp/lockedlte$CURRMODEM.at
fi
