#!/bin/sh

# automatic build maker

#build version

PARAM=$1

git pull origin main

configfix() {
	DNS=$(cat "./.config" | grep "CONFIG_PACKAGE_dnsmasq-full=y")
	if [ ! -z $DNS ]; then
		sed -i -e 's/CONFIG_PACKAGE_dnsmasq=y/# CONFIG_PACKAGE_dnsmasq is not set/g' ./.config
	fi
	WPAD=$(cat "./.config" | grep "CONFIG_PACKAGE_wpad-basic=y")
	if [ ! -z $WPAD ]; then
		sed -i -e 's/CONFIG_PACKAGE_wpad-basic=y/# CONFIG_PACKAGE_wpad-basic is not set/g' ./.config
	fi
	WPAD=$(cat "./.config" | grep "CONFIG_PACKAGE_wpad=y")
	if [ ! -z $WPAD ]; then
		sed -i -e 's/CONFIG_PACKAGE_wpad-mini=y/# CONFIG_PACKAGE_wpad-mini is not set/g' ./.config
	fi

}

DATE="2021-01-26"

NAME="GoldenOrb_"
CODE="RNB.OPENWRT.190706.20220321.99"
rm -rf ./bin
rm -rf ./files
mkdir -p ./files/etc

echo "                        <model>" > ./files/etc/header_msg
echo "/img/r&b.png" >> ./files/etc/header_msg
echo "/img/r&b.png" >> ./files/etc/header_msg

echo "RBAA-WIFI" > ./files/etc/customwifi
echo "RBAA-5G" >> ./files/etc/customwifi
echo "ReganBryce" >> ./files/etc/customwifi
rm -r ./package/rooter/ext-rooter-basic/files/etc/netspeed

if [ -n "$PARAM" ]; then
	if [ "$PARAM" -eq "0" ]; then
		cp -r ./customized/customized/* .
		CODE=$CODE.01
	else
		cp -r ./customized/test/* .
	fi
fi

echo 'CODENAME="'"$CODE"'"' > ./files/etc/codename

BASE="openwrt-"
BASEO="openwrt-ar71xx-generic-tl-"
BASEQ="openwrt-ar71xx-generic-"
ENDO="-squashfs-factory"
ENDU="-squashfs-sysupgrade"

TYP="-GO"
END=$TYP$DATE

# WG3526

#cp ./configfiles/vermagic/kernel-defaults7621.mk ./include/kernel-defaults.mk
cp ./configfiles/16meg/.config_wg3526 ./.config

configfix
make download
make V=s

MOD="WG3526"
EXTB=".bin"

ORIG=openwrt-ramips-mt7621-zbt-wg3526-16M-squashfs-sysupgrade.bin
#FIRM=$BASE$MOD$END-upgrade$EXTB
FIRM=$MOD-$CODE-upgrade$EXTB
cp ./bin/targets/ramips/mt7621/$ORIG ./images/$FIRM
cd ./images
#zip $MOD$END.zip $FIRM
#rm -f $FIRM
cd ..
#cp ./configfiles/vermagic/kernel-defaults-orig.mk ./include/kernel-defaults.mk
#cp -r ./customized/orig/package/* ./package
cp -r ./customized/backup/* .

exit 0






