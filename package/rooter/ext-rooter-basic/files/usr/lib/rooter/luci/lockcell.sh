#!/bin/sh

ROOTER=/usr/lib/rooter
ROOTER_LINK="/tmp/links"

CURRMODEM=$(uci get modem.general.miscnum)
COMMPORT="/dev/ttyUSB"$(uci get modem.modem$CURRMODEM.commport)
MODEMTYPE=$(uci get modem.modem$CURRMODEM.modemtype)
PROT=$(uci get modem.modem$CURRMODEM.proto)
INTER=$(uci get modem.modeminfo$CURRMODEM.inter)
FREQ=$1
PCI=$2

#QUECTEL
if [ $MODEMTYPE -eq 6 ]; then
	if [ -z $FREQ ] && [ -z $PCI ]; then
		ATCMDD="AT+QNWLOCK=\"common/4g\",0"
	else
		ATCMDD="AT+QNWLOCK=\"common/4g\",1,$FREQ,$PCI"
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
	echo "$RESP" > /tmp/lockedcell$CURRMODEM.at
fi
