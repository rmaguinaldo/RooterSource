#!/bin/sh

ROOTER=/usr/lib/rooter

CURRMODEM=$(uci get modem.general.miscnum)
COMMPORT="/dev/ttyUSB"$(uci get modem.modem$CURRMODEM.commport)
MODEMTYPE=$(uci get modem.modem$CURRMODEM.modemtype)
uVid=$(uci get modem.modem$CURRMODEM.uVid)
uPid=$(uci get modem.modem$CURRMODEM.uPid)

#QUECTEL
if [ $MODEMTYPE -eq 6 ]; then

	ATCMDD="AT+QENG=\"neighbourcell\";+QENG=\"servingcell\";+QNWLOCK=\"common/4g\""

	OX=$($ROOTER/gcom/gcom-locked "$COMMPORT" "run-at.gcom" "$CURRMODEM" "$ATCMDD")
	RESP=$(echo "$OX" | sed -n '$p')

	if [ "$RESP" == "OK" ]; then
		echo "" > /tmp/neighborcell$CURRMODEM.at
		RESP=$(echo "$OX" | sed '1d;$d' | tr " " "," | tr "\"" "\0")
		ctr=0
		printf '%s\n' "$RESP" | while read RESPL; do
			CELL=$(echo $RESPL | grep "+QENG:")
			if [ -n "$CELL" ]; then
				NCELL=$(echo $CELL | grep "neighbourcell")
				if [ -n "$NCELL" ]; then
					HANDOVER=$(echo $RESPL | cut -d, -f3)
					EARFCN=$(echo $RESPL | cut -d, -f5)
					PCI=$(echo $RESPL | cut -d, -f6)
					RSRQ=$(echo $RESPL | cut -d, -f7)
					RSRP=$(echo $RESPL | cut -d, -f8)
					RSSI=$(echo $RESPL | cut -d, -f9)
					NCELL=$HANDOVER$(printf ",%s" $EARFCN)$(printf ",%s" $PCI)$(printf ",%s" $RSRQ)$(printf ",%s" $RSRP)$(printf ",%s" $RSSI)
					if [ $ctr -gt 0 ]; then
						echo "$NCELL" >> /tmp/neighborcell$CURRMODEM.at
					else
						echo "$NCELL" > /tmp/neighborcell$CURRMODEM.at
					fi
				else
					SCELL=$(echo $CELL | grep "servingcell")
					if [ $uPid -eq "0800" ]; then
						if [ -n "$SCELL" ]; then
							continue
						fi
						RAT=$(echo $RESPL | cut -d, -f2)
						CID=$(echo $RESPL | cut -d, -f6)
						PCI=$(echo $RESPL | cut -d, -f7)
						EARFCN=$(echo $RESPL | cut -d, -f8)
						if [ -n $CID ]; then
							if [ $RAT = "LTE" ]; then
								LCID=$(printf "%08X" 0x$CID)
								CID=$(printf "${LCID:6:2}")
							elif [ $RAT = "WCDMA" ]; then
								CID=$CID
							else
								continue
							fi
							CID_NUM=$(printf "%d" 0x$CID)
						fi
						SCELL=$CID$(printf ",%s" $CID_NUM)$(printf ",%s" $PCI)$(printf ",%s" $EARFCN)
						echo "$SCELL" > /tmp/servingcell$CURRMODEM.at
					else
						if [ -n "$SCELL" ]; then
							RAT=$(echo $RESPL | cut -d, -f4)
							CID=$(echo $RESPL | cut -d, -f8)
							PCI=$(echo $RESPL | cut -d, -f9)
							EARFCN=$(echo $RESPL | cut -d, -f10)
							if [ -n $CID ]; then
								if [ $RAT = "LTE" ]; then
									LCID=$(printf "%08X" 0x$CID)
									CID=$(printf "${LCID:6:2}")
								fi
								CID_NUM=$(printf "%d" 0x$CID)
							fi
							SCELL=$CID$(printf ",%s" $CID_NUM)$(printf ",%s" $PCI)$(printf ",%s" $EARFCN)
							echo "$SCELL" > /tmp/servingcell$CURRMODEM.at
						fi
					fi
					
				fi
				
			fi
			LOCKCELL=$(echo $RESPL | grep "+QNWLOCK:")
			if [ -n "$LOCKCELL" ]; then 
				ISLOCK=$(echo $RESPL | cut -d, -f3)
				if [ $ISLOCK -eq 1 ]; then
					echo "Y" > /tmp/celllock$CURRMODEM.at
				fi
			fi
			let "ctr++"
		done
	fi

fi


