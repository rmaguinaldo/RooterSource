#!/bin/sh
. /lib/functions.sh

ROOTER=/usr/lib/rooter
ROOTER_LINK="/tmp/links"

log() {
	logger -t "QMI Monitor" "$@"
}

CURRMODEM=$1
WDMNX=$(uci get modem.modem$CURRMODEM.wdm)
device=/dev/cdc-wdm$WDMNX
MAN=$(uci get modem.modem$CURRMODEM.manuf)
MOD=$(uci get modem.modem$CURRMODEM.model)
INTER=$(uci get modem.modem$CURRMODEM.inter)
ctr=0

log "Start QMI Connection Monitor for Modem $CURRMODEM"

CURSOR="-"
ping_check() {
	INTERF=$(uci get modem.modem$CURRMODEM.interface)
	ACTIVE=$(uci get profile.default.alive)
	if [ $ACTIVE = "0" ]; then
		echo 'MONSTAT="'"Disabled"'"' > /tmp/monstat$CURRMODEM
	fi
	if [ $ACTIVE = "5" ]; then
		track_ips=
		TIMEOUT=$(uci get profile.default.pingwait)
		RELIAB=$(uci get profile.default.reliability)
		DOWN=$(uci get profile.default.down)
		UP=$(uci get profile.default.up)
		COUNT=$(uci get profile.default.count)
		PACKETSIZE=$(uci get profile.default.packetsize)
		
		list_track_ips() {
			track_ips="$1 $track_ips"
		}

		config_load profile
		config_list_foreach "default" "trackip" list_track_ips
		
		# check to see if modem iface has an IP address, if not try a reconnect/power toggle
		if [ -z "$(ifconfig ${INTERF} 2>&1 | sed '/inet\ /!d;s/.*r://g;s/\ .*//g')" ]; then
				echo 'MONSTAT="'"DOWN (no IP address)"'"' > /tmp/monstat$CURRMODEM
				do_down
		fi
		UPDWN="0"
		host_up_count=0
		score_up=$UP
		score_dwn=$DOWN
		lost=0
		while true; do
			if [ ! -z "$track_ips" ]; then
				for track_ip in $track_ips; do
					ping -I $INTERF -c $COUNT -W $TIMEOUT -s $PACKETSIZE -q $track_ip &> /dev/null
					if [ $? -eq 0 ]; then
						let host_up_count++
					else
						let lost++
					fi
				done
				if [ $host_up_count -lt $RELIAB ]; then
					let score_dwn--
					score_up=$UP
					if [ $score_dwn -eq 0 ]; then
						UPDWN="1"
						break
					fi
				else
					let score_up--
					score_dwn=$DOWN
					if [ $score_up -eq 0 ]; then
						UPDWN="0"
						break
					fi
				fi
			else
				UPDWN="0"
				exit
			fi
			host_up_count=0
		done
		if [ $UPDWN = "1" ]; then
			echo 'MONSTAT="'"DOWN (using Ping Test)"'"' > /tmp/monstat$CURRMODEM
			log "Connection status is disconnected (using Ping Test)"
			do_down
		else
			echo 'MONSTAT="'"UP ($CURSOR) (using Ping Test)"'"' > /tmp/monstat$CURRMODEM
			ctr=0
		fi
		if [ $CURSOR = "-" ]; then
			CURSOR="+"
		else
			CURSOR="-"
		fi
	fi
}

do_down() {
	$ROOTER/signal/status.sh $CURRMODEM "$MAN $MOD" "ReConnecting"
	uci set modem.modem$CURRMODEM.connected=0
	uci commit modem
	jkillall con_monitor$CURRMODEM
	rm -f $ROOTER_LINK/con_monitor$CURRMODEM
	jkillall getsignal$CURRMODEM
	rm -f $ROOTER_LINK/getsignal$CURRMODEM
	ifdown wan$INTER
	
	log "Reconnecting..."
	$ROOTER/qmi/reconnectqmi.sh $CURRMODEM
	let "ctr++"
}

while [ $ctr -lt 3 ]; do	
		CONN=$(uqmi -s -d "$device" --get-data-status)
		T=$(echo $CONN | grep "disconnected")
		if [ ! -z $T ]; then
			log "QMI connection status is $CONN"
			do_down
		else
			ping_check
		fi
		sleep 5
done

$ROOTER/qmi/resetqmi.sh $CURRMODEM &
