#!/bin/sh

ROOTER=/usr/lib/rooter
ROOTER_LINK="/tmp/links"

log() {
	logger -t "QMI Reset" "$@"
}

CURRMODEM=$1
WDMNX=$(uci get modem.modem$CURRMODEM.wdm)
device=/dev/cdc-wdm$WDMNX

log "Resetting device..."
uqmi -s -d "$device" --set-device-operating-mode offline
uqmi -s -d "$device" --set-device-operating-mode reset